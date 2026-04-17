'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/lib/auth-context'

/* ─── Séparateur ♀♂ ─── */
function GenderDivider({ color = '#622ed1' }) {
  return (
    <div className="overflow-hidden py-2 select-none" style={{background:'white'}}>
      <p className="text-center whitespace-nowrap"
        style={{color, opacity:.3, fontSize:'13px', letterSpacing:'3px', fontFamily:'sans-serif'}}>
        <Image src="/pictos/picto-20.png" alt="" width={1500} height={60} className="w-full object-cover" style={{height:"32px",objectPosition:"center"}} unoptimized/>
      </p>
    </div>
  )
}

/* ─── Badge bouclier avec vrai picto PNG ─── */
function BadgeApproche({ icon, title, desc, delay = 0 }) {
  return (
    <div className="flex flex-col items-center group" style={{animationDelay:`${delay}ms`}}>
      <div className="relative flex flex-col items-center text-center"
        style={{
          width: '200px',
          background: '#622ed1',
          borderRadius: '20px 20px 60% 60% / 20px 20px 40px 40px',
          padding: '28px 20px 36px',
          boxShadow: '0 8px 24px rgba(98,46,209,.35)',
        }}>
        <div className="mb-3 flex justify-center">
          <Image src={icon} alt={title} width={52} height={52} className="object-contain" style={{filter:'brightness(0) invert(1)'}}/>
        </div>
        <h3 className="font-heading font-black text-white text-base leading-tight mb-2">{title}</h3>
        <p className="text-white/80 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

/* ─── 8 Modules du programme (titres officiels PDF) ─── */
const modules = [
  { num: '1', titre: 'Introduction au militantisme féministe',     desc: 'Histoire, cadres théoriques et contextes africains du féminisme militant.' },
  { num: '2', titre: 'Droits sexuels et reproductifs',             desc: 'Cadres juridiques internationaux, régionaux et nationaux. Protocole de Maputo.' },
  { num: '3', titre: 'Avortement sécurisé — Faits et science',     desc: 'Données médicales, méthodes sûres, mythes et réalités.' },
  { num: '4', titre: 'Plaidoyer et lobbying',                      desc: "Techniques de plaidoyer, construction d'alliances, engagement des décideurs." },
  { num: '5', titre: 'Communication et storytelling',              desc: 'Narration militante, réseaux sociaux, gestion des médias.' },
  { num: '6', titre: 'Sécurité numérique et psychosociale',        desc: 'Protéger sa sécurité en ligne et prendre soin de sa santé mentale.' },
  { num: '7', titre: 'Mobilisation et organisation communautaire', desc: 'Stratégies de terrain, organisation de campagnes, coalitions.' },
  { num: '8', titre: 'Projet final et certification',              desc: "Conception et présentation d'un projet d'action concrète." },
]

const moduleColors = [
  { bg: '#622ed1', text: '#fff' },
  { bg: '#ecc92f', text: '#321b45' },
  { bg: '#34b7ad', text: '#fff' },
  { bg: '#321b45', text: '#d5b3fd' },
  { bg: '#d5b3fd', text: '#321b45' },
  { bg: '#622ed1', text: '#ecc92f' },
  { bg: '#34b7ad', text: '#321b45' },
  { bg: '#ecc92f', text: '#622ed1' },
]

export default function ProgrammePage() {
  const { user } = useAuth()

  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-24 pb-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 opacity-90"
          style={{borderRadius:'0 0 100% 0', background:'#622ed1', transform:'translate(-40%, -20%)'}}>
        </div>
        <div className="absolute left-0 top-40 opacity-90">
          <svg width="130" height="200" viewBox="0 0 130 200">
            <ellipse cx="65" cy="100" rx="55" ry="90" fill="#34b7ad" transform="rotate(-15 65 100)"/>
            <ellipse cx="40" cy="140" rx="35" ry="60" fill="#34b7ad" transform="rotate(10 40 140)" opacity=".8"/>
          </svg>
        </div>
        <div className="absolute right-8 top-32 opacity-85">
          <svg width="80" height="130" viewBox="0 0 80 130">
            <ellipse cx="40" cy="65" rx="32" ry="58" fill="#ecc92f" transform="rotate(-20 40 65)"/>
          </svg>
        </div>
        <div className="absolute right-0 top-16 opacity-80">
          <span style={{fontSize:'120px', color:'#321b45', fontFamily:'sans-serif', lineHeight:1}}>♀</span>
        </div>
        <div className="section-container text-center relative z-10">
          <h1 className="font-heading font-black leading-tight mb-3">
            <span style={{fontSize:'clamp(2.4rem,5vw,4rem)', color:'#622ed1'}}>Un programme conçu</span><br/>
            <span style={{fontSize:'clamp(2.4rem,5vw,4rem)', color:'#ecc92f'}}>pour agir</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed" style={{maxWidth:'600px', margin:'0 auto'}}>
            8 modules intensifs, un coaching personnalisé, une communauté engagée. Tout ce qu&apos;il faut pour devenir
            une militante formée et outillée, pour faire émerger une nouvelle génération de leaders en faveur de l&apos;avortement sécurisé.
          </p>
        </div>
      </section>

      <GenderDivider />

      {/* NOTRE APPROCHE */}
      <section className="relative bg-white py-10 md:py-16 overflow-hidden" id="approche">
        <div className="absolute left-0 top-1/4 opacity-70">
          <svg width="70" height="140" viewBox="0 0 70 140">
            <ellipse cx="35" cy="70" rx="30" ry="64" fill="#34b7ad" transform="rotate(10 35 70)"/>
          </svg>
        </div>
        <div className="absolute right-4 bottom-8 opacity-70">
          <svg width="55" height="90" viewBox="0 0 55 90">
            <ellipse cx="27" cy="45" rx="22" ry="42" fill="#ecc92f" transform="rotate(-15 27 45)"/>
          </svg>
        </div>
        <div className="absolute right-16 top-6 opacity-60">
          <svg width="48" height="50" viewBox="0 0 48 50">
            <path d="M24 44 L6 22 L16 22 L16 8 L32 8 L32 22 L42 22Z" fill="#622ed1"/>
            <path d="M24 32 L6 10 L16 10 L16 0 L32 0 L32 10 L42 10Z" fill="#622ed1" opacity=".4"/>
          </svg>
        </div>
        <div className="section-container">
          <div className="text-center mb-14 fade-up">
            <h2 className="font-heading font-black" style={{fontSize:'clamp(2rem,4vw,3rem)', color:'#622ed1'}}>
              Notre approche
            </h2>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
            <div className="hidden md:block absolute" style={{left:'calc(50% - 280px)', top:'50%', zIndex:0}}>
              <svg width="200" height="60" viewBox="0 0 200 60">
                <path d="M0 30 Q50 10 100 30 Q150 50 200 30" fill="none" stroke="#622ed1" strokeWidth="2.5" strokeDasharray="8 6" opacity=".5"/>
                <polygon points="196,26 200,30 196,34" fill="#622ed1" opacity=".5"/>
              </svg>
            </div>
            <div className="hidden md:block absolute" style={{left:'calc(50% + 80px)', top:'50%', zIndex:0}}>
              <svg width="200" height="60" viewBox="0 0 200 60">
                <path d="M0 30 Q50 50 100 30 Q150 10 200 30" fill="none" stroke="#622ed1" strokeWidth="2.5" strokeDasharray="8 6" opacity=".5"/>
                <polygon points="196,26 200,30 196,34" fill="#622ed1" opacity=".5"/>
              </svg>
            </div>
            <div className="fade-up" data-delay="0">
              <BadgeApproche
                icon="/pictos/picto-16.png"
                title="Évaluation des connaissances"
                desc="Des évaluations régulières pour mesurer l’acquisition des savoirs tout au long du parcours."
              />
            </div>
            <div className="fade-up" data-delay="150">
              <BadgeApproche
                icon="/pictos/picto-15.png"
                title="Coaching des participant.es"
                desc="Accompagnement personnalisé en petits groupes par des coaches expert·es."
                delay={150}
              />
            </div>
            <div className="fade-up" data-delay="300">
              <BadgeApproche
                icon="/pictos/picto-17.png"
                title="Devoirs, études de cas"
                desc="Exercices pratiques et devoirs pour ancrer les apprentissages dans la réalité terrain."
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* LES MODULES — visible uniquement si connecté */}
      <section className="bg-white py-10 md:py-16">
        <div className="section-container">
          {/* En-tête visible pour tous */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6 fade-up">
            <div className="relative flex-shrink-0">
              <div className="overflow-hidden shadow-xl" style={{width:'180px', height:'220px', borderRadius:'50% 50% 12px 12px'}}>
                <Image src="/hero-man.jpg" alt="Étudiant UMO" width={180} height={220} className="w-full h-full object-cover object-top"/>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <svg width="44" height="44" viewBox="0 0 44 44">
                  <circle cx="22" cy="6" r="6" fill="#ecc92f"/>
                  <circle cx="38" cy="22" r="6" fill="#ecc92f"/>
                  <circle cx="22" cy="38" r="6" fill="#ecc92f"/>
                  <circle cx="6" cy="22" r="6" fill="#ecc92f"/>
                  <circle cx="22" cy="22" r="5" fill="#ecc92f"/>
                </svg>
              </div>
              <div className="absolute -left-6 top-1/3 opacity-60">
                <span style={{fontSize:'32px', color:'#622ed1'}}>♀</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-heading font-black leading-none select-none"
                  style={{fontSize:'clamp(3rem,8vw,6rem)', color:'#622ed1', lineHeight:.85}}>
                  Les
                </span>
                <span className="font-heading font-black"
                  style={{fontSize:'clamp(2rem,5vw,4rem)', color:'#622ed1'}}>
                  modules
                </span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed" style={{maxWidth:'420px'}}>
                En fonction de chaque cours est divisé en modules. Pour l&apos;admission par sélection, un module dure environ 1-2 semaines.
              </p>
              <p className="mt-3 text-xs select-none" style={{color:'#622ed1', opacity:.3, letterSpacing:'3px'}}>
                ⚢♂⚣⚤♀⚥⚦⚧⚢♂⚣⚤♀⚥⚦⚧⚢♂⚣⚤♀⚥⚦
              </p>
            </div>
          </div>

          <GenderDivider />

          {/* Grille modules : uniquement pour les connectés */}
          {user ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 scale-in">
                {modules.slice(0,3).map((m, i) => {
                  const c = moduleColors[i]
                  return (
                    <div key={i} className="relative rounded-2xl p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
                      style={{background: c.bg, boxShadow:'0 4px 16px rgba(0,0,0,.15)'}}>
                      <div className="flex items-start gap-3 mb-2">
                        <span className="font-heading font-black text-3xl leading-none flex-shrink-0"
                          style={{color: c.text, opacity:.9}}>{m.num}</span>
                        <h3 className="font-heading font-black text-sm leading-tight"
                          style={{color: c.text}}>{m.titre}</h3>
                      </div>
                      <p className="text-xs leading-relaxed" style={{color: c.text, opacity:.85}}>{m.desc}</p>
                    </div>
                  )
                })}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 relative scale-in" data-delay="150">
                <div className="hidden sm:block absolute" style={{left:'calc(33.3% + 8px)', top:'-18px', zIndex:10, opacity:.8}}>
                  <svg width="40" height="55" viewBox="0 0 40 55">
                    <ellipse cx="20" cy="27" rx="15" ry="24" fill="#ecc92f" transform="rotate(-15 20 27)"/>
                  </svg>
                </div>
                {modules.slice(3,6).map((m, i) => {
                  const c = moduleColors[i+3]
                  return (
                    <div key={i} className="relative rounded-2xl p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
                      style={{background: c.bg, boxShadow:'0 4px 16px rgba(0,0,0,.15)'}}>
                      <div className="flex items-start gap-3 mb-2">
                        <span className="font-heading font-black text-3xl leading-none flex-shrink-0"
                          style={{color: c.text, opacity:.9}}>{m.num}</span>
                        <h3 className="font-heading font-black text-sm leading-tight"
                          style={{color: c.text}}>{m.titre}</h3>
                      </div>
                      <p className="text-xs leading-relaxed" style={{color: c.text, opacity:.85}}>{m.desc}</p>
                    </div>
                  )
                })}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 scale-in" data-delay="300"
                style={{maxWidth:'680px', margin:'16px auto 0'}}>
                {modules.slice(6).map((m, i) => {
                  const c = moduleColors[i+6]
                  return (
                    <div key={i} className="relative rounded-2xl p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
                      style={{background: c.bg, boxShadow:'0 4px 16px rgba(0,0,0,.15)'}}>
                      <div className="flex items-start gap-3 mb-2">
                        <span className="font-heading font-black text-3xl leading-none flex-shrink-0"
                          style={{color: c.text, opacity:.9}}>{m.num}</span>
                        <h3 className="font-heading font-black text-sm leading-tight"
                          style={{color: c.text}}>{m.titre}</h3>
                      </div>
                      <p className="text-xs leading-relaxed" style={{color: c.text, opacity:.85}}>{m.desc}</p>
                    </div>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="mt-8 text-center py-14 px-6 rounded-3xl fade-up"
              style={{background:'linear-gradient(135deg, #f3eeff 0%, #e8f9f8 100%)', border:'2px dashed #622ed1', maxWidth:'680px', margin:'32px auto 0'}}>
              <div className="mb-4 text-5xl">🔒</div>
              <h3 className="font-heading font-black mb-2" style={{fontSize:'1.5rem', color:'#622ed1'}}>
                Contenu réservé aux membres
              </h3>
              <p className="text-gray-500 text-sm mb-6" style={{maxWidth:'400px', margin:'0 auto 24px'}}>
                Connectez-vous pour accéder au détail des 8 modules du programme et commencer votre parcours.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/dashboard"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
                  style={{background:'#622ed1', color:'#fff', boxShadow:'0 4px 14px rgba(98,46,209,.3)'}}>
                  Se connecter
                </Link>
                <Link href="/candidature"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
                  style={{border:'2px solid #622ed1', color:'#622ed1', background:'transparent'}}>
                  Candidater →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BANDE PHOTOS */}
      <div className="bg-white py-5" style={{borderTop:'1px solid #f5f5f5', borderBottom:'1px solid #f5f5f5'}}>
        <div className="flex items-center justify-center gap-5 flex-wrap px-6">
          <svg width="34" height="34" viewBox="0 0 34 34">
            <circle cx="17" cy="5" r="5" fill="#ecc92f"/><circle cx="29" cy="17" r="5" fill="#ecc92f"/>
            <circle cx="17" cy="29" r="5" fill="#ecc92f"/><circle cx="5" cy="17" r="5" fill="#ecc92f"/>
            <circle cx="17" cy="17" r="4" fill="#ecc92f"/>
          </svg>
          <span style={{color:'#34b7ad', fontSize:'26px', fontWeight:'bold'}}>♀</span>
          <div style={{width:'44px', height:'44px', borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(98,46,209,.2)', flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover object-top"/>
          </div>
          <div style={{width:'32px', height:'32px', background:'#622ed1', flexShrink:0, clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'}}/>
          <div style={{width:'52px', height:'52px', borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(98,46,209,.2)', flexShrink:0}}>
            <Image src="/hero-woman.jpg" alt="" width={52} height={52} className="w-full h-full object-cover object-top"/>
          </div>
          <span style={{color:'#321b45', fontSize:'20px'}}>◑</span>
          <svg width="20" height="26" viewBox="0 0 20 26">
            <ellipse cx="10" cy="13" rx="8" ry="12" fill="#ecc92f" transform="rotate(-10 10 13)"/>
          </svg>
          <span style={{color:'#321b45', fontSize:'20px', fontWeight:'900'}}>✊</span>
          <div style={{width:'44px', height:'44px', borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(52,183,173,.4)', flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover"/>
          </div>
          <span style={{color:'#34b7ad', fontSize:'26px', fontWeight:'bold'}}>♀</span>
        </div>
      </div>

      <GenderDivider />

      {/* PRÊTE À COMMENCER ? */}
      <section className="bg-white py-12 md:py-20 text-center">
        <div className="section-container fade-up">
          <h2 className="font-heading font-black mb-3"
            style={{fontSize:'clamp(2.2rem,5vw,3.5rem)', color:'#622ed1'}}>
            Prête<br/>à commencer ?
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Les candidatures pour la cohorte 2 sont ouvertes jusqu&apos;épuisement des places.
          </p>
          <Link href="/candidature"
            className="inline-flex items-center gap-3 px-12 py-4 rounded-full font-heading font-bold text-base hover:-translate-y-1 transition-all duration-300"
            style={{background:'#ecc92f', color:'#321b45', boxShadow:'0 6px 20px rgba(236,201,47,.4)'}}>
            Candidatez ——→
          </Link>
          <div className="flex gap-4 justify-center mt-6 flex-wrap">
            <Link href="/charte-umo"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
              style={{background:'#622ed1', color:'#fff', boxShadow:'0 4px 14px rgba(98,46,209,.3)'}}>
              Charte UMO
            </Link>
            <Link href="/cohortes"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
              style={{border:'2px solid #34b7ad', color:'#34b7ad', background:'transparent'}}>
              Accéder aux cours / cohorte →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
