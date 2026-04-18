'use client'
import { useState } from 'react'

export default function AdminCandidatures() {
  const [candidatures, setCandidatures] = useState([])
  const [auth, setAuth] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('tous')
  const [selected, setSelected] = useState(null)

  const login = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/admin/candidatures', {
      headers: { Authorization: `Bearer ${password}` }
    })
    if (res.ok) {
      const data = await res.json()
      setCandidatures(data.candidatures)
      setAuth(true)
      localStorage.setItem('adminToken', password)
    } else {
      setError('Mot de passe incorrect')
    }
  }

  const updateStatut = async (id, statut) => {
    const token = localStorage.getItem('adminToken')
    await fetch('/api/admin/candidatures', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id, statut })
    })
    setCandidatures(prev => prev.map(c => c.id === id ? { ...c, statut } : c))
    if (selected?.id === id) setSelected(prev => ({ ...prev, statut }))
  }

  const filtered = candidatures.filter(c => filter === 'tous' ? true : c.statut === filter)
  const stats = {
    total: candidatures.length,
    en_attente: candidatures.filter(c => c.statut === 'en_attente').length,
    accepte: candidatures.filter(c => c.statut === 'accepte').length,
    refuse: candidatures.filter(c => c.statut === 'refuse').length,
  }

  if (!auth) return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#37029D,#2129BF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: 16, padding: '48px 40px', width: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🔐</div>
          <h1 style={{ color: '#2129BF', margin: 0, fontSize: 24 }}>Admin UMO ODAS</h1>
          <p style={{ color: '#666', marginTop: 8 }}>Espace réservé à l'équipe</p>
        </div>
        <form onSubmit={login}>
          <input type="password" placeholder="Mot de passe admin" value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', border: '2px solid #E8EAFF', borderRadius: 8, fontSize: 16, marginBottom: 12, boxSizing: 'border-box' }} />
          {error && <p style={{ color: 'red', fontSize: 13, marginBottom: 12 }}>{error}</p>}
          <button type="submit" style={{ width: '100%', padding: '14px', background: '#2129BF', color: 'white', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}>
            Accéder
          </button>
        </form>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#F4F5FF' }}>
      <div style={{ background: 'linear-gradient(135deg,#37029D,#2129BF)', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: 'white', margin: 0, fontSize: 24 }}>🎓 Admin UMO ODAS</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>Gestion des candidatures</p>
        </div>
        <button onClick={() => { setAuth(false); localStorage.removeItem('adminToken') }}
          style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: 8, padding: '8px 16px', cursor: 'pointer' }}>
          Déconnexion
        </button>
      </div>
      <div style={{ padding: '32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
          {[['📋','Total',stats.total,'#2129BF'],['⏳','En attente',stats.en_attente,'#F59E0B'],['✅','Acceptés',stats.accepte,'#10B981'],['❌','Refusés',stats.refuse,'#EF4444']].map(([emoji,label,value,color]) => (
            <div key={label} style={{ background: 'white', borderRadius: 12, padding: '20px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderLeft: `4px solid ${color}` }}>
              <div style={{ fontSize: 28, marginBottom: 4 }}>{emoji}</div>
              <div style={{ fontSize: 32, fontWeight: 'bold', color }}>{value}</div>
              <div style={{ color: '#666', fontSize: 14 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'white', borderRadius: 12, padding: '16px 24px', marginBottom: 24, display: 'flex', gap: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {[['tous','📋 Tous'],['en_attente','⏳ En attente'],['accepte','✅ Acceptés'],['refuse','❌ Refusés']].map(([f,label]) => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding: '8px 20px', borderRadius: 20, border: 'none', cursor: 'pointer', fontWeight: filter===f ? 'bold':'normal', background: filter===f ? '#2129BF':'#F4F5FF', color: filter===f ? 'white':'#444' }}>
              {label}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 400px' : '1fr', gap: 24 }}>
          <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F8F8FF' }}>
                  {['#','Nom','Email','Pays','Date','Statut','Actions'].map(h => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 13, color: '#666', fontWeight: '600' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => (
                  <tr key={c.id} onClick={() => setSelected(c)}
                    style={{ borderTop: '1px solid #F0F0F0', cursor: 'pointer', background: selected?.id===c.id ? '#EEF0FF':'white' }}>
                    <td style={{ padding: '14px 16px', color: '#999', fontSize: 13 }}>{c.id}</td>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>{c.prenom} {c.nom}</td>
                    <td style={{ padding: '14px 16px', color: '#2129BF', fontSize: 13 }}>{c.email}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13 }}>{c.pays}</td>
                    <td style={{ padding: '14px 16px', fontSize: 12, color: '#999' }}>{new Date(c.created_at).toLocaleDateString('fr-FR')}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: '600',
                        background: c.statut==='accepte' ? '#D1FAE5' : c.statut==='refuse' ? '#FEE2E2' : '#FEF3C7',
                        color: c.statut==='accepte' ? '#065F46' : c.statut==='refuse' ? '#991B1B' : '#92400E' }}>
                        {c.statut==='en_attente' ? '⏳ En attente' : c.statut==='accepte' ? '✅ Accepté' : '❌ Refusé'}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px' }} onClick={e => e.stopPropagation()}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {[['accepte','✅','#10B981'],['refuse','❌','#EF4444'],['en_attente','⏳','#F59E0B']].map(([s,emoji,bg]) => (
                          <button key={s} onClick={() => updateStatut(c.id, s)}
                            style={{ padding: '4px 10px', background: bg, color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>{emoji}</button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Aucune candidature</td></tr>
                )}
              </tbody>
            </table>
          </div>
          {selected && (
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', height: 'fit-content' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <h3 style={{ margin: 0, color: '#2129BF' }}>📋 Détail</h3>
                <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18 }}>✕</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[['👤 Nom',`${selected.prenom} ${selected.nom}`],['📧 Email',selected.email],['📱 Téléphone',selected.telephone||'N/A'],['🌍 Pays',selected.pays],['🏢 Organisation',selected.organisation||'N/A'],['📣 Source',selected.comment||'N/A'],['📅 Date',new Date(selected.created_at).toLocaleString('fr-FR')]].map(([label,value]) => (
                  <div key={label} style={{ borderBottom: '1px solid #F0F0F0', paddingBottom: 10 }}>
                    <div style={{ fontSize: 12, color: '#999', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 14, color: '#333' }}>{value}</div>
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: 12, color: '#999', marginBottom: 6 }}>💬 Motivation</div>
                  <div style={{ background: '#F8F8FF', borderLeft: '3px solid #2129BF', padding: '12px', fontSize: 13, color: '#444', borderRadius: 4, lineHeight: 1.6 }}>
                    {selected.motivation}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <button onClick={() => updateStatut(selected.id, 'accepte')}
                    style={{ flex: 1, padding: '10px', background: '#10B981', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}>✅ Accepter</button>
                  <button onClick={() => updateStatut(selected.id, 'refuse')}
                    style={{ flex: 1, padding: '10px', background: '#EF4444', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}>❌ Refuser</button>
                </div>
                <a href={`mailto:${selected.email}`}
                  style={{ display: 'block', textAlign: 'center', padding: '10px', background: '#2129BF', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold' }}>
                  📧 Répondre par email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
