// api/contact.js
import 'dotenv/config'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  const { name, email, phone, company, message, selectedList, total } = req.body

  // Configura el transporter con las credenciales que haya en el entorno (.env.local o Vercel)
  const transporter = nodemailer.createTransport({
    host:    process.env.SMTP_HOST,
    port:    Number(process.env.SMTP_PORT),
    secure:  true,   // si usas puerto 465. En Mailtrap también funciona con TLS en 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Construye el cuerpo de texto
  const textLines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone || '—'}`,
    `Empresa: ${company || '—'}`,
    '',
    'Servicios seleccionados:',
    ...selectedList.map(i => ` - ${i.name} ($${i.price})`),
    '',
    `Total: $${total}`,
    '',
    'Mensaje:',
    message,
  ]
  const text = textLines.join('\n')

  try {
    await transporter.sendMail({
      from: `"Avanxia Web" <${process.env.SMTP_USER}>`,
      to:   'info@avanxia.com', // o la dirección que prefieras simular/enviar
      subject: 'Nuevo mensaje desde formulario web',
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando mail:', err)
    return res.status(500).json({ error: err.message || 'Error interno' })
  }
}
