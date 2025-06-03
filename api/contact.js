// api/contact.js
import 'dotenv/config'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  // Desestructuramos TODO lo que llega en el body:
  // - name, email, phone, company, message, total: del formulario
  // - selectedList: si sí tenías un carrito (props.location.state)
  // - plan, service, selectedAddonIds: si seleccionaste plan/servicio o addons
  const {
    name,
    email,
    phone,
    company,
    message,
    selectedList = [],
    total,
    plan,
    service,
    selectedAddonIds = []
  } = req.body

  // 1) Construimos un arreglo unificado de "servicios seleccionados".
  //    - Primero incluimos cualquier item que ya viniera en selectedList (slot desde location.state)
  //    - Luego, si no hay nada en selectedList, armamos el plan/servicio + addons que vinieron en formData.
  let serviciosSeleccionados = []

  if (Array.isArray(selectedList) && selectedList.length > 0) {
    // Si el usuario llegó con un carrito (por ejemplo, clickeó en “Agregar al contacto”),
    // selectedList ya contiene objetos { id, name, price, ... }.
    serviciosSeleccionados = selectedList.map((i) => ({
      name: i.name,
      price: i.price
    }))
  } else {
    // Si no viene carrito, buscamos el plan o servicio
    if (plan) {
      serviciosSeleccionados.push({
        name: `Plan: ${plan}`,
        price: '' // opcional, podrías inyectar el precio real si lo buscas en tu data
      })
    }
    if (service) {
      serviciosSeleccionados.push({
        name: `Servicio: ${service}`,
        price: ''
      })
    }
    // Finalmente, los addons (solo los IDs), los convertimos a nombre+precio
    if (Array.isArray(selectedAddonIds) && selectedAddonIds.length > 0) {
      // Aquí asumimos que existe un arreglo global serviceAddons (o similar) 
      // importado en este archivo, o bien envías junto a cada ID su nombre/precio.
      // Si no lo tienes importado aquí, puedes enviar desde el frontend 
      // los objetos completos en selectedList en lugar de solo los IDs.
      //
      // Por simplicidad, supongamos que haces otra petición a tu arreglo de addons:
      const { serviceAddons } = require('@/data/servicesData') 
      // (ajusta la ruta si hace falta). Ahora filtramos:
      selectedAddonIds.forEach((id) => {
        const addon = serviceAddons.find((a) => a.id === id)
        if (addon) {
          serviciosSeleccionados.push({
            name: addon.name,
            price: addon.price
          })
        }
      })
    }
  }

  // 2) Volvemos a construir el cuerpo de texto, incluyendo la lista completa:
  const textLines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone || '—'}`,
    `Empresa: ${company || '—'}`,
    '',
    'Servicios seleccionados:',
    ...serviciosSeleccionados.map((item) => ` - ${item.name}${item.price ? ` ($${item.price})` : ''}`),
    '',
    `Total: $${total}`,
    '',
    'Mensaje:',
    message,
  ]
  const text = textLines.join('\n')

  // 3) Configura el transporter con las credenciales que haya en el entorno (.env.local o Vercel)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // si usas puerto 465. En Mailtrap también funciona con TLS en 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Avanxia Web" <${process.env.SMTP_USER}>`,
      to: 'info@avanxia.com', // o la dirección que prefieras simular/enviar
      subject: 'Nuevo mensaje desde formulario web',
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando mail:', err)
    return res.status(500).json({ error: err.message || 'Error interno' })
  }
}
