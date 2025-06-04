import nodemailer from 'nodemailer'
import { config } from 'dotenv'
config()  // carga server/.env

// Configura el transporter
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Verificación al arrancar
transporter.verify(err => {
  if (err) {
    console.error('✖ Error conectando SMTP:', err)
    process.exit(1)
  }
  console.log('✔ SMTP conectado correctamente')
})

// Construye la lista de destinatarios
const getRecipients = () => {
  const list = [ process.env.SMTP_USER ]
  if (process.env.ADDITIONAL_EMAIL) list.push(process.env.ADDITIONAL_EMAIL)
  return list.join(',')
}

/**
 * Envía el formulario de contacto principal.
 */
export async function sendContactForm(data) {
  // Ahora incluimos category y plan junto a lo que ya había
  const {
    name,
    email,
    phone,
    company,
    message,
    selectedList = [],
    total = 0,
    category = '—',
    plan = '—'
  } = data

  const lines = [
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
  ].join('\n')

  const info = await transporter.sendMail({
    from:    `"Form Avanxia" <${process.env.SMTP_USER}>`,
    to:      getRecipients(),
    subject: 'Nuevo mensaje desde formulario web',
    text:    lines,
  })

  console.log('✅ Contacto enviado:', info.messageId)
  return info
}

/**
 * Envía el formulario “Forma parte del equipo”.
 */
export async function sendJoinUsForm(data) {
  const { name, email, role, message } = data

  const lines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Rol / Área: ${role || '—'}`,
    '',
    'Mensaje:',
    message,
  ].join('\n')

  const info = await transporter.sendMail({
    from:    `"Join Us" <${process.env.SMTP_USER}>`,
    to:      getRecipients(),
    subject: 'Nueva solicitud “Forma parte del equipo”',
    text:    lines,
  })

  console.log('✅ Join Us enviado:', info.messageId)
  return info
}
