'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

/* ── Hook animation scroll ── */
function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.12, ...opts })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

/* ── Séparateur ♀♂ — picto-11.png ── */
function GenderDivider() {
  return (
    <div className="overflow-hidden select-none bg-white py-2">
      <Image src="/pictos/picto-11.png" alt="" width={1500} height={88}
        className="w-full object-cover" style={{ height: '88px', objectPosition: 'center' }} unoptimized />
    </div>
  )
}

const steps = [
  { num: '1', title: 'Candidature', desc: 'Manifestez votre volonté à rejoindre la Cohorte dès que le processus est lancé.' },
  { num: '2', title: 'Sélection', desc: 'Le comité évalue les dossiers et sélectionne les bénéficiaires suivant les critères définis.' },
  { num: '3', title: 'Apprentissage', desc: 'Participez aux modules et activités pédagogiques prévues (forums, devoirs, webinaires...).' },
  { num: '4', title: 'Certification', desc: 'Recevez votre certificat en fin de parcours selon les règles académiques applicables au programme.' },
]

const BASE = 'https://umo.centre-odas.org/wp-content/uploads/2025/05/'
const equipe = [
  { nom: 'Dr. Ginette Hounkanrin', org: 'Pathfinder International', photo: BASE + 'Photo_Ginette-1-2-819x1024.jpg' },
  { nom: 'Mme Cécile Yougbaré', org: 'Médecins du Monde', photo: BASE + 'Photo-THIOMBIANO-_YOUGBARE-W.-Cecile-1-1024x919.jpg' },
  { nom: 'Mme Moinsalima Hassane', org: 'ANJSR, Sénégal', photo: BASE + 'Moinsalima-Hassane-2-edited.jpg' },
  { nom: 'Dr. Melchie Ibula Bwanga', org: 'AJCAF-AS', photo: BASE + 'Photo-3-683x1024.jpg' },
  { nom: 'Saskia Hüsken', org: 'Rutgers International', photo: BASE + 'Saskia-Husken-profile-picture-1.jpg' },
  { nom: 'Souwaiba Ibrahim', org: 'Ligue Nigérienne des Droits des Femmes', photo: BASE + 'Photo-Souwaiba-663x1024.jpg' },
  { nom: 'Dr. Béniel Agossou', org: 'Le Centre ODAS', photo: BASE + 'Beniel-Agossou-2-1.png' },
  { nom: 'M. Noël Adanlao', org: 'Le Centre ODAS', photo: BASE + 'Img-Noel-Adanlao-1024x1024.png' },
  { nom: 'Dr. Raqibat Idris', org: 'GFMER', photo: BASE + 'RIdris-scaled.jpg' },
  { nom: 'Prof. Aldo Campana', org: 'GFMER', photo: BASE + 'Campana.jpg' },
]

const temoignages = [
  { name: 'Aminata K.', pays: '🇸🇳 Sénégal', text: "Cette formation a complètement transformé ma façon d'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches." },
  { name: 'Grace O.', pays: '🇳🇬 Nigeria', text: "Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l'écoute. J'ai acquis des compétences concrètes." },
  { name: 'Fatoumata D.', pays: '🇲🇱 Mali', text: "La plateforme est facile à utiliser même avec une connexion lente. J'ai pu suivre tous les modules depuis mon téléphone sans problème." },
  { name: 'Aminata K.', pays: '🇸🇳 Sénégal', text: "Cette formation a complètement transformé ma façon d'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches." },
  { name: 'Grace O.', pays: '🇳🇬 Nigeria', text: "Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l'écoute. J'ai acquis des compétences concrètes." },
]

