'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.08 })
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

const sections = [
  {
    num: 'I', titre: 'Valeurs partagées',
    color: '#622ed1', colorLight: 'rgba(98,46,209,0.06)', colorBorder: 'rgba(98,46,209,0.18)',
    picto: '/pictos/picto-04.png',
    items: [
      { icon: '/pictos/picto-04.png', text: 'Respecter la diversité des identités et des vécus : chaque personne mérite d\'être écoutée, crue, respectée et valorisée, quelle que soit son origine, son orientation, sa situation ou son parcours.' },
      { icon: '/pictos/picto-07.png', text: 'Rejeter toute forme d\'oppression : sexisme, racisme, lesbophobie, validisme, classisme, transphobie, colonialisme ou toute autre forme de violence ou de discrimination n\'ont pas leur place à l\'UMO.' },
      { icon: '/pictos/picto-05.png', text: 'Cultiver la sororité et le soutien mutuel : nous créons un environnement de bienveillance, de soin collectif et d\'entraide.' },
      { icon: '/pictos/picto-06.png', text: 'Pratiquer l\'écoute active et la parole responsable : nous écoutons sans interrompre, nous parlons avec honnêteté, nous faisons preuve de compassion.' },
      { icon: '/pictos/picto-11.png', text: 'Respecter la confidentialité : tout ce qui est partagé au sein du programme reste dans le programme.' },
      { icon: '/pictos/picto-12.png', text: 'Respecter le droit à l\'image : toute photo, vidéo ou enregistrement exige le consentement explicite et révocable des personnes concernées.' },
      { icon: '/pictos/picto-13.png', text: 'Protéger la sécurité des personnes : aucune information sensible (lieux, identités, témoignages) ne doit être diffusée sans précaution.' },
    ],
  },
  {
    num: 'II', titre: 'Engagements des lauréat·es',
    color: '#ecc92f', colorLight: 'rgba(236,201,47,0.08)', colorBorder: 'rgba(236,201,47,0.32)',
    picto: '/pictos/picto-05.png',
    items: [
      { icon: '/pictos/picto-08.png', text: 'Participer activement à toutes les sessions, ateliers, projets collaboratifs et restitutions ;' },
      { icon: '/pictos/picto-09.png', text: 'Respecter les horaires, les délais et les consignes fixées par l\'équipe pédagogique ;' },
      { icon: '/pictos/picto-14.png', text: 'Faire preuve d\'ouverture, de curiosité intellectuelle et de volonté d\'apprendre ;' },
      { icon: '/pictos/picto-15.png', text: 'M\'impliquer de façon constructive dans les dynamiques de groupe ;' },
      { icon: '/pictos/picto-16.png', text: 'Co-construire des espaces sûrs en refusant toute forme de moquerie, de mépris ou de hiérarchie ;' },
      { icon: '/pictos/picto-17.png', text: 'Utiliser les outils numériques ou physiques de manière responsable et respectueuse ;' },
      { icon: '/pictos/picto-18.png', text: 'Ne pas instrumentaliser le programme à des fins individuelles ou opportunistes ;' },
      { icon: '/pictos/picto-19.png', text: 'Faire remonter toute difficulté ou malaise auprès de l\'équipe de coordination.' },
    ],
  },
  {
    num: 'III', titre: 'Engagements des coach·es et intervenant·es',
    color: '#34b7ad', colorLight: 'rgba(52,183,173,0.07)', colorBorder: 'rgba(52,183,173,0.22)',
    picto: '/pictos/picto-07.png',
    items: [
      { icon: '/pictos/picto-04.png', text: 'Intervenir dans une posture féministe, décoloniale, inclusive et horizontale ;' },
      { icon: '/pictos/picto-06.png', text: 'Reconnaître la valeur des savoirs militants, situés, communautaires et expérientiels ;' },
      { icon: '/pictos/picto-05.png', text: 'Créer un cadre pédagogique qui valorise la parole des jeunes femmes et garantit leur sécurité émotionnelle ;' },
      { icon: '/pictos/picto-07.png', text: 'Ne pas exercer d\'abus de pouvoir, ni de paternalisme, ni imposer un modèle unique de penser ;' },
      { icon: '/pictos/picto-08.png', text: 'Me rendre disponible pour répondre aux questions, soutenir les apprentissages et accompagner les parcours ;' },
      { icon: '/pictos/picto-09.png', text: 'Respecter les limites, les sensibilités et les rythmes d\'apprentissage de chacun·e ;' },
      { icon: '/pictos/picto-11.png', text: 'Participer activement aux évaluations du programme (bilan, retours, co-apprentissage).' },
    ],
  },
]

