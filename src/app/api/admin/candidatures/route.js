import { NextResponse } from 'next/server'
import pool from '@/lib/db'

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'UmoAdmin2026!'

export async function GET(request) {
  try {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${ADMIN_SECRET}`) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }
    const [rows] = await pool.execute(
      'SELECT * FROM candidatures ORDER BY created_at DESC'
    )
    return NextResponse.json({ candidatures: rows })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${ADMIN_SECRET}`) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }
    const { id, statut } = await request.json()
    await pool.execute('UPDATE candidatures SET statut = ? WHERE id = ?', [statut, id])
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
