// server/sendMail.js
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendContactForm(data) {


  const { name, email, phone, company, message, selectedList, total } = data;

  const lines = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone || '—'}`,
    `Empresa: ${company || '—'}`,
    '',
    'Servicio(s) seleccionados:',
    ...selectedList.map(i => ` - ${i.name} ($${i.price})`),
    '',
    `Total: $${total}`,
    '',
    'Mensaje:',
    message,
  ].join('\n');

  // 3) Envía:
  const info = await transporter.sendMail({
    from: `"Form Avanxia" <${process.env.SMTP_USER}>`,
    to: 'info@avanxia.com',
    subject: 'Nuevo mensaje desde formulario web',
    text: lines,
  });

  console.log('Mensaje enviado: %s', info.messageId);
  return info;
}
