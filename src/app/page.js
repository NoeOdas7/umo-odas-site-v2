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

/* ── Séparateur ♀♂ — picto-20.png ── */
function GenderDivider() {
  return (
    <div className="overflow-hidden select-none bg-white py-1">
      <Image src="/pictos/picto-20.png" alt="" width={1500} height={60}
        className="w-full object-cover" style={{height:'32px', objectPosition:'center'}}/>
    </div>
  )
}

/* ── Features — icônes officielles ── */
const features = [
  { img:'/pictos/picto-14.png', title:'Modules structurés',     desc:'Des cours organisés en leçons progressives, accessibles à votre rythme avec déblocage automatique.' },
  { img:'/pictos/picto-15.png', title:'Coaching de groupe',     desc:'Des groupes de 10 participants accompagnés par un·e coach expert·e tout au long du parcours.' },
  { img:'/pictos/picto-16.png', title:'Forums & échanges',      desc:'Espaces d\'échange collectifs et forums privés par groupe pour une intelligence collective forte.' },
  { img:'/pictos/picto-18.png', title:'Webinaires live',        desc:'Sessions en direct avec Zoom pour approfondir les thèmes et interagir avec les intervenants.' },
  { img:'/pictos/picto-17.png', title:'Badges & Attestations',  desc:'Certification officielle de votre participation et vos acquis, téléchargeable et vérifiable.' },
]

const steps = [
  { num:'1', title:'Candidatez',             desc:'Remplissez le formulaire en ligne. L\'équipe examine votre dossier sous 5 jours.' },
  { num:'2', title:'Rejoignez votre cohorte', desc:'Après sélection, vous recevez votre accès et intégrez votre groupe de coaching.' },
  { num:'3', title:'Apprenez & échangez',    desc:'Suivez les modules, participez aux forums, rendez vos devoirs et assistez aux webinaires.' },
  { num:'4', title:'Certifiez-vous',         desc:'En fin de parcours, recevez votre attestation et vos badges de compétences.' },
]

/* ── Équipe réelle ── */
const BASE = 'https://umo.centre-odas.org/wp-content/uploads/2025/05/'
const equipe = [
  { nom:'Dr. Ginette Hounkanrin',  org:'Pathfinder International', photo: BASE+'Photo_Ginette-1-2-819x1024.jpg' },
  { nom:'Mme Cécile Yougbaré',     org:'Médecins du Monde',        photo: BASE+'Photo-THIOMBIANO-_YOUGBARE-W.-Cecile-1-1024x919.jpg' },
  { nom:'Mme Moinsalima Hassane',  org:'ANJSR, Sénégal',           photo: BASE+'Moinsalima-Hassane-2-edited.jpg' },
  { nom:'Dr. Melchie Ibula Bwanga',org:'AJCAF-AS',                 photo: BASE+'Photo-3-683x1024.jpg' },
  { nom:'Saskia Hüsken',           org:'Rutgers International',    photo: BASE+'Saskia-Husken-profile-picture-1.jpg' },
  { nom:'Souwaiba Ibrahim',        org:'Ligue Nigérienne des Droits des Femmes', photo: BASE+'Photo-Souwaiba-663x1024.jpg' },
  { nom:'Dr. Béniel Agossou',      org:'Le Centre ODAS',           photo: BASE+'Beniel-Agossou-2-1.png' },
  { nom:'M. Noël Adanlao',         org:'Le Centre ODAS',           photo: BASE+'Img-Noel-Adanlao-1024x1024.png' },
  { nom:'Dr. Raqibat Idris',       org:'GFMER',                    photo: BASE+'RIdris-scaled.jpg' },
  { nom:'Prof. Aldo Campana',      org:'GFMER',                    photo: BASE+'Campana.jpg' },
]