export default function HomePage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  const [stepsRef, stepsInView] = useInView()
  const [webRef, webInView] = useInView()
  const [quiRef, quiInView] = useInView()
  const [eqRef, eqInView] = useInView()
  const [temoRef, temoInView] = useInView()
  const [partRef, partInView] = useInView()

  return (
    <>
      {/* ════ HERO ════ */}
      <section className="relative bg-white overflow-hidden min-h-screen flex items-center pt-16">

        <div className="absolute bottom-0 left-0 w-52 h-52 rounded-tr-[90px] -translate-x-1/4 translate-y-1/4"
          style={{ background: '#622ed1' }} />
        <div className="absolute top-0 right-0 h-full flex items-center opacity-30 pointer-events-none" style={{ width: '120px' }}>
          <Image src="/pictos/picto-08.png" alt="" width={120} height={300} className="object-contain" style={{ height: '60%', width: 'auto' }} />
        </div>
        <div className="absolute top-8 right-24 opacity-50 pointer-events-none">
          <Image src="/pictos/picto-06.png" alt="" width={100} height={100} className="object-contain" />
        </div>
        <div className="absolute top-4 right-4 pointer-events-none"
          style={{ width: '90px', animation: visible ? 'float 7s ease-in-out infinite' : 'none' }}>
          <Image src="/pictos/picto-04.png" alt="" width={90} height={90} className="object-contain" />
        </div>
        <div className="absolute right-8 bottom-1/3 opacity-80 pointer-events-none"
          style={{ width: '80px', animation: visible ? 'float 5s ease-in-out infinite 1s' : 'none' }}>
          <Image src="/pictos/picto-07.png" alt="" width={80} height={80} className="object-contain" />
        </div>
        <div className="absolute right-6 bottom-16 opacity-25 pointer-events-none" style={{ width: '60px' }}>
          <Image src="/pictos/picto-19.png" alt="" width={60} height={70} className="object-contain" />
        </div>
        <div className="absolute pointer-events-none" style={{ bottom: 0, right: 0, width: '220px', opacity: 0.85 }}>
          <Image src="/pictos/picto-03.png" alt="" width={220} height={220} className="object-contain" />
        </div>

        <div className="section-container w-full py-8 md:py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

            <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="font-heading font-black leading-[0.93] mb-5">
                <span className="block text-umo-purple" style={{ fontSize: 'clamp(2.8rem,6.5vw,5.5rem)' }}>Université</span>
                <span className="block text-umo-yellow" style={{ fontSize: 'clamp(2.8rem,6.5vw,5.5rem)' }}>Militante</span>
                <span className="block text-umo-purple" style={{ fontSize: 'clamp(2.8rem,6.5vw,5.5rem)' }}>ODAS</span>
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6" style={{ maxWidth: '380px' }}>
                Un programme de renforcement de capacités 100% en ligne.
                Apprendre, échanger et agir ensemble pour l&apos;avortement sécurisé en Afrique.
              </p>
              <div className="flex flex-wrap gap-3 mb-6 lg:hidden">
                {[
                  { val: '+200', lbl: 'Participants' },
                  { val: '8', lbl: 'Pays engagés' },
                  { val: '3', lbl: 'Cohortes' },
                  { val: '100%', lbl: 'En ligne' },
                ].map((s, i) => (
                  <div key={i} className="text-center px-4 py-2.5 rounded-2xl"
                    style={{ background: 'rgba(213,179,253,0.5)', backdropFilter: 'blur(6px)' }}>
                    <div className="font-heading font-black text-lg leading-none" style={{ color: '#622ed1' }}>{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#622ed1' }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
              <Link href="/programme"
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3 rounded-full font-heading font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-umo-yellow"
                style={{ border: '2px solid #ecc92f', color: '#321b45', background: 'transparent' }}>
                Découvrez le programme →
              </Link>
            </div>

            <div className="relative flex justify-center items-center" style={{ minHeight: '400px' }}>
              <div className="absolute top-0 right-4 pointer-events-none opacity-70" style={{ width: '90px', zIndex: 1 }}>
                <Image src="/pictos/picto-05.png" alt="" width={90} height={90} className="object-contain" />
              </div>
              <div className={`relative z-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ width: '240px', animation: visible ? 'float 6s ease-in-out infinite' : 'none', zIndex: 5 }}>
                <Image src="/pictos/picto-02.png" alt="Militante UMO ODAS"
                  width={240} height={320} className="object-contain w-full h-full"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(98,46,209,0.25))' }} />
              </div>
              <div className="absolute bottom-8 left-0 right-0 pointer-events-none"
                style={{ height: '6px', background: '#34b7ad', borderRadius: '4px', opacity: 0.7, zIndex: 3 }} />
              {[
                { val: '+200', lbl: 'Participants', pos: { top: '6px', left: '0' } },
                { val: '8', lbl: 'Pays\nEngagés', pos: { top: '6px', right: '0' } },
                { val: '3', lbl: 'Cohortes\nréussies', pos: { top: '38%', left: '-10px' } },
                { val: '100%', lbl: 'En ligne', pos: { bottom: '60px', right: '0' } },
              ].map((s, i) => (
                <div key={i} className="absolute text-center z-20 transition-all duration-500 hidden lg:block"
                  style={{
                    ...s.pos, background: 'rgba(213,179,253,0.65)', borderRadius: '14px',
                    padding: '10px 16px', backdropFilter: 'blur(8px)',
                    opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: `${400 + i * 120}ms`
                  }}>
                  <div className="font-heading font-black text-xl leading-none" style={{ color: '#622ed1' }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#622ed1', whiteSpace: 'pre-line' }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ BANDE PICTO-10 ════ */}
      <div className="overflow-hidden bg-white py-3 border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '120px', objectPosition: 'center' }} unoptimized />
      </div>
      {/* ════ COMMENT ÇA FONCTIONNE ════ */}
      <section ref={stepsRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-8 py-3 rounded-2xl"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#622ed1', background: 'rgba(213,179,253,0.3)' }}>
              Comment ça fonctionne ?
            </h2>
          </div>
          <div className={`rounded-3xl relative overflow-visible transition-all duration-700 ${stepsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ background: '#321b45', padding: '32px 20px' }}>
            <div className="hidden lg:block absolute"
              style={{ top: 'calc(32px + 50px)', left: 'calc(25% - 20px)', width: 'calc(50% + 40px)', borderTop: '2.5px dashed rgba(255,255,255,0.2)', zIndex: 0 }} />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative z-10">
              {steps.map((s, i) => (
                <div key={i} className="bg-white text-center relative transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{
                    borderRadius: '100px 100px 20px 20px', padding: '28px 14px 24px',
                    transitionDelay: `${i * 100}ms`, opacity: stepsInView ? 1 : 0,
                    transform: stepsInView ? 'translateY(0)' : 'translateY(24px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)', minHeight: '200px'
                  }}>
                  <div className="font-heading font-black leading-none mb-3"
                    style={{ fontSize: 'clamp(3.5rem,7vw,5.5rem)', color: '#622ed1', lineHeight: '.85' }}>{s.num}</div>
                  <h3 className="font-heading font-bold text-xs md:text-sm mb-2 leading-snug"
                    style={{ color: '#622ed1', textDecoration: 'underline' }}>{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ════ WEBINAIRES ════ */}
      <section ref={webRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-700 ${webInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="font-heading font-black leading-tight mb-1"
                style={{ fontSize: 'clamp(2rem,4.5vw,3.8rem)', color: '#321b45' }}>Webinaires</h2>
              <h2 className="font-heading font-black leading-tight mb-4 md:mb-5"
                style={{ fontSize: 'clamp(2rem,4.5vw,3.8rem)', color: '#ecc92f' }}>&amp; Sessions live</h2>
              <p className="text-sm px-3 py-1.5 rounded-lg mb-6"
                style={{ background: 'rgba(213,179,253,0.3)', color: '#321b45' }}>
                À la fin de chaque module, un Webinaire de partage d&apos;expériences est organisé pour permettre
                aux participant-es de mieux comprendre le module. La webinaire mobilise les expert-es de
                l&apos;écosystème et du mouvement qui répondent en live aux questions des participant-es.
              </p>
              <Link href="/plateforme"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
                style={{ background: '#34b7ad', border: '2px solid #34b7ad' }}>
                Se connecter
              </Link>
            </div>
            <div className={`flex justify-center transition-all duration-700 delay-200 ${webInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <Image src="/pictos/picto-13.png" alt="Webinaires UMO" width={420} height={340} className="object-contain"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(98,46,209,0.2))', maxWidth: '420px' }} />
            </div>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ════ C'EST QUOI ? ════ */}
      <section ref={quiRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div className={`relative transition-all duration-700 ${quiInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ maxWidth: '380px', margin: '0 auto' }}>
                <Image src="/hero-woman.jpg" alt="Étudiante UMO ODAS" width={400} height={480}
                  className="w-full object-cover object-top" style={{ height: '380px' }} />
              </div>
              <div className="absolute pointer-events-none" style={{ bottom: '-12px', left: '-12px', width: '52px' }}>
                <Image src="/pictos/picto-05.png" alt="" width={52} height={52} className="object-contain" />
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${quiInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="font-heading font-black mb-5" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>
                <span className="inline-block px-3 py-1 rounded-xl" style={{ background: 'rgba(213,179,253,0.3)' }}>
                  <span style={{ color: '#622ed1' }}>C&apos;est </span><span style={{ color: '#ecc92f' }}>quoi ?</span>
                </span>
              </h2>
              <div className="mb-5">
                <Image src="/pictos/LogoUMO_UMO.png" alt="Logo UMO ODAS" width={120} height={60}
                  className="object-contain" style={{ height: '150px', width: 'auto' }} />
              </div>
              <div className="px-4 py-3 rounded-2xl mb-6" style={{ background: 'rgba(213,179,253,0.25)' }}>
                <p className="text-gray-700 text-sm leading-relaxed" style={{ textAlign: 'justify' }}>
                  L&apos;Université Militante ODAS est un programme de renforcement de capacités 100 pour cent en ligne.
                  Le programme fonctionne par cohortes et repose sur une approche d&apos;intelligence collective combinant
                  apprentissage théorique, travaux pratiques, coaching et échanges entre participants.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/programme"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading font-semibold text-sm hover:-translate-y-1 transition-all duration-300"
                  style={{ border: '2px solid #622ed1', color: '#622ed1', background: 'transparent' }}>
                  En savoir plus
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ════ COMITÉ TECHNIQUE ════ */}
      <section ref={eqRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${eqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', background: 'rgba(213,179,253,0.25)' }}>
              <span style={{ color: '#622ed1' }}>Comité </span><span style={{ color: '#ecc92f' }}>Technique</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {equipe.map((m, i) => (
              <div key={i} className="text-center group transition-all duration-500"
                style={{ transitionDelay: `${i * 70}ms`, opacity: eqInView ? 1 : 0, transform: eqInView ? 'translateY(0)' : 'translateY(20px)' }}>
                <div className="mx-auto mb-3 overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #f0f0f0', boxShadow: '0 4px 14px rgba(0,0,0,.14)' }}>
                  <Image src={m.photo} alt={m.nom} width={120} height={120}
                    className="w-full h-full object-cover object-top" unoptimized />
                </div>
                <h3 className="font-heading font-bold text-xs leading-tight" style={{ color: '#622ed1' }}>{m.nom}</h3>
                <p className="text-gray-500 text-xs mt-0.5 leading-snug">{m.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ════ TÉMOIGNAGES ════ */}
      <section ref={temoRef} className="bg-white py-12 md:py-20 overflow-hidden">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${temoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl mb-3"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', background: 'rgba(213,179,253,0.25)', color: '#622ed1' }}>
              Témoignages
            </h2>
            <p className="text-gray-500 text-base">
              Des participantes de nos cohortes précédentes partagent leur expérience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
            {temoignages.map((t, i) => (
              <div key={i} className="relative flex flex-col items-center transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms`, opacity: temoInView ? 1 : 0, transform: temoInView ? 'translateY(0)' : 'translateY(30px)' }}>
                <div className="relative w-full px-8 py-8 text-center"
                  style={{
                    background: '#ecc92f', borderRadius: '50%', minHeight: '220px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 20px rgba(236,201,47,.4)',
                  }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: '#321b45', fontSize: '28px', fontWeight: '900', lineHeight: 1 }}>&ldquo;&ldquo;</span>
                    <h4 className="font-heading font-black text-lg" style={{ color: '#321b45' }}>{t.name}</h4>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#321b45' }}>{t.text}</p>
                  <p className="text-xs mt-3 font-heading font-semibold" style={{ color: 'rgba(50,27,69,.6)' }}>{t.pays}</p>
                  <div className="absolute" style={{
                    bottom: '-20px', left: '50%', transform: 'translateX(-50%)',
                    width: '0', height: '0',
                    borderLeft: '20px solid transparent',
                    borderRight: '20px solid transparent',
                    borderTop: '22px solid #ecc92f',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ════ NOS PARTENAIRES ════ */}
      <section ref={partRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${partInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mx-auto mb-4 w-4 h-4 rounded-sm opacity-45" style={{ background: '#622ed1', transform: 'rotate(12deg)' }} />
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', background: 'rgba(213,179,253,0.25)', color: '#622ed1' }}>
              Nos partenaires
            </h2>
            <p className="text-gray-500 mt-4">Merci aux partenaires techniques et stratégiques qui accompagnent le programme.</p>
          </div>
          <div className={`transition-all duration-700 delay-200 ${partInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Image
              src="https://umo.centre-odas.org/wp-content/uploads/2025/05/PTS_all_Plan-de-travail-1-2048x784.png"
              alt="Partenaires UMO ODAS" width={1200} height={460}
              className="w-full object-contain" style={{ maxHeight: '300px' }} unoptimized />
          </div>
        </div>
      </section>

      {/* Bouton scroll haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300"
        style={{ width: '52px', height: '52px' }}
        aria-label="Retour en haut">
        <Image src="/pictos/picto-12.png" alt="Haut" width={52} height={52} className="object-contain w-full h-full" />
      </button>

      <style jsx global>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }
      `}</style>
    </>
  )
}
