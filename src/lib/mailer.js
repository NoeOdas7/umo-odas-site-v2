import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendEmail({ from, to, subject, html }) {
  return transporter.sendMail({ from, to, subject, html })
}

export default transporter
