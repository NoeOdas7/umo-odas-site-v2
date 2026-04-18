import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mailer'

export async function POST(request) {
  try {
    const { nom, email, sujet, message } = await request.json()

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    await sendEmail({
      from: '"UMO ODAS Contact" <noreply@umo-centre-odas.org>',
      to: process.env.CONTACT_EMAIL,
      subject: `📩 Contact site UMO — ${sujet}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#37029D,#2129BF);padding:24px;border-radius:12px 12px 0 0;">
          <h2 style="color:white;margin:0;font-size:18px;">📩 Nouveau message — Site UMO ODAS</h2>
        </div>
        <div style="background:white;padding:24px;border:1px solid #E8EAFF;border-radius:0 0 12px 12px;">
          <p><strong style="color:#2129BF">De :</strong> ${nom} &lt;${email}&gt;</p>
          <p><strong style="color:#2129BF">Sujet :</strong> ${sujet}</p>
          <hr style="border:1px solid #E8EAFF;margin:16px 0;">
          <p style="color:#444;line-height:1.7;white-space:pre-wrap;">${message}</p>
          <div style="margin-top:20px;">
            <a href="mailto:${email}" style="background:#2129BF;color:white;padding:10px 24px;border-radius:20px;text-decoration:none;font-size:13px;font-weight:bold;">
              Répondre à ${nom}
            </a>
          </div>
        </div>
      </div>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur contact:', error)
    return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 })
  }
}