function SectionCard({ s, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="rounded-3xl overflow-hidden transition-all duration-700"
      style={{
        border: `2px solid ${s.colorBorder}`,
        boxShadow: `0 4px 24px ${s.colorBorder}`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${delay}ms`,
      }}>
      {/* Header coloré plat */}
      <div className="flex items-center gap-4 px-6 py-5" style={{ background: s.color }}>
        <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <span className="font-heading font-black text-white text-sm">{s.num}</span>
        </div>
        <h3 className="font-heading font-black text-white text-lg flex-1 leading-tight">{s.titre}</h3>
        <Image src={s.picto} alt="" width={28} height={28} className="object-contain flex-shrink-0 opacity-50" />
      </div>
      {/* Contenu toujours visible */}
      <div style={{ background: s.colorLight }}>
        <ul className="px-6 py-5 space-y-4">
          {s.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${s.color}18` }}>
                <Image src={item.icon} alt="" width={18} height={18} className="object-contain"
                  style={{ filter: 'brightness(0)', opacity: 0.55 }} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#321b45' }}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function CharteUMOPage() {
  const [visible, setVisible] = useState(false)
  const [preRef, preInView] = useInView()
  const [dispRef, dispInView] = useInView()
  const [valRef, valInView] = useInView()
  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-white pt-24 pb-8 overflow-hidden">
        {/* Coin purple en haut à gauche */}
        <div className="absolute top-0 left-0 w-52 h-52 opacity-90 pointer-events-none"
          style={{ borderRadius: '0 0 100% 0', background: '#622ed1', transform: 'translate(-40%,-20%)' }} />
        {/* Femme flottante */}
        <div className={`absolute right-6 bottom-0 pointer-events-none transition-all duration-1000 delay-300 ${visible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ width: '140px' }}>
          <Image src="/pictos/picto-02-femme.png" alt="" width={140} height={175} className="object-contain"
            style={{ filter: 'drop-shadow(0 10px 24px rgba(98,46,209,0.25))', animation: visible ? 'float 6s ease-in-out infinite' : 'none' }} />
        </div>
        {/* Tiges teal à gauche */}
        <div className="absolute left-0 top-28 opacity-65 pointer-events-none">
          <svg width="90" height="140" viewBox="0 0 90 140">
            <ellipse cx="45" cy="70" rx="38" ry="64" fill="#34b7ad" transform="rotate(-15 45 70)" />
            <ellipse cx="28" cy="105" rx="22" ry="40" fill="#34b7ad" transform="rotate(10 28 105)" opacity=".7" />
          </svg>
        </div>
        {/* Pictos déco */}
        <div className={`absolute right-36 top-20 opacity-70 pointer-events-none ${visible ? '' : 'opacity-0'}`}
          style={{ animation: visible ? 'float 8s ease-in-out infinite 2s' : 'none' }}>
          <Image src="/pictos/picto-07.png" alt="" width={65} height={65} className="object-contain" />
        </div>
        <div className="absolute right-52 top-10 opacity-55 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={50} height={50} className="object-contain" />
        </div>
        <div className="absolute right-0 top-8 opacity-55 pointer-events-none">
          <span style={{ fontSize: '95px', color: '#321b45', lineHeight: 1 }}>♀</span>
        </div>

        {/* Picto-03 déco bas-droite */}
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-80" style={{ width: '180px' }}>
          <Image src="/pictos/picto-03.png" alt="" width={180} height={220} className="object-contain" />
        </div>

        <div className={`section-container text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Picto-22 handshake centré dans le hero */}
          <div className="flex justify-center mb-5">
            <Image src="/pictos/picto-22.png" alt="" width={160} height={90} className="object-contain" />
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(213,179,253,0.28)', color: '#622ed1' }}>
            <span>♀</span> Engagement
          </div>
          <h1 className="font-heading font-black leading-tight mb-3">
            <span style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#622ed1', display: 'block' }}>
              Charte d&apos;engagement
            </span>
            <span style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', color: '#ecc92f', display: 'block' }}>
              de l&apos;Université Militante ODAS
            </span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Pour un espace sûr, féministe, sorore et inclusif
          </p>
        </div>
      </section>

      {/* Bande déco picto-10 */}
      <div className="overflow-hidden bg-white py-3 border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '44px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ══ PRÉAMBULE ══ */}
      <section className="bg-white py-12">
        <div ref={preRef}
          className={`section-container max-w-3xl transition-all duration-700 ${preInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: 'rgba(98,46,209,0.055)', border: '2px solid rgba(98,46,209,0.14)' }}>
            <div className="absolute right-4 top-4 opacity-15 pointer-events-none">
              <svg width="70" height="110" viewBox="0 0 70 110">
                <ellipse cx="35" cy="55" rx="28" ry="50" fill="#622ed1" transform="rotate(-15 35 55)" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#622ed1' }}>
                <span className="text-white font-heading font-black text-sm">P</span>
              </div>
              <h3 className="font-heading font-black text-xl" style={{ color: '#622ed1' }}>Préambule</h3>
              <div className="ml-auto opacity-30">
                <Image src="/pictos/picto-04.png" alt="" width={32} height={32} className="object-contain" />
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              <p className="text-gray-700 text-sm leading-relaxed">
                L&apos;Université Militante ODAS est un espace d&apos;apprentissage collectif, de co-création et d&apos;engagement.
                Elle a pour objectif de former une nouvelle génération d&apos;activistes pro-choix en Afrique francophone,
                en renforçant leurs compétences dans les domaines des droits et de la santé sexuels et reproductifs (DSSR),
                avec un accent particulier sur l&apos;avortement sécurisé.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Son approche est féministe, multidisciplinaire et centrée sur l&apos;action collective, afin de contribuer
                à l&apos;amélioration de l&apos;écosystème de l&apos;avortement, de réduire l&apos;incidence des avortements non sécurisés
                et, ainsi, de participer à la diminution de la mortalité maternelle en Afrique francophone.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ce programme repose sur des principes d&apos;autonomie, de solidarité, d&apos;inclusion, de justice sociale,
                de soin collectif et de lutte contre toutes les formes d&apos;oppression. Cette charte vise à garantir
                un cadre éthique, protecteur et responsabilisant pour toutes les personnes impliquées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTIONS I II III ══ */}
      <section className="bg-white pb-8">
        <div className="section-container max-w-3xl space-y-5">
          {sections.map((s, i) => <SectionCard key={i} s={s} delay={i * 80} />)}
        </div>
      </section>

      {/* Bande déco picto-10 */}
      <div className="overflow-hidden bg-white py-3 border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '44px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ══ IV DISPOSITIONS FINALES ══ */}
      <section className="bg-white py-8">
        <div ref={dispRef}
          className={`section-container max-w-3xl transition-all duration-700 ${dispInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(192,57,43,0.2)', boxShadow: '0 4px 24px rgba(192,57,43,0.08)' }}>
            <div className="px-6 py-5 flex items-center gap-4" style={{ background: '#c0392b' }}>
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-black text-white text-sm">IV</span>
              </div>
              <h3 className="font-heading font-black text-white text-lg flex-1">Dispositions finales</h3>
              <Image src="/pictos/picto-09.png" alt="" width={28} height={28} className="object-contain opacity-45" />
            </div>
            <div className="px-6 py-6" style={{ background: 'rgba(192,57,43,0.05)' }}>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">Tout manquement grave à cette charte pourra entraîner :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Rappel à l\'ordre', desc: 'Un rappel à l\'ordre, une médiation ou un retrait temporaire d\'une activité.', color: '#e67e22' },
                  { title: 'Exclusion définitive', desc: 'En cas de comportement abusif, discriminatoire ou menaçant : l\'exclusion définitive du programme, sans appel.', color: '#c0392b' },
                ].map((item, j) => (
                  <div key={j} className="rounded-2xl p-5 bg-white" style={{ border: `2px solid ${item.color}28` }}>
                    <div className="w-3 h-3 rounded-full mb-3" style={{ background: item.color }} />
                    <h4 className="font-heading font-black text-sm mb-2" style={{ color: item.color }}>{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ V VALIDATION ══ */}
      <section className="bg-white py-6 pb-16">
        <div ref={valRef}
          className={`section-container max-w-3xl transition-all duration-700 ${valInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 100%)' }}>
            <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
              <Image src="/pictos/picto-04.png" alt="" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-black text-white">V</span>
              </div>
              <h3 className="font-heading font-black text-white text-xl">Validation</h3>
            </div>
            <p className="text-white/82 text-sm leading-relaxed mb-5 relative z-10">
              En suivant ce cours, je reconnais avoir pris connaissance des engagements qui y figurent
              et m&apos;engage à les respecter pour garantir un espace sûr, sorore, féministe et respectueux
              pour toutes les personnes impliquées dans l&apos;Université Militante ODAS.
            </p>
            <p className="text-white/55 text-xs relative z-10">
              Pour tout signalement contacter le Centre ODAS à{' '}
              <a href="mailto:communication@centre-odas.org" className="text-umo-yellow underline hover:text-white transition-colors">
                communication@centre-odas.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Bande déco picto-10 */}
      <div className="overflow-hidden bg-white py-3 border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '44px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ══ CTA ══ */}
      <section className="bg-white py-10 md:py-16 text-center relative overflow-hidden">
        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
          <Image src="/pictos/picto-04.png" alt="" width={58} height={58} className="object-contain" />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
          <Image src="/pictos/picto-07.png" alt="" width={52} height={52} className="object-contain" />
        </div>
        <div className="section-container fade-up">
          <h2 className="font-heading font-black mb-3"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.15, color: '#622ed1' }}>
            Inscrivez-vous à<br />notre prochaine Cohorte
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto">
            Les candidatures pour la cohorte 2 sont ouvertes jusqu&apos;à épuisement des places.
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
