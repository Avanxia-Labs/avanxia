// api/contact.js
import 'dotenv/config'
import nodemailer from 'nodemailer'

import { categoriesData } from '../../data/categoriesData'
import { servicesData, serviceAddons } from '../../data/servicesData'

export default async function handler(req, res) {
  console.log('📩 Llega petición a /api/contact con método:', req.method)
  console.log('📥 Cuerpo de la petición:', JSON.stringify(req.body, null, 2))

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  const {
    name,
    email,
    phone,
    company,
    message,
    selectedList = [],
    total,
    category,
    plan,
    selectedAddonIds = []
  } = req.body

  // Verificar que vengan los campos obligatorios:
  if (!name || !email || !message) {
    console.error('Falta nombre, email o mensaje en el body.')
    return res.status(400).json({ error: 'Faltan campos obligatorios.' })
  }

  // 1) Convertir IDs a nombres legibles
  const catObj = categoriesData.find(c => c.id === category)
  const catName = catObj ? catObj.name : '—'

  const planObj = servicesData.find(s => s.id === plan)
  const planName = planObj ? `${planObj.name} ($${planObj.price})` : null

  const addonsSeleccionados = serviceAddons
    .filter(a => selectedAddonIds.includes(a.id))
    .map(a => `${a.name} ($${a.price})`)

  let serviciosSeleccionados = []
  if (Array.isArray(selectedList) && selectedList.length > 0) {
    serviciosSeleccionados = selectedList.map(i => `${i.name} ($${i.price})`)
  } else {
    if (planName) serviciosSeleccionados.push(`Plan: ${planName}`)
    serviciosSeleccionados.push(...addonsSeleccionados)
  }

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

  // Mostrar el cuerpo final que se va a enviar por correo
  console.log('✉️ Contenido del correo:\n', text)

  // 2) Crear transporter de Nodemailer
  let transporter
  try {
    transporter = nodemailer.createTransport({
      host:    process.env.SMTP_HOST,
      port:    Number(process.env.SMTP_PORT),
      secure:  true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  } catch (err) {
    console.error('❌ No se pudo crear el transporter:', err)
    return res.status(500).json({ error: 'Error creando transporte de correo.' })
  }

  try {
    await transporter.sendMail({
      from: `"Avanxia Web" <${process.env.SMTP_USER}>`,
      to:   'info@avanxia.com', 
      subject: 'Nuevo mensaje desde formulario web',
      text,
    })
    console.log('✅ Correo enviado con éxito.')
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('❌ Error enviando mail:\n', err)
    return res.status(500).json({ error: err.message || 'Error interno' })
  }
}