const temoignages = [
  { name:'Aminata K.', pays:'🇸🇳 Sénégal',   text:'Cette formation a complètement transformé ma façon d\'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches.' },
  { name:'Grace O.',   pays:'🇳🇬 Nigeria',    text:'Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l\'écoute. J\'ai acquis des compétences concrètes.' },
  { name:'Fatoumata D.', pays:'🇲🇱 Mali',     text:'La plateforme est facile à utiliser même avec une connexion lente. J\'ai pu suivre tous les modules depuis mon téléphone sans problème.' },
  { name:'Aminata K.', pays:'🇸🇳 Sénégal',   text:'Cette formation a complètement transformé ma façon d\'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches.' },
  { name:'Grace O.',   pays:'🇳🇬 Nigeria',    text:'Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l\'écoute. J\'ai acquis des compétences concrètes.' },
]
const bubbleTop = [20, 0, 48, 8, 32]

/* ════════════════════════════════════════════ */
export default function HomePage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  const [featRef,  featInView]  = useInView()
  const [stepsRef, stepsInView] = useInView()
  const [webRef,   webInView]   = useInView()
  const [quiRef,   quiInView]   = useInView()
  const [eqRef,    eqInView]    = useInView()
  const [temoRef,  temoInView]  = useInView()
  const [partRef,  partInView]  = useInView()

  return (
    <>
      {/* ════ HERO ════ */}
      <section className="relative bg-white overflow-hidden min-h-screen flex items-center pt-16">

        {/* Forme violette bas-gauche */}
        <div className="absolute bottom-0 left-0 w-52 h-52 rounded-tr-[90px] -translate-x-1/4 translate-y-1/4"
             style={{background:'#622ed1'}}/>

        {/* Picto-08 : demi-cercle violet foncé — droite */}
        <div className="absolute top-0 right-0 h-full flex items-center opacity-30 pointer-events-none"
             style={{width:'120px'}}>
          <Image src="/pictos/picto-08.png" alt="" width={120} height={300}
            className="object-contain" style={{height:'60%',width:'auto'}}/>
        </div>

        {/* Picto-06 : cercle violet clair — haut droite */}
        <div className="absolute top-8 right-24 opacity-50 pointer-events-none">
          <Image src="/pictos/picto-06.png" alt="" width={100} height={100}
            className="object-contain"/>
        </div>

        {/* Picto-04 : fleur teal — haut droite */}
        <div className="absolute top-4 right-4 pointer-events-none"
             style={{width:'90px', animation: visible ? 'float 7s ease-in-out infinite' : 'none'}}>
          <Image src="/pictos/picto-04.png" alt="" width={90} height={90} className="object-contain"/>
        </div>

        {/* Picto-07 : feuilles jaunes — droite milieu */}
        <div className="absolute right-8 bottom-1/3 opacity-80 pointer-events-none"
             style={{width:'80px', animation: visible ? 'float 5s ease-in-out infinite 1s' : 'none'}}>
          <Image src="/pictos/picto-07.png" alt="" width={80} height={80} className="object-contain"/>
        </div>

        {/* Picto-19 : symbole ♀ violet foncé — droite bas */}
        <div className="absolute right-6 bottom-16 opacity-25 pointer-events-none"
             style={{width:'60px'}}>
          <Image src="/pictos/picto-19.png" alt="" width={60} height={70} className="object-contain"/>
        </div>

        {/* Picto-03 : fleur teal + cercle violet + feuilles jaunes — coin bas-droite */}
        <div className="absolute pointer-events-none" style={{bottom:0, right:0, width:'220px', opacity:0.85}}>
          <Image src="/pictos/picto-03.png" alt="" width={220} height={220} className="object-contain"/>
        </div>

        <div className="section-container w-full py-8 md:py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

            {/* Texte gauche */}
            <div className={`transition-all duration-700 ${visible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
              <h1 className="font-heading font-black leading-[0.93] mb-5">
                <span className="block text-umo-purple" style={{fontSize:'clamp(2.8rem,6.5vw,5.5rem)'}}>Université</span>
                <span className="block text-umo-yellow" style={{fontSize:'clamp(2.8rem,6.5vw,5.5rem)'}}>Militante</span>
                <span className="block text-umo-purple" style={{fontSize:'clamp(2.8rem,6.5vw,5.5rem)'}}>ODAS</span>
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6" style={{maxWidth:'380px'}}>
                Un programme de renforcement de capacités 100% en ligne.
                Apprendre, échanger et agir ensemble pour l&apos;avortement sécurisé en Afrique.
              </p>

              {/* Stats mobiles — visibles uniquement sous lg */}
              <div className="flex flex-wrap gap-3 mb-6 lg:hidden">
                {[
                  {val:'+200', lbl:'Participants'},
                  {val:'8',    lbl:'Pays engagés'},
                  {val:'3',    lbl:'Cohortes'},
                  {val:'100%', lbl:'En ligne'},
                ].map((s,i) => (
                  <div key={i} className="text-center px-4 py-2.5 rounded-2xl"
                       style={{background:'rgba(213,179,253,0.5)', backdropFilter:'blur(6px)'}}>
                    <div className="font-heading font-black text-lg leading-none" style={{color:'#622ed1'}}>{s.val}</div>
                    <div className="text-xs mt-0.5" style={{color:'#622ed1'}}>{s.lbl}</div>
                  </div>
                ))}
              </div>

              <Link href="/programme"
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3 rounded-full font-heading font-bold text-sm
                           transition-all duration-300 hover:-translate-y-1 hover:bg-umo-yellow"
                style={{border:'2px solid #ecc92f', color:'#321b45', background:'transparent'}}>
                Découvrez le programme →
              </Link>
            </div>

            {/* Personnage + stats flottantes (desktop) */}
            <div className="relative flex justify-center items-center" style={{minHeight:'400px'}}>

              {/* Picto-05 : fleur jaune derrière personnage */}
              <div className="absolute top-0 right-4 pointer-events-none opacity-70"
                   style={{width:'90px', zIndex:1}}>
                <Image src="/pictos/picto-05.png" alt="" width={90} height={90} className="object-contain"/>
              </div>

              {/* VRAI PERSONNAGE — picto-02.png */}
              <div className={`relative z-10 transition-all duration-700 delay-300 ${visible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}
                   style={{width:'240px', animation: visible ? 'float 6s ease-in-out infinite' : 'none', zIndex:5}}>
                <Image src="/pictos/picto-02.png" alt="Militante UMO ODAS"
                  width={240} height={320} className="object-contain w-full h-full"
                  style={{filter:'drop-shadow(0 20px 40px rgba(98,46,209,0.25))'}}/>
              </div>

              {/* Trait teal décoratif — visible dans la maquette */}
              <div className="absolute bottom-8 left-0 right-0 pointer-events-none" style={{height:'6px', background:'#34b7ad', borderRadius:'4px', opacity:0.7, zIndex:3}}/>

              {/* Stats flottantes — desktop uniquement */}
              {[
                {val:'+200', lbl:'Participants',       pos:{top:'6px',  left:'0'}},
                {val:'8',    lbl:'Pays\nEngagés',      pos:{top:'6px',  right:'0'}},
                {val:'3',    lbl:'Cohortes\nréussies', pos:{top:'38%',  left:'-10px'}},
                {val:'100%', lbl:'En ligne',           pos:{bottom:'60px', right:'0'}},
              ].map((s,i) => (
                <div key={i} className="absolute text-center z-20 transition-all duration-500 hidden lg:block"
                     style={{...s.pos, background:'rgba(213,179,253,0.65)', borderRadius:'14px',
                             padding:'10px 16px', backdropFilter:'blur(8px)',
                             opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(10px)',
                             transitionDelay:`${400+i*120}ms`}}>
                  <div className="font-heading font-black text-xl leading-none" style={{color:'#622ed1'}}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{color:'#622ed1', whiteSpace:'pre-line'}}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bande décorative picto-10 — séparateur après hero */}
      <div className="overflow-hidden bg-white py-3 border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{height:'44px', objectPosition:'center'}} unoptimized />
      </div>

      {/* ════ FEATURES ════ */}
      <section ref={featRef} className="relative bg-white py-12 md:py-20 overflow-hidden">

        {/* Décos gauche — feuilles teal picto-03 zones */}
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none opacity-80"
             style={{width:'80px'}}>
          <Image src="/pictos/picto-04.png" alt="" width={60} height={60}
            className="object-contain absolute" style={{top:'20%', left:'-10px'}}/>
          <Image src="/pictos/picto-04.png" alt="" width={40} height={40}
            className="object-contain absolute" style={{bottom:'25%', left:'0'}}/>
        </div>
        {/* Feuilles jaunes droite */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none"
             style={{width:'80px'}}>
          <Image src="/pictos/picto-07.png" alt="" width={65} height={65}
            className="object-contain absolute" style={{bottom:'30%', right:'-5px'}}/>
          <Image src="/pictos/picto-05.png" alt="" width={50} height={50}
            className="object-contain absolute" style={{top:'15%', right:'5px', opacity:.6}}/>
        </div>

        <div className="section-container">
          <div className={`text-center mb-14 transition-all duration-700 ${featInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-6 py-1 rounded-xl mb-1" style={{background:'rgba(213,179,253,0.35)'}}>
              <h2 className="font-heading font-black" style={{fontSize:'clamp(2rem,4vw,3rem)',color:'#622ed1'}}>Des Formations</h2>
            </div>
            <h2 className="font-heading font-black leading-tight mb-4" style={{fontSize:'clamp(2rem,4vw,3rem)',color:'#ecc92f'}}>
              Complètes et Engagées
            </h2>
            <p className="text-gray-600 text-base" style={{maxWidth:'520px',margin:'0 auto'}}>
              Des modules conçus pour former des militant·es éclairé·es, capables d&apos;agir concrètement sur le terrain.
            </p>
          </div>

          {/* 3 features haut */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {features.slice(0,3).map((f,i) => (
              <div key={i} className="text-center px-4 transition-all duration-500"
                   style={{transitionDelay:`${i*120}ms`, opacity:featInView?1:0,
                           transform:featInView?'translateY(0)':'translateY(20px)'}}>
                <div className="flex justify-center mb-4">
                  <Image src={f.img} alt={f.title} width={52} height={52} className="object-contain"/>
                </div>
                <h3 className="font-heading font-bold text-base mb-2"
                    style={{color:'#622ed1', textDecoration:'underline', textDecorationColor:'#622ed1'}}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          {/* 2 features bas */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10"
               style={{maxWidth:'500px', margin:'0 auto 2rem'}}>
            {features.slice(3).map((f,i) => (
              <div key={i} className="text-center px-4 transition-all duration-500"
                   style={{transitionDelay:`${360+i*120}ms`, opacity:featInView?1:0,
                           transform:featInView?'translateY(0)':'translateY(20px)'}}>
                <div className="flex justify-center mb-4">
                  <Image src={f.img} alt={f.title} width={52} height={52} className="object-contain"/>
                </div>
                <h3 className="font-heading font-bold text-base mb-2"
                    style={{color:'#622ed1', textDecoration:'underline', textDecorationColor:'#622ed1'}}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div/>
            <Link href="/programme"
              className="mx-auto inline-flex items-center gap-2 px-10 py-3 rounded-full text-white font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300 shadow-md"
              style={{background:'#34b7ad'}}>
              En savoir +
            </Link>
            {/* Picto-09 : femme avec laptop */}
            <div style={{width:'110px', height:'110px', flexShrink:0}}>
              <Image src="/pictos/picto-09.png" alt="Étudiante" width={110} height={110}
                className="object-contain w-full h-full"/>
            </div>
          </div>
        </div>
      </section>

      {/* ════ BANDE SÉPARATEUR — picto-11 (séparateur symboles) ou picto-20 ════ */}
      <GenderDivider/>

      {/* ════ COMMENT ÇA FONCTIONNE ════ */}
      <section ref={stepsRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${stepsInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-8 py-3 rounded-2xl"
                style={{fontSize:'clamp(2rem,4vw,3rem)', color:'#622ed1', background:'rgba(213,179,253,0.3)'}}>
              Comment ça fonctionne ?
            </h2>
          </div>

          <div className={`rounded-3xl relative overflow-visible transition-all duration-700 ${stepsInView?'opacity-100 scale-100':'opacity-0 scale-95'}`}
               style={{background:'#321b45', padding:'32px 20px'}}>
            <div className="hidden lg:block absolute"
                 style={{top:'calc(32px + 50px)', left:'calc(25% - 20px)', width:'calc(50% + 40px)',
                         borderTop:'2.5px dashed rgba(255,255,255,0.2)', zIndex:0}}/>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative z-10">
              {steps.map((s,i) => (
                <div key={i} className="bg-white text-center relative transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                     style={{borderRadius:'100px 100px 20px 20px', padding:'28px 14px 24px',
                             transitionDelay:`${i*100}ms`, opacity:stepsInView?1:0,
                             transform:stepsInView?'translateY(0)':'translateY(24px)',
                             boxShadow:'0 8px 32px rgba(0,0,0,0.2)', minHeight:'200px'}}>
                  <div className="font-heading font-black leading-none mb-3"
                       style={{fontSize:'clamp(3.5rem,7vw,5.5rem)', color:'#622ed1', lineHeight:'.85'}}>{s.num}</div>
                  <h3 className="font-heading font-bold text-xs md:text-sm mb-2 leading-snug"
                      style={{color:'#622ed1', textDecoration:'underline'}}>{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`text-center mt-9 transition-all duration-700 delay-300 ${stepsInView?'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
            <Link href="/candidature"
              className="inline-flex items-center gap-3 px-10 py-3 rounded-full font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
              style={{border:'2px solid #ecc92f', color:'#321b45', background:'transparent'}}>
              Candidatez ——→
            </Link>
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ════ WEBINAIRES — picto-13.png (laptop officiel) ════ */}
      <section ref={webRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-700 ${webInView?'opacity-100 translate-x-0':'opacity-0 -translate-x-8'}`}>
              <h2 className="font-heading font-black leading-tight mb-1"
                  style={{fontSize:'clamp(2rem,4.5vw,3.8rem)', color:'#321b45'}}>Webinaires</h2>
              <h2 className="font-heading font-black leading-tight mb-4 md:mb-5"
                  style={{fontSize:'clamp(2rem,4.5vw,3.8rem)', color:'#ecc92f'}}>&amp; Sessions live</h2>
              <p className="text-sm inline-block px-3 py-1.5 rounded-lg mb-6"
                 style={{background:'rgba(213,179,253,0.3)', color:'#321b45'}}>
                Des sessions en direct avec nos experts.
              </p>
              <div>
                <Link href="/plateforme"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
                  style={{background:'#34b7ad', border:'2px solid #34b7ad'}}>
                  Se connecter
                </Link>
              </div>
            </div>
            {/* Vrai illustration laptop officielle */}
            <div className={`flex justify-center transition-all duration-700 delay-200 ${webInView?'opacity-100 translate-x-0':'opacity-0 translate-x-8'}`}>
              <Image src="/pictos/picto-13.png" alt="Webinaires UMO"
                width={420} height={340} className="object-contain"
                style={{filter:'drop-shadow(0 20px 40px rgba(98,46,209,0.2))', maxWidth:'420px'}}/>
            </div>
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ════ QUI SOMMES NOUS ════ */}
      <section ref={quiRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={`relative transition-all duration-700 ${quiInView?'opacity-100 translate-x-0':'opacity-0 -translate-x-8'}`}>
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{maxWidth:'380px', margin:'0 auto'}}>
                <Image src="/hero-woman.jpg" alt="Étudiante UMO ODAS" width={400} height={480}
                  className="w-full object-cover object-top" style={{height:'380px'}}/>
              </div>
              {/* Fleur jaune déco */}
              <div className="absolute pointer-events-none" style={{bottom:'-12px', left:'-12px', width:'52px'}}>
                <Image src="/pictos/picto-05.png" alt="" width={52} height={52} className="object-contain"/>
              </div>
            </div>
            <div className={`transition-all duration-700 delay-200 ${quiInView?'opacity-100 translate-x-0':'opacity-0 translate-x-8'}`}>
              <h2 className="font-heading font-black mb-5" style={{fontSize:'clamp(2.2rem,4vw,3.2rem)'}}>
                <span className="inline-block px-3 py-1 rounded-xl" style={{background:'rgba(213,179,253,0.3)'}}>
                  <span style={{color:'#622ed1'}}>Qui sommes </span><span style={{color:'#ecc92f'}}>Nous ?</span>
                </span>
              </h2>
              {/* Logo UMO officiel — picto-01.png */}
              <div className="mb-5">
                <Image src="/pictos/picto-01.png" alt="Logo UMO ODAS" width={80} height={100}
                  className="object-contain" style={{height:'80px', width:'auto'}}/>
              </div>
              <div className="px-4 py-3 rounded-2xl mb-6" style={{background:'rgba(213,179,253,0.25)'}}>
                <p className="text-gray-700 text-sm leading-relaxed" style={{textAlign:'justify'}}>
                  L&apos;Université Militante ODAS est un programme de renforcement de capacités 100 pour cent en ligne.
                  Le programme fonctionne par cohortes et repose sur une approche d&apos;intelligence collective combinant
                  apprentissage théorique, travaux pratiques, coaching et échanges entre participants.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/candidature"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
                  style={{background:'#622ed1'}}>
                  Candidater <ArrowRight size={16}/>
                </Link>
                <Link href="/programme"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading font-semibold text-sm hover:-translate-y-1 transition-all duration-300"
                  style={{border:'2px solid #622ed1', color:'#622ed1', background:'transparent'}}>
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ════ NOTRE SUPER ÉQUIPE ════ */}
      <section ref={eqRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${eqInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl"
                style={{fontSize:'clamp(2rem,4vw,3rem)', background:'rgba(213,179,253,0.25)'}}>
              <span style={{color:'#622ed1'}}>Notre super </span><span style={{color:'#ecc92f'}}>Equipe</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {equipe.map((m,i) => (
              <div key={i} className="text-center group transition-all duration-500"
                   style={{transitionDelay:`${i*70}ms`, opacity:eqInView?1:0,
                           transform:eqInView?'translateY(0)':'translateY(20px)'}}>
                <div className="mx-auto mb-3 overflow-hidden group-hover:scale-110 transition-transform duration-300"
                     style={{width:'120px', height:'120px', borderRadius:'50%',
                             border:'4px solid #f0f0f0', boxShadow:'0 4px 14px rgba(0,0,0,.14)'}}>
                  <Image src={m.photo} alt={m.nom} width={120} height={120}
                    className="w-full h-full object-cover object-top" unoptimized/>
                </div>
                <h3 className="font-heading font-bold text-xs leading-tight" style={{color:'#622ed1'}}>{m.nom}</h3>
                <p className="text-gray-500 text-xs mt-0.5 leading-snug">{m.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ════ TÉMOIGNAGES ════ */}
      <section ref={temoRef} className="bg-white py-12 md:py-20 overflow-hidden">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${temoInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl mb-3"
                style={{fontSize:'clamp(2rem,4vw,3rem)', background:'rgba(213,179,253,0.25)', color:'#622ed1'}}>
              Temoignage
            </h2>
            <p className="inline-block px-5 py-2 rounded-xl text-base"
               style={{background:'rgba(213,179,253,0.25)', color:'#622ed1'}}>
              Des participantes de nos cohortes précédentes partagent leur expérience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8 xl:items-start">
            {temoignages.map((t,i) => (
              <div key={i} className="relative rounded-3xl p-5 hover:-translate-y-2 transition-all duration-500"
                   style={{background:'#ecc92f',
                           boxShadow:'0 6px 20px rgba(236,201,47,.4)',
                           transitionDelay:`${i*100}ms`, opacity:temoInView?1:0,
                           transform:temoInView?'translateY(0)':'translateY(30px)'}}>
                {/* Picto-16 : bulles de chat — petite déco */}
                <div className="flex items-center gap-1 mb-2">
                  <span style={{color:'rgba(50,27,69,.5)', fontSize:'18px', fontWeight:'900', lineHeight:1}}>&ldquo;&rdquo;</span>
                  <h4 className="font-heading font-black text-sm" style={{color:'#321b45'}}>{t.name}</h4>
                </div>
                <p className="text-xs leading-relaxed" style={{color:'#321b45'}}>{t.text}</p>
                <p className="text-xs mt-2 font-heading font-semibold" style={{color:'rgba(50,27,69,.55)'}}>{t.pays}</p>
                <div className="absolute" style={{bottom:'-11px', left:'28px', width:'22px', height:'22px',
                                                  background:'#ecc92f', transform:'rotate(45deg)', borderRadius:'2px'}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ NOS PARTENAIRES ════ */}
      <section ref={partRef} className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${partInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="mx-auto mb-4 w-4 h-4 rounded-sm opacity-45" style={{background:'#622ed1', transform:'rotate(12deg)'}}/>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl"
                style={{fontSize:'clamp(2rem,4vw,3rem)', background:'rgba(213,179,253,0.25)', color:'#622ed1'}}>
              Nos partenaires
            </h2>
            <p className="text-gray-500 mt-4">Merci aux partenaires techniques et stratégiques qui accompagnent le programme.</p>
          </div>
          <div className={`transition-all duration-700 delay-200 ${partInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <Image
              src="https://umo.centre-odas.org/wp-content/uploads/2025/05/PTS_all_Plan-de-travail-1-2048x784.png"
              alt="Partenaires UMO ODAS" width={1200} height={460}
              className="w-full object-contain" style={{maxHeight:'300px'}} unoptimized/>
          </div>
        </div>
      </section>

      {/* ════ BANDE FOOTER VIOLETTE ════ */}
      <div className="overflow-hidden py-5" style={{background:'#321b45'}}>
        <div className="flex items-center justify-center gap-6 flex-wrap px-6">
          {/* Picto-05 fleur jaune */}
          <Image src="/pictos/picto-05.png" alt="" width={36} height={36} className="object-contain flex-shrink-0"/>
          {/* Picto-19 symbole ♀ blanc */}
          <Image src="/pictos/picto-19.png" alt="" width={28} height={34}
            className="object-contain flex-shrink-0" style={{filter:'brightness(0) invert(1)', opacity:.8}}/>
          {/* Photo homme rond */}
          <div style={{width:'48px', height:'48px', borderRadius:'50%', overflow:'hidden',
                       border:'2px solid rgba(255,255,255,.25)', flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={48} height={48} className="w-full h-full object-cover object-top"/>
          </div>
          {/* Étoile violette */}
          <div style={{width:'34px', height:'34px', background:'#622ed1', flexShrink:0,
            clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'}}/>
          {/* Photo femme rond */}
          <div style={{width:'56px', height:'56px', borderRadius:'50%', overflow:'hidden',
                       border:'2.5px solid #ecc92f', flexShrink:0}}>
            <Image src="/hero-woman.jpg" alt="" width={56} height={56} className="w-full h-full object-cover object-top"/>
          </div>
          {/* Picto-08 demi-cercle */}
          <Image src="/pictos/picto-08.png" alt="" width={28} height={28}
            className="object-contain flex-shrink-0" style={{filter:'brightness(0) invert(1)', opacity:.6}}/>
          {/* Picto-07 feuilles jaunes */}
          <Image src="/pictos/picto-07.png" alt="" width={32} height={32} className="object-contain flex-shrink-0"/>
          {/* Picto-12 bouton scroll */}
          <Image src="/pictos/picto-12.png" alt="" width={34} height={34} className="object-contain flex-shrink-0"/>
          {/* Photo homme rond 2 */}
          <div style={{width:'48px', height:'48px', borderRadius:'50%', overflow:'hidden',
                       border:'2px solid rgba(52,183,173,.5)', flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={48} height={48} className="w-full h-full object-cover"/>
          </div>
          {/* Picto-04 fleur teal */}
          <Image src="/pictos/picto-04.png" alt="" width={30} height={30} className="object-contain flex-shrink-0" style={{opacity:.8}}/>
        </div>
      </div>

      {/* Bouton scroll haut (picto-12) */}
      <button
        onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300"
        style={{width:'52px', height:'52px'}}
        aria-label="Retour en haut">
        <Image src="/pictos/picto-12.png" alt="Haut" width={52} height={52} className="object-contain w-full h-full"/>
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
