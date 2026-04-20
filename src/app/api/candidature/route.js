import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { sendEmail } from '@/lib/mailer'

export async function POST(request) {
  try {
    const data = await request.json()
    const { prenom, nom, email, telephone, pays, organisation, motivation, comment } = data

    if (!prenom || !nom || !email || !pays || !motivation) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
    }

    // ÉTAPE 1 — Sauvegarder dans MySQL
    const [result] = await pool.execute(
      `INSERT INTO candidatures (prenom, nom, email, telephone, pays, organisation, motivation, comment, statut)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'en_attente')`,
      [prenom, nom, email, telephone || null, pays, organisation || null, motivation, comment || null]
    )

    if (!result.insertId) {
      return NextResponse.json({ error: 'Erreur de sauvegarde' }, { status: 500 })
    }

    // ÉTAPE 2 — Email à l'équipe ODAS
    await sendEmail({
      from: '"UMO ODAS" <noreply@centre-odas.io>',
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle candidature — ${prenom} ${nom} (${pays})`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#37029D,#2129BF);padding:30px;border-radius:12px 12px 0 0;text-align:center;">
          <h1 style="color:white;margin:0;">Nouvelle Candidature UMO</h1>
          <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;">Cohorte 4 (2025)</p>
        </div>
        <div style="background:white;padding:30px;border:1px solid #E8EAFF;">
          <p><strong>Nom :</strong> ${prenom} ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone || 'N/A'}</p>
          <p><strong>Pays :</strong> ${pays}</p>
          <p><strong>Organisation :</strong> ${organisation || 'N/A'}</p>
          <p><strong>Source :</strong> ${comment || 'N/A'}</p>
          <hr style="border:1px solid #E8EAFF;">
          <p><strong>Motivation :</strong></p>
          <div style="background:#F8F8FF;border-left:4px solid #2129BF;padding:16px;white-space:pre-wrap;">${motivation}</div>
          <div style="text-align:center;margin-top:24px;">
            <a href="mailto:${email}" style="background:#2129BF;color:white;padding:12px 28px;border-radius:25px;text-decoration:none;font-weight:bold;">Répondre à ${prenom}</a>
          </div>
        </div>
      </div>`,
    })

    // ÉTAPE 3 — Confirmation au candidat
    await sendEmail({
      from: '"Université Militante ODAS" <noreply@centre-odas.io>',
      to: email,
      subject: `Candidature reçue — Université Militante ODAS`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#37029D,#2129BF);padding:40px 30px;border-radius:12px 12px 0 0;text-align:center;">
          <div style="font-size:48px;">✅</div>
          <h1 style="color:white;margin:10px 0 0;">Candidature bien reçue !</h1>
          <p style="color:rgba(255,255,255,0.75);margin:10px 0 0;">Merci ${prenom} !</p>
        </div>
        <div style="background:white;padding:36px 30px;border:1px solid #E8EAFF;border-radius:0 0 12px 12px;">
          <p>Bonjour <strong style="color:#2129BF">${prenom} ${nom}</strong>,</p>
          <p>Nous avons bien reçu votre candidature pour la <strong>Cohorte 4 (2025)</strong>. Notre équipe vous répondra sous <strong>5 jours ouvrables</strong> à l'adresse <strong>${email}</strong>.</p>
          <p>Pour toute question : <a href="mailto:umo@centre-odas.io" style="color:#2129BF;">umo@centre-odas.io</a></p>
          <p>Chaleureusement,<br><strong style="color:#2129BF">L'équipe UMO ODAS</strong></p>
        </div>
      </div>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur candidature:', error)
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 })
  }
}
