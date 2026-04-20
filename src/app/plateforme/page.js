'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, HelpCircle, Mail, ChevronRight, Shield, BookOpen, Users } from 'lucide-react'

export default function PlatformePage() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const moodleUrl = process.env.NEXT_PUBLIC_MOODLE_URL || 'https://learn.centre-odas.io'

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '100svh', background: '#321b45' }}>

        {/* Déco fond animée */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cercles flottants */}
          <div className="absolute -top-20 -right-20 rounded-full opacity-10 animate-float"
            style={{ width: '360px', height: '360px', background: '#ecc92f' }} />
          <div className="absolute bottom-20 -left-16 rounded-full opacity-10 animate-float-slow"
            style={{ width: '260px', height: '260px', background: '#34b7ad' }} />
          <div className="absolute top-1/3 right-1/4 rounded-full opacity-8"
            style={{ width: '120px', height: '120px', background: '#d5b3fd', animation: 'float 10s ease-in-out infinite 3s' }} />

          {/* Pictos décoratifs flottants */}
          <div className={`absolute top-20 left-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animation: visible ? 'float 7s ease-in-out infinite 1s' : 'none' }}>
            <Image src="/pictos/picto-04.png" alt="" width={64} height={64} className="object-contain" />
          </div>
          <div className={`absolute top-24 right-10 transition-all duration-1000 delay-400 ${visible ? 'opacity-35 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animation: visible ? 'float 9s ease-in-out infinite 2s' : 'none' }}>
            <Image src="/pictos/picto-07.png" alt="" width={55} height={55} className="object-contain" />
          </div>
          <div className={`absolute bottom-28 right-16 transition-all duration-1000 delay-600 ${visible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animation: visible ? 'float 11s ease-in-out infinite 0.5s' : 'none' }}>
            <Image src="/pictos/picto-05.png" alt="" width={48} height={48} className="object-contain" />
          </div>
          <div className={`absolute bottom-32 left-12 transition-all duration-1000 delay-300 ${visible ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animation: visible ? 'floatSlow 13s ease-in-out infinite 1.5s' : 'none' }}>
            <Image src="/pictos/picto-06.png" alt="" width={42} height={42} className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>

          {/* Symboles genre */}
          <div className="absolute top-16 right-1/3 text-white/10 font-black select-none" style={{ fontSize: '120px', lineHeight: 1 }}>♀</div>
          <div className="absolute bottom-10 left-1/3 text-white/8 font-black select-none" style={{ fontSize: '80px', lineHeight: 1 }}>⚥</div>

          {/* Étoile déco jaune */}
          <div className={`absolute top-28 right-1/4 transition-all duration-1000 delay-500 ${visible ? 'opacity-35' : 'opacity-0'}`}
            style={{ animation: visible ? 'floatSlow 8s ease-in-out infinite' : 'none' }}>
            <div style={{
              width: '32px', height: '32px', background: '#ecc92f',
              clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
            }} />
          </div>

          {/* Picto-03 coin bas-droit */}
          <div className="absolute bottom-0 right-0 pointer-events-none opacity-20">
            <Image src="/pictos/picto-03.png" alt="" width={200} height={240} className="object-contain" />
          </div>
        </div>

        {/* Contenu centré */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
          <div className="w-full max-w-lg">

            {/* Logo + badge */}
            <div className={`text-center mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex justify-center mb-6">
                <Image src="/logo-umo.png" alt="UMO ODAS" width={160} height={54}
                  className="h-14 w-auto object-contain" />
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-4 text-xs font-heading font-bold tracking-widest uppercase"
                style={{ background: 'rgba(236,201,47,0.18)', color: '#ecc92f', border: '1px solid rgba(236,201,47,0.35)' }}>
                <BookOpen className="w-3.5 h-3.5" /> Espace formation
              </div>
              <h1 className="font-heading font-black text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
                Accédez à votre<br />
                <span style={{ color: '#ecc92f' }}>formation en ligne</span>
              </h1>
              <p className="text-white/70 text-sm leading-relaxed">
                Utilisez vos identifiants Moodle reçus après validation de votre candidature.
              </p>
            </div>

            {/* Carte principale */}
            <div className={`transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="rounded-3xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)' }}>

                {/* Stats rapides */}
                <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
                  {[
                    { icon: Users, val: '+200', label: 'Apprenantes' },
                    { icon: BookOpen, val: '3', label: 'Cohortes' },
                    { icon: Shield, val: '8', label: 'Pays' },
                  ].map(({ icon: Icon, val, label }, i) => (
                    <div key={i} className="py-4 text-center">
                      <div className="font-heading font-black text-xl" style={{ color: '#ecc92f' }}>{val}</div>
                      <div className="text-white/50 text-xs mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Moodle */}
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 animate-pulse-glow"
                    style={{ background: 'rgba(98,46,209,0.5)', border: '2px solid rgba(98,46,209,0.7)' }}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading font-black text-white text-xl mb-2">Connexion à Moodle</h2>
                  <p className="text-white/60 text-sm mb-7 leading-relaxed">
                    Votre plateforme de cours, devoirs, échanges et ressources pédagogiques.
                  </p>
                  <a
                    href={moodleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-heading font-bold text-base transition-all duration-300"
                    style={{
                      background: hovered ? '#d4a017' : '#ecc92f',
                      color: '#321b45',
                      boxShadow: hovered ? '0 8px 28px rgba(236,201,47,0.55)' : '0 4px 16px rgba(236,201,47,0.35)',
                      transform: hovered ? 'translateY(-2px)' : 'none',
                    }}>
                    <ExternalLink className="w-5 h-5" />
                    Accéder à ma formation
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Section aide */}
            <div className={`mt-5 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-4 h-4" style={{ color: '#34b7ad' }} />
                  <h3 className="font-heading font-bold text-white text-sm">Besoin d&apos;aide ?</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'Vérifiez vos emails (y compris les spams)',
                    'Identifiants : votre email + mot de passe provisoire reçu',
                    'Mot de passe oublié ? Utilisez l\'option sur Moodle',
                    'Toujours bloquée ? Contactez-nous par email',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ecc92f' }} />
                      {tip}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <a href="mailto:umo@centre-odas.io"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-heading font-bold transition-all duration-200"
                    style={{ background: 'rgba(52,183,173,0.15)', color: '#34b7ad', border: '1.5px solid rgba(52,183,173,0.35)' }}>
                    <Mail className="w-4 h-4" /> umo@centre-odas.io
                  </a>
                  <Link href="/candidature"
                    className="text-white/45 hover:text-white text-xs font-heading transition-colors">
                    Pas encore candidaté·e ? →
                  </Link>
                </div>
              </div>
            </div>

            {/* Lien retour */}
            <div className={`text-center mt-6 transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              <Link href="/" className="text-white/35 hover:text-white/70 text-xs font-heading transition-colors">
                ← Retour au site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bande picto-10 */}
      <div className="overflow-hidden bg-white border-b border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '44px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ══ SECTION INFO COMPLÉMENTAIRE ══ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '/pictos/picto-14.png',
                color: '#622ed1',
                colorLight: 'rgba(98,46,209,0.07)',
                titre: 'Cours en ligne',
                desc: 'Des modules structurés, vidéos, lectures et exercices accessibles à votre rythme.',
              },
              {
                icon: '/pictos/picto-16.png',
                color: '#34b7ad',
                colorLight: 'rgba(52,183,173,0.08)',
                titre: 'Échanges & communauté',
                desc: 'Forums, groupes de discussion et sessions live avec vos co-apprenantes.',
              },
              {
                icon: '/pictos/picto-22.png',
                color: '#ecc92f',
                colorLight: 'rgba(236,201,47,0.10)',
                titre: 'Accompagnement',
                desc: 'Coaching en petits groupes, suivi personnalisé et ressources partagées.',
              },
            ].map((item, i) => (
              <div key={i} className="fade-up rounded-2xl p-6 text-center"
                data-delay={i * 120}
                style={{ background: item.colorLight, border: `2px solid ${item.color}22` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${item.color}15` }}>
                  <Image src={item.icon} alt="" width={34} height={34} className="object-contain" />
                </div>
                <h3 className="font-heading font-black text-base mb-2" style={{ color: item.color }}>{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BAS ══ */}
      <section className="py-12 md:py-16 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 100%)' }}>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <Image src="/pictos/picto-07.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="section-container fade-up">
          <h2 className="font-heading font-black text-white mb-2" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.2 }}>
            Pas encore inscrite ?
          </h2>
          <p className="text-white/65 text-sm mb-7 max-w-sm mx-auto">
            Candidatez à notre prochaine cohorte — places limitées.
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
