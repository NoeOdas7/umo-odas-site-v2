'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Send, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function GenderDivider() {
  return (
    <div className="overflow-hidden select-none bg-white py-1">
      <Image src="/pictos/picto-20.png" alt="" width={1500} height={60}
        className="w-full object-cover" style={{ height: '32px', objectPosition: 'center' }} unoptimized />
    </div>
  )
}

export default function ContactPage() {
  const [visible, setVisible] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const [formRef, formInView] = useInView()
  const [infoRef, infoInView] = useInView()

  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSent(true)
    } catch {}
    setLoading(false)
  }

  if (sent) return (
    <div className="min-h-screen bg-white flex items-center pt-16">
      <div className="section-container text-center py-20">
        {/* Décos */}
        <div className="absolute top-32 left-10 opacity-40 pointer-events-none">
          <Image src="/pictos/picto-04.png" alt="" width={80} height={80} className="object-contain animate-float" />
        </div>
        <div className="absolute top-40 right-10 opacity-40 pointer-events-none">
          <Image src="/pictos/picto-07.png" alt="" width={70} height={70} className="object-contain animate-float-slow" />
        </div>
        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center animate-scale-in"
          style={{ background: 'rgba(52,183,173,0.15)' }}>
          <CheckCircle className="w-10 h-10" style={{ color: '#34b7ad' }} />
        </div>
        <h1 className="font-heading font-black mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#622ed1' }}>
          Message envoyé !
        </h1>
        <p className="text-gray-500 text-base mb-8 max-w-sm mx-auto">
          Nous vous répondrons dans les <strong>48 heures</strong>. Merci pour votre message.
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm transition-all duration-300 hover:-translate-y-1"
          style={{ background: '#ecc92f', color: '#321b45', boxShadow: '0 6px 20px rgba(236,201,47,.35)' }}>
          Retour à l&apos;accueil <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-white pt-24 pb-8 overflow-hidden">
        {/* Forme violette arc haut gauche */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-90 pointer-events-none"
          style={{ borderRadius: '0 0 100% 0', background: '#622ed1', transform: 'translate(-40%, -20%)' }} />
        {/* Feuilles teal gauche */}
        <div className="absolute left-0 top-32 opacity-75 pointer-events-none">
          <svg width="100" height="160" viewBox="0 0 100 160">
            <ellipse cx="50" cy="80" rx="42" ry="72" fill="#34b7ad" transform="rotate(-15 50 80)" />
            <ellipse cx="30" cy="115" rx="25" ry="45" fill="#34b7ad" transform="rotate(10 30 115)" opacity=".7" />
          </svg>
        </div>
        {/* Feuille jaune droite */}
        <div className="absolute right-10 top-24 opacity-80 pointer-events-none"
          style={{ animation: visible ? 'float 7s ease-in-out infinite' : 'none' }}>
          <Image src="/pictos/picto-07.png" alt="" width={80} height={80} className="object-contain" />
        </div>
        {/* Fleur teal droite haut */}
        <div className="absolute right-2 top-4 opacity-80 pointer-events-none"
          style={{ animation: visible ? 'float 5s ease-in-out infinite 1s' : 'none' }}>
          <Image src="/pictos/picto-04.png" alt="" width={90} height={90} className="object-contain" />
        </div>
        {/* Symbole ♀ droite */}
        <div className="absolute right-0 top-12 opacity-70 pointer-events-none">
          <span style={{ fontSize: '110px', color: '#321b45', lineHeight: 1 }}>♀</span>
        </div>
        {/* Étoile violette */}
        <div className="absolute left-24 bottom-4 opacity-50 pointer-events-none">
          <div style={{
            width: '36px', height: '36px', background: '#622ed1',
            clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
          }} />
        </div>

        <div className={`section-container text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-6 py-1.5 rounded-full mb-4 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(213,179,253,0.3)', color: '#622ed1' }}>
            ✉ Contactez-nous
          </div>
          <h1 className="font-heading font-black leading-tight mb-4">
            <span style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#622ed1', display: 'block' }}>Nous</span>
            <span style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#ecc92f', display: 'block' }}>contacter</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Une question sur le programme, une candidature, un partenariat ?
            Écrivez-nous — nous répondons sous <strong>48h</strong>.
          </p>
        </div>
      </section>

      <GenderDivider />

      {/* ══ INFOS + FORMULAIRE ══ */}
      <section className="bg-white py-10 md:py-16 relative overflow-hidden">
        {/* Fleur jaune bas gauche */}
        <div className="absolute left-4 bottom-12 opacity-60 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={60} height={60} className="object-contain" />
        </div>
        {/* Feuille teal bas droite */}
        <div className="absolute right-0 bottom-8 opacity-60 pointer-events-none">
          <svg width="60" height="90" viewBox="0 0 60 90">
            <ellipse cx="30" cy="45" rx="24" ry="42" fill="#34b7ad" transform="rotate(-15 30 45)" />
          </svg>
        </div>

        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

            {/* ── Colonne infos ── */}
            <div ref={infoRef} className={`space-y-5 transition-all duration-700 ${infoInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="font-heading font-black text-xl mb-6" style={{ color: '#622ed1' }}>
                Nos coordonnées
              </h2>

              {/* Email */}
              <div className="rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ background: 'rgba(98,46,209,0.06)', border: '2px solid rgba(98,46,209,0.12)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#622ed1' }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-wider mb-0.5" style={{ color: '#622ed1', opacity: 0.6 }}>Email</div>
                  <a href="mailto:umo@centre-odas.io" className="font-heading font-bold text-sm hover:underline" style={{ color: '#622ed1' }}>
                    umo@centre-odas.io
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ background: 'rgba(52,183,173,0.08)', border: '2px solid rgba(52,183,173,0.18)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#34b7ad' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-wider mb-0.5" style={{ color: '#34b7ad', opacity: 0.7 }}>Localisation</div>
                  <div className="font-heading font-bold text-sm" style={{ color: '#321b45' }}>
                    Abidjan, Côte d&apos;Ivoire
                  </div>
                </div>
              </div>

              {/* Centre ODAS */}
              <div className="rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ background: 'rgba(236,201,47,0.12)', border: '2px solid rgba(236,201,47,0.3)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#ecc92f' }}>
                  <span className="font-heading font-black text-umo-dark text-base">O</span>
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-wider mb-0.5" style={{ color: '#d4a017', opacity: 0.9 }}>Site officiel</div>
                  <a href="https://centre-odas.org" target="_blank" rel="noopener noreferrer"
                    className="font-heading font-bold text-sm hover:underline" style={{ color: '#321b45' }}>
                    centre-odas.org ↗
                  </a>
                </div>
              </div>

              {/* Illustration personnage */}
              <div className="flex justify-center pt-4 opacity-70">
                <Image src="/pictos/picto-02.png" alt="" width={120} height={150}
                  className="object-contain"
                  style={{ filter: 'drop-shadow(0 8px 16px rgba(98,46,209,0.2))' }} />
              </div>
            </div>

            {/* ── Formulaire ── */}
            <div ref={formRef} className={`lg:col-span-2 transition-all duration-700 delay-100 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="rounded-3xl p-8 md:p-10 shadow-sm"
                style={{ border: '2px solid rgba(98,46,209,0.1)', background: 'white' }}>

                <h2 className="font-heading font-black text-xl mb-6" style={{ color: '#321b45' }}>
                  Envoyez-nous un message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Nom complet</label>
                      <input className="form-input" placeholder="Votre nom"
                        value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} required />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-input" placeholder="votre@email.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Sujet</label>
                    <select className="form-input"
                      value={form.sujet} onChange={e => setForm({ ...form, sujet: e.target.value })} required>
                      <option value="">Choisir un sujet…</option>
                      <option value="candidature">Candidature / Inscription</option>
                      <option value="programme">Question sur le programme</option>
                      <option value="partenariat">Partenariat / Collaboration</option>
                      <option value="presse">Presse / Médias</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Message *</label>
                    <textarea rows={5} className="form-input resize-none"
                      placeholder="Décrivez votre demande…"
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                    <div className="flex justify-end mt-1">
                      <span className={`text-xs ${form.message.length > 0 ? 'text-gray-400' : 'text-gray-200'}`}>
                        {form.message.length} caractères
                      </span>
                    </div>
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-heading font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: '#622ed1', color: 'white', boxShadow: '0 6px 20px rgba(98,46,209,.3)' }}>
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>Envoyer le message <Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Vos données sont confidentielles. Réponse sous 48h.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ══ CTA ══ */}
      <section className="bg-white py-10 md:py-16 text-center relative overflow-hidden">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
          <Image src="/pictos/picto-04.png" alt="" width={60} height={60} className="object-contain" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="section-container fade-up">
          <h2 className="font-heading font-black mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#622ed1' }}>
            Vous voulez rejoindre l&apos;UMO ?
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto">
            Les candidatures pour la prochaine cohorte sont ouvertes.
          </p>
          <Link href="/candidature"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-heading font-bold text-base transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#ecc92f', color: '#321b45', boxShadow: '0 6px 20px rgba(236,201,47,.4)' }}>
            Candidatez ——→
          </Link>
        </div>
      </section>
    </>
  )
}
