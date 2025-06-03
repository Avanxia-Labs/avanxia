// api/contact.js
import 'dotenv/config'
import nodemailer from 'nodemailer'

// Importamos aquí los datos para resolver IDs a nombres
import { categoriesData } from '../../data/categoriesData'
import { servicesData, serviceAddons } from '../../data/servicesData'

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  // Desestructuramos TODO lo que viene en el body:
  const {
    name,
    email,
    phone,
    company,
    message,
    selectedList = [],      // Arreglo de { id, name, price } (si venía preseleccionado)
    total,
    category,               // ID de categoría (string)
    plan,                   // ID de plan (string)
    selectedAddonIds = []   // Array de IDs de addons (string[])
  } = req.body

  // 1) Resolución de IDs a nombres legibles

  // 1.a) Nombre de la categoría
  const catObj = categoriesData.find(c => c.id === category)
  const catName = catObj ? catObj.name : '—'

  // 1.b) Nombre del plan (si existe)
  const planObj = servicesData.find(s => s.id === plan)
  const planName = planObj ? `${planObj.name} ($${planObj.price})` : null

  // 1.c) Addons marcados: buscamos en serviceAddons
  const addonsSeleccionados = serviceAddons
    .filter(a => selectedAddonIds.includes(a.id))
    .map(a => `${a.name} ($${a.price})`)

  // 2) Construimos el arreglo “Servicios seleccionados” unificando:
  //    - Lo que venga en selectedList (carrito)
  //    - Si selectedList está vacío, incluimos el plan y los addons
  let serviciosSeleccionados = []

  if (Array.isArray(selectedList) && selectedList.length > 0) {
    serviciosSeleccionados = selectedList.map(i => `${i.name} ($${i.price})`)
  } else {
    if (planName) {
      serviciosSeleccionados.push(`Plan: ${planName}`)
    }
    // Si tuvieras campo “service” distinto del plan, haz algo similar
    // if (serviceName) { serviciosSeleccionados.push(`Servicio: ${serviceName}`) }

    // Agregamos cada addon por separado
    serviciosSeleccionados.push(...addonsSeleccionados)
  }

  // 3) Construimos el texto del correo
  const textLines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone || '—'}`,
    `Empresa: ${company || '—'}`,
    `Categoría seleccionada: ${catName}`,
    '',
    'Plan / Addons marcados:',
    ...serviciosSeleccionados.map(s => ` - ${s}`),
    '',
    `Total: $${total}`,
    '',
    'Mensaje:',
    message,
  ]
  const text = textLines.join('\n')

  // 4) Configuramos nodemailer
  const transporter = nodemailer.createTransport({
    host:    process.env.SMTP_HOST,
    port:    Number(process.env.SMTP_PORT),
    secure:  true, // si usas puerto TLS (465). Mailtrap funciona con 465.
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Avanxia Web" <${process.env.SMTP_USER}>`,
      to:   'info@avanxia.com', // o la cuenta de Mailtrap para desarrollo
      subject: 'Nuevo mensaje desde formulario web',
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando mail:', err)
    return res.status(500).json({ error: err.message || 'Error interno' })
  }
}
