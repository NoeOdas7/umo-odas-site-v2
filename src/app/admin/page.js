'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import { Search, LogOut, Home, RefreshCw, X, Mail, ChevronDown, Shield } from 'lucide-react'

// ─── Statuts ───────────────────────────────────────────────────────────────
const STATUTS = {
  en_attente: { label: 'En attente', emoji: '⏳', bg: '#fef9c3', text: '#854d0e', border: '#fde047' },
  acceptee:   { label: 'Acceptée',   emoji: '✅', bg: '#dcfce7', text: '#166534', border: '#86efac' },
  refusee:    { label: 'Refusée',    emoji: '❌', bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' },
  en_cours:   { label: 'En cours',   emoji: '🔄', bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },
}

const ADMIN_PASSWORD = 'UmoOdas@2026'

export default function AdminPage() {
  const [auth, setAuth]                 = useState(false)
  const [password, setPassword]         = useState('')
  const [errPass, setErrPass]           = useState(false)
  const [showPass, setShowPass]         = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [visible, setVisible]           = useState(false)
  const [candidatures, setCandidatures] = useState([])
  const [loading, setLoading]           = useState(false)
  const [selected, setSelected]         = useState(null)
  const [filtre, setFiltre]             = useState('tous')
  const [recherche, setRecherche]       = useState('')
  const [updating, setUpdating]         = useState(false)
  const [supabase, setSupabase]         = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (url && key) setSupabase(createClient(url, key))
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginLoading(true)
    await new Promise(r => setTimeout(r, 500))
    if (password === ADMIN_PASSWORD) { setAuth(true); setErrPass(false) }
    else setErrPass(true)
    setLoginLoading(false)
  }

  const fetchCandidatures = useCallback(async () => {
    if (!supabase) return
    setLoading(true)
    const { data, error } = await supabase
      .from('candidatures').select('*').order('created_at', { ascending: false })
    if (!error) setCandidatures(data || [])
    setLoading(false)
  }, [supabase])

  useEffect(() => { if (auth && supabase) fetchCandidatures() }, [auth, supabase, fetchCandidatures])

  const changerStatut = async (id, nouveauStatut) => {
    if (!supabase) return
    setUpdating(true)
    await supabase.from('candidatures').update({ statut: nouveauStatut }).eq('id', id)
    await fetchCandidatures()
    if (selected?.id === id) setSelected(prev => ({ ...prev, statut: nouveauStatut }))
    setUpdating(false)
  }

  const candidaturesFiltrees = candidatures.filter(c => {
    const matchFiltre    = filtre === 'tous' || c.statut === filtre
    const matchRecherche = recherche === '' ||
      `${c.prenom} ${c.nom} ${c.email} ${c.pays} ${c.organisation}`.toLowerCase().includes(recherche.toLowerCase())
    return matchFiltre && matchRecherche
  })

  const stats = {
    total:      candidatures.length,
    en_attente: candidatures.filter(c => c.statut === 'en_attente').length,
    acceptee:   candidatures.filter(c => c.statut === 'acceptee').length,
    refusee:    candidatures.filter(c => c.statut === 'refusee').length,
  }

  // ══ LOGIN PAGE ══════════════════════════════════════════════════════════
  if (!auth) return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ background: '#321b45' }}>

      {/* Déco fond */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 -right-16 rounded-full opacity-10 animate-float"
          style={{ width: '280px', height: '280px', background: '#ecc92f' }} />
        <div className="absolute -bottom-16 -left-16 rounded-full opacity-10 animate-float-slow"
          style={{ width: '220px', height: '220px', background: '#34b7ad' }} />
        <div className={`absolute top-16 left-8 transition-all duration-1000 ${visible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ animation: visible ? 'float 7s ease-in-out infinite' : 'none' }}>
          <Image src="/pictos/picto-04.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className={`absolute bottom-20 right-10 transition-all duration-1000 delay-300 ${visible ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ animation: visible ? 'float 9s ease-in-out infinite 2s' : 'none' }}>
          <Image src="/pictos/picto-07.png" alt="" width={48} height={48} className="object-contain" />
        </div>
        <div className="absolute top-10 right-10 text-white/10 font-black select-none" style={{ fontSize: '100px', lineHeight: 1 }}>♀</div>
        <div className="absolute bottom-0 right-0 opacity-15">
          <Image src="/pictos/picto-03.png" alt="" width={160} height={190} className="object-contain" />
        </div>
      </div>

      <div className={`relative z-10 w-full max-w-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Logo + titre */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
            <Image src="/logo-umo.png" alt="UMO ODAS" width={140} height={48}
              className="h-12 w-auto object-contain" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 text-xs font-heading font-bold"
            style={{ background: 'rgba(236,201,47,0.18)', color: '#ecc92f', border: '1px solid rgba(236,201,47,0.35)' }}>
            <Shield className="w-3.5 h-3.5" /> Espace Administration
          </div>
          <p className="text-white/55 text-sm">Accès réservé à l&apos;équipe UMO ODAS</p>
        </div>

        {/* Carte login */}
        <div className="rounded-3xl p-8"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)' }}>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-white/70 text-xs font-heading font-semibold mb-2 uppercase tracking-wider">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setErrPass(false) }}
                  className="w-full px-4 py-3.5 pr-12 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: errPass ? '2px solid #f87171' : '2px solid rgba(255,255,255,0.2)',
                    color: 'white',
                  }}
                />
                <button type="button" onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors text-xs font-heading">
                  {showPass ? 'Masquer' : 'Voir'}
                </button>
              </div>
              {errPass && (
                <p className="mt-2 text-xs font-heading" style={{ color: '#f87171' }}>
                  Mot de passe incorrect. Réessayez.
                </p>
              )}
            </div>
            <button type="submit" disabled={loginLoading || !password}
              className="w-full py-4 rounded-xl font-heading font-bold text-sm transition-all duration-300 disabled:opacity-50"
              style={{
                background: loginLoading ? 'rgba(236,201,47,0.7)' : '#ecc92f',
                color: '#321b45',
                boxShadow: '0 4px 16px rgba(236,201,47,0.3)',
              }}>
              {loginLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-umo-dark/30 border-t-umo-dark rounded-full animate-spin" />
                  Connexion...
                </span>
              ) : 'Accéder au tableau de bord'}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-white/30 hover:text-white/60 text-xs font-heading transition-colors">← Retour au site</a>
        </div>
      </div>
    </div>
  )

  // ══ TABLEAU DE BORD ═════════════════════════════════════════════════════
  return (
    <div className="min-h-screen" style={{ background: '#f8f4ff' }}>

      {/* HEADER */}
      <div className="sticky top-0 z-40 px-4 sm:px-6 py-4 flex items-center justify-between"
        style={{ background: 'linear-gradient(90deg, #321b45 0%, #622ed1 100%)', boxShadow: '0 2px 20px rgba(50,27,69,0.4)' }}>
        <div className="flex items-center gap-3">
          <Image src="/logo-umo.png" alt="UMO" width={100} height={34}
            className="h-8 w-auto object-contain" />
          <div className="h-5 w-px bg-white/20 hidden sm:block" />
          <div className="hidden sm:block">
            <p className="font-heading font-black text-white text-sm leading-none">Admin</p>
            <p className="text-white/50 text-xs">Gestion des candidatures</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={fetchCandidatures}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'white' }}>
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Actualiser</span>
          </button>
          <a href="/"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'white' }}>
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Accueil</span>
          </a>
          <button onClick={() => setAuth(false)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)' }}>
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="px-4 sm:px-6 pt-6 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total',      value: stats.total,      color: '#622ed1', bg: 'white',     border: 'rgba(98,46,209,0.15)' },
          { label: 'En attente', value: stats.en_attente, color: '#d97706', bg: '#fef9c3',   border: '#fde04755' },
          { label: 'Acceptées',  value: stats.acceptee,   color: '#166534', bg: '#dcfce7',   border: '#86efac55' },
          { label: 'Refusées',   value: stats.refusee,    color: '#991b1b', bg: '#fee2e2',   border: '#fca5a555' },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: s.bg, border: `2px solid ${s.border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <div className="font-heading font-black text-3xl sm:text-4xl mb-1" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs font-heading font-semibold" style={{ color: s.color, opacity: 0.7 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* FILTRES */}
      <div className="px-4 sm:px-6 pb-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#622ed1' }} />
          <input
            type="text"
            placeholder="Rechercher par nom, email, pays..."
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{ background: 'white', border: '2px solid rgba(98,46,209,0.15)', color: '#321b45' }}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            { key: 'tous',       label: 'Tous'      },
            { key: 'en_attente', label: '⏳ Attente' },
            { key: 'acceptee',   label: '✅ Acceptées' },
            { key: 'refusee',    label: '❌ Refusées'  },
          ].map(f => (
            <button key={f.key} onClick={() => setFiltre(f.key)}
              className="px-4 py-2.5 rounded-xl text-xs font-heading font-bold transition-all duration-200"
              style={{
                background: filtre === f.key ? '#622ed1' : 'white',
                color: filtre === f.key ? 'white' : '#622ed1',
                border: `2px solid ${filtre === f.key ? '#622ed1' : 'rgba(98,46,209,0.2)'}`,
                boxShadow: filtre === f.key ? '0 4px 12px rgba(98,46,209,0.3)' : 'none',
              }}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* LISTE + DÉTAIL */}
      <div className={`px-4 sm:px-6 pb-10 ${selected ? 'flex flex-col lg:flex-row gap-5' : ''}`}>

        {/* Liste */}
        <div className={selected ? 'lg:w-1/2' : 'w-full'}>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="w-10 h-10 border-3 border-t-umo-purple rounded-full animate-spin"
                style={{ borderColor: 'rgba(98,46,209,0.2)', borderTopColor: '#622ed1' }} />
              <p className="text-sm font-heading" style={{ color: '#622ed1' }}>Chargement...</p>
            </div>
          ) : candidaturesFiltrees.length === 0 ? (
            <div className="text-center py-20 rounded-2xl"
              style={{ background: 'white', border: '2px dashed rgba(98,46,209,0.2)' }}>
              <div className="text-5xl mb-3">📭</div>
              <p className="font-heading font-bold" style={{ color: '#622ed1' }}>Aucune candidature trouvée</p>
              <p className="text-gray-400 text-sm mt-1">Essayez de modifier vos filtres</p>
            </div>
          ) : (
            <div className="space-y-3">
              {candidaturesFiltrees.map(c => {
                const s = STATUTS[c.statut] || STATUTS.en_attente
                return (
                  <div key={c.id} onClick={() => setSelected(c)}
                    className="rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'white',
                      border: selected?.id === c.id ? '2px solid #622ed1' : '2px solid rgba(98,46,209,0.08)',
                      boxShadow: selected?.id === c.id ? '0 4px 16px rgba(98,46,209,0.18)' : '0 2px 8px rgba(0,0,0,0.04)',
                    }}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-heading font-black text-white text-sm"
                          style={{ background: 'linear-gradient(135deg, #622ed1, #9963db)' }}>
                          {(c.prenom || '?')[0].toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="font-heading font-bold text-sm truncate" style={{ color: '#321b45' }}>{c.prenom} {c.nom}</p>
                          <p className="text-gray-400 text-xs truncate">{c.email}</p>
                          <p className="text-gray-300 text-xs mt-0.5">🌍 {c.pays}{c.organisation ? ` · ${c.organisation}` : ''}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className="text-xs font-heading font-bold px-3 py-1 rounded-full border"
                          style={{ background: s.bg, color: s.text, borderColor: s.border }}>
                          {s.emoji} {s.label}
                        </span>
                        <span className="text-gray-300 text-xs">{new Date(c.created_at).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Panneau détail */}
        {selected && (
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden sticky top-20"
              style={{ background: 'white', border: '2px solid rgba(98,46,209,0.15)', boxShadow: '0 8px 32px rgba(98,46,209,0.12)' }}>

              {/* Header détail */}
              <div className="px-6 py-5 flex items-start justify-between"
                style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 100%)' }}>
                <div>
                  <h2 className="font-heading font-black text-white text-lg">{selected.prenom} {selected.nom}</h2>
                  <p className="text-white/65 text-sm">{selected.email}</p>
                </div>
                <button onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                {/* Infos */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['Pays', selected.pays],
                    ['Téléphone', selected.telephone || 'N/A'],
                    ['Organisation', selected.organisation || 'N/A'],
                    ['Source', selected.comment || 'N/A'],
                    ['Date', new Date(selected.created_at).toLocaleDateString('fr-FR')],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl p-3" style={{ background: '#f3ebff' }}>
                      <p className="text-xs font-heading font-semibold mb-0.5" style={{ color: '#622ed1', opacity: 0.7 }}>{label}</p>
                      <p className="font-heading font-bold text-sm" style={{ color: '#321b45' }}>{value}</p>
                    </div>
                  ))}
                </div>

                {/* Motivation */}
                <div>
                  <p className="text-xs font-heading font-bold uppercase tracking-widest mb-2" style={{ color: '#622ed1' }}>Lettre de motivation</p>
                  <div className="rounded-xl p-4 text-sm leading-relaxed max-h-36 overflow-y-auto"
                    style={{ background: '#f3ebff', color: '#321b45', border: '1.5px solid rgba(98,46,209,0.12)' }}>
                    {selected.motivation}
                  </div>
                </div>

                {/* Statut */}
                <div>
                  <p className="text-xs font-heading font-bold uppercase tracking-widest mb-3" style={{ color: '#622ed1' }}>Changer le statut</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(STATUTS).map(([key, val]) => (
                      <button key={key} disabled={updating || selected.statut === key}
                        onClick={() => changerStatut(selected.id, key)}
                        className="py-2.5 px-3 rounded-xl text-xs font-heading font-bold border-2 transition-all duration-200 disabled:opacity-60"
                        style={{
                          background: selected.statut === key ? val.bg : 'white',
                          color: selected.statut === key ? val.text : '#6b7280',
                          borderColor: selected.statut === key ? val.border : '#e5e7eb',
                        }}>
                        {val.emoji} {val.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <a href={`mailto:${selected.email}?subject=Votre candidature UMO ODAS`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-heading font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#622ed1', color: 'white', boxShadow: '0 4px 14px rgba(98,46,209,0.35)' }}>
                  <Mail className="w-4 h-4" />
                  Envoyer un email à {selected.prenom}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
