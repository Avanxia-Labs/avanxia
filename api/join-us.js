// api/join-us.js
import 'dotenv/config'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  const { name, email, role, message } = req.body

  // Configura el transporter con tus env-vars (definidas en Vercel o .env)
  const transporter = nodemailer.createTransport({
    host:    process.env.SMTP_HOST,
    port:    Number(process.env.SMTP_PORT),
    secure:  true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Construye el cuerpo de texto
  const textLines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Rol / Área: ${role || '—'}`,
    '',
    'Mensaje:',
    message,
  ]
  const text = textLines.join('\n')

  try {
    await transporter.sendMail({
      from:    `"Avanxia – Forma parte del equipo" <${process.env.SMTP_USER}>`,
      to:      'info@avanxia.com',
      subject: 'Nueva solicitud “Forma parte del equipo”',
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando join-us:', err)
    return res.status(500).json({ error: err.message || 'Error interno' })
  }
}
