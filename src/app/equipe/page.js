'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ── Hook animation au scroll ── */
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

/* ── Données équipe ── */
const equipe = [
  { nom: 'Mme Oury KAMISSOKO', role: 'Membre du Sous Comité Suivi', organisation: 'AJCAF-AS', pays: '🇲🇱 Mali',  photo:'/equipe/oury.jpg'},
  { nom: 'Mme Djossa Esther', role: 'Doctorante', organisation: 'Benin Women Alumni Association', pays: '🇧🇯 Bénin', photo:'/equipe/_DSC0204(1)-ester DJOSSA.JPG'  },
  { nom: 'M. Tonfack Armando', role: 'MEAL Advisor', organisation: 'Le Centre ODAS', pays: '🇨🇲 Cameroun', photo: getDriveUrl('1-EZxAMcBgwZoG8KUeBQa4XF6f3ZDiVj7') },
  { nom: 'Mme Kouakou Anasthasie Affoue Estelle', role: 'Project Manager', organisation: 'Africa Forward Advisory Group', pays: '🇨🇮 Côte d’Ivoire', photo: getDriveUrl('1CBbGCqeAnxIZ81PjLn4Bm5fAK8_Jxps6') },
  { nom: 'Mme Fatou Bintou', role: 'Représentante Pays', organisation: 'Population Council', pays: '🇸🇳 Sénégal', photo: getDriveUrl('1dJvPTvUWZz6qrOB17Hka9EuAjLzhY8-4') },
  { nom: 'M. Tanoh Noe', role: 'Assistant MEAL', organisation: 'Le Centre ODAS', pays: '🇨🇮 Côte d’Ivoire', photo:'/equipe/ },
  { nom: 'Dr Ramatou Ouedraogo', role: 'Chercheure', organisation: 'APHRC', pays: '🇰🇪 Kenya', photo: getDriveUrl('1EO9BKtOm3cx3HQ9VY1cEeXChJ8UVIjtg') },
  { nom: 'Mme Deneo Désirée', role: 'Doctorante', organisation: 'Ligue Ivoirienne des Droits des Femmes', pays: '🇨🇦 Canada', photo: getDriveUrl('1GACNrStBPZ9ASw8opmSX87K1lFAATtqI') },
  { nom: 'M. Noel ADANLAO', role: 'Chargé de Communication', organisation: 'Le Centre ODAS', pays: '🇧🇯 Bénin', photo: getDriveUrl('1zfvZLhRNAADnMsUPYvdODDDYP-x4i8UE') },
  { nom: 'Mme Reine Stéphanie THIOMBIANO', role: 'Chargé de l\'engagement', organisation: 'Le Centre ODAS', pays: '🌍 Afrique', photo: getDriveUrl('1AZT-GTYc26xl3m8HYFWLd4ZT20fb4RUE') },
  { nom: 'Dr Beniel AGOSSOU', role: 'Conseiller Technique', organisation: 'Le Centre ODAS', pays: '🌍 Afrique', photo: getDriveUrl('1PpnL3uIyP536QyE6GPupSb-ckeZH2ILW') },
  { nom: 'M. Karna KONE', role: 'Chargé de Communication', organisation: 'Le Centre ODAS', pays: '🌍 Afrique', photo: getDriveUrl('1Nnbe2n8e7RFwPa3DPD2O4oQWiw8kRPkf') },
  { nom: 'Dr Dela Nai', role: 'Experte DSSR', organisation: 'Ibis Reproductive Health', pays: '🌍 Afrique', photo: getDriveUrl('1xblYmDQg7Osq_AFJTLAvY1XikYwe5QU_') }
]

/* ── Carte membre animée ── */
function MembreCard({ membre, delay = 0 }) {
  const [ref, inView] = useInView(0.08)
  const [imgErr, setImgErr] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: hovered ? '2px solid rgba(98,46,209,0.3)' : '2px solid rgba(98,46,209,0.1)',
        boxShadow: hovered ? '0 14px 40px rgba(98,46,209,0.18)' : '0 2px 16px rgba(98,46,209,0.06)',
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(32px)',
        transition: 'opacity 0.55s ease, transform 0.4s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transitionDelay: inView ? '0ms' : `${delay}ms`,
      }}
    >
      {/* Zone photo */}
      <div className="relative overflow-hidden"
        style={{ height: '260px', background: 'linear-gradient(135deg, #f3ebff 0%, #e0ccfa 100%)' }}>
        {!imgErr ? (
          <Image
            src={membre.photo}
            alt={`Photo de ${membre.nom}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgErr(true)}
            style={{
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center font-heading font-black text-white text-3xl"
              style={{ background: 'linear-gradient(135deg, #622ed1, #34b7ad)' }}>
              {membre.nom.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(98,46,209,0.7) 0%, transparent 100%)' }} />
        {/* Badge pays */}
        <div className="absolute bottom-3 left-3 text-base leading-none">{membre.pays}</div>
      </div>

      {/* Infos */}
      <div className="p-5">
        <h3 className="font-heading font-black text-base leading-tight mb-1.5" style={{ color: '#321b45' }}>
          {membre.nom}
        </h3>
        <p className="font-heading font-semibold text-sm mb-1" style={{ color: '#34b7ad' }}>
          {membre.role}
        </p>
        <p className="text-xs" style={{ color: 'rgba(50,27,69,0.45)' }}>
          {membre.organisation}
        </p>
      </div>
    </div>
  )
}

/* ── Titre de section ── */
function SectionHeader({ color, label, icon }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="flex items-center gap-4 mb-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>
      <div className="w-1.5 h-10 rounded-full flex-shrink-0" style={{ background: color }} />
      <h2 className="font-heading font-black text-2xl md:text-3xl" style={{ color: '#321b45' }}>{label}</h2>
      {icon && <Image src={icon} alt="" width={30} height={30} className="object-contain ml-1 opacity-50" />}
    </div>
  )
}

/* ── Page ── */
export default function EquipePage() {
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => { setTimeout(() => setHeroVisible(true), 80) }, [])



  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden pt-28 pb-16"
        style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 100%)' }}>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 rounded-full opacity-10 animate-float"
            style={{ width: '300px', height: '300px', background: '#ecc92f' }} />
          <div className="absolute bottom-0 -left-12 rounded-full opacity-10 animate-float-slow"
            style={{ width: '220px', height: '220px', background: '#34b7ad' }} />
          <div className={`absolute top-20 left-8 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-35 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ animation: heroVisible ? 'float 7s ease-in-out infinite 1s' : 'none' }}>
            <Image src="/pictos/picto-04.png" alt="" width={60} height={60} className="object-contain" />
          </div>
          <div className={`absolute top-24 right-12 transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ animation: heroVisible ? 'float 9s ease-in-out infinite 2s' : 'none' }}>
            <Image src="/pictos/picto-07.png" alt="" width={50} height={50} className="object-contain" />
          </div>
          <div className={`absolute bottom-20 right-20 transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ animation: heroVisible ? 'floatSlow 11s ease-in-out infinite' : 'none' }}>
            <Image src="/pictos/picto-05.png" alt="" width={44} height={44} className="object-contain" />
          </div>
          <div className="absolute top-14 right-1/3 select-none font-black text-white/8" style={{ fontSize: '110px' }}>♀</div>
          <div className={`absolute top-36 left-1/3 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-25' : 'opacity-0'}`}
            style={{ animation: heroVisible ? 'floatSlow 8s ease-in-out infinite' : 'none' }}>
            <div style={{
              width: '28px', height: '28px', background: '#ecc92f',
              clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
            }} />
          </div>
          <div className="absolute bottom-0 right-0 opacity-15 pointer-events-none">
            <Image src="/pictos/picto-03.png" alt="" width={180} height={220} className="object-contain" />
          </div>
        </div>

        <div className="section-container text-center text-white relative z-10"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <span>♀</span> L&apos;équipe
          </div>
          <h1 className="font-heading font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Des expert·es au service<br />
            <span style={{ color: '#ecc92f' }}>de votre formation</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            Membres du Comité Technique engagés pour la formation militante sur l&apos;avortement sécurisé en Afrique.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
            {[{ val: equipe.length, label: 'Expert·es' }, { val: 8, label: 'Pays' }, { val: 3, label: 'Pôles' }].map((s, i) => (
              <div key={i} className="text-center px-5 py-3 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <div className="font-heading font-black text-2xl" style={{ color: '#ecc92f' }}>{s.val}</div>
                <div className="text-white/55 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="white" />
        </svg>
      </section>

      {/* Bande picto-10 */}
      <div className="overflow-hidden bg-white border-b border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '42px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ══ MEMBRES ══ */}
      <section className="py-16 bg-white">
        <div className="section-container">

          <SectionHeader color="#ecc92f" label="Membres du COTECH" icon="/pictos/picto-05.png" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {equipe.map((m, i) => <MembreCard key={i} membre={m} delay={i * 100} />)}
          </div>

        </div>
      </section>

      {/* Bande picto-10 */}
      <div className="overflow-hidden bg-white border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '42px', objectPosition: 'center' }} unoptimized />
      </div>


    </>
  )
}
