import 'dotenv/config'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  // Ahora destructuramos category y plan además de lo que ya había
  const { 
    name, 
    email, 
    phone, 
    company, 
    message, 
    selectedList = [], 
    total = 0, 
    category = '—',   // por si no viene
    plan = '—'        // por si no viene
  } = req.body

  // Configura el transporter con las credenciales que haya en el entorno
  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT),
    secure: true, // si usas puerto 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Construye el cuerpo de texto. Agregamos categoría y plan antes de la lista de servicios/addons.
  const textLines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone || '—'}`,
    `Empresa: ${company || '—'}`,
    `Categoría: ${category}`,
    `Plan: ${plan}`,
    '',
    'Servicios / Addons seleccionados:',
    ...selectedList.map(i => ` • ${i.name} ($${i.price})`),
    '',
    `Total: $${total}`,
    '',
    'Mensaje:',
    message,
  ]
  const text = textLines.join('\n')

  try {
    await transporter.sendMail({
      from:    `"Avanxia Web" <${process.env.SMTP_USER}>`,
      to:      'info@avanxia.com',
      subject: 'Nuevo mensaje desde formulario web',
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando mail:', err)
    return res.status(500).json({ error: err.message || 'Error interno' })
  }
}
