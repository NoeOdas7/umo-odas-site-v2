'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Video, FileText, Download, CheckCircle, MessageSquare, ExternalLink, Bell } from 'lucide-react'

function GenderDivider() {
  return (
    <div className="py-2 overflow-hidden text-center text-umo-purple/20 text-sm select-none">
      ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥
    </div>
  )
}

const cohortes = [
  { num: 2, titre: 'Cohorte 2 — 2026', theme: 'Focus sur le plaidoyer digital et la mobilisation en ligne.', statut: 'En cours', badge: 'bg-umo-yellow text-umo-dark' },
  { num: 1, titre: 'Cohorte 1 — 2025', theme: 'Avortement sécurisé et continuum des DSSR', statut: 'Terminé', badge: 'bg-umo-teal/20 text-umo-teal' },
]

const ressources = [
  { titre: 'Protocole de Maputo — Texte complet', type: 'PDF', desc: 'Protocole à la Charte africaine des droits de l\'Homme et des Peuples relatif aux droits des femmes.', lien: 'https://au.int/sites/default/files/treaties/37077-treaty-0011_-_protocol_to_the_african_charter_on_human_and_peoples_rights_on_the_rights_of_women_in_africa_f.pdf', dispo: true },
  { titre: 'Cadre juridique par pays — Afrique francophone', type: 'PDF', desc: 'Panorama des législations sur l\'avortement dans 15 pays d\'Afrique francophone.', lien: '#', dispo: true },
  { titre: 'Manuel de communication militante', type: 'PDF', desc: 'Techniques de narration, gestion des réseaux sociaux et relations médias.', lien: '#', dispo: false },
]

const temoignages = [
  { name: 'Aminata K.', pays: '🇸🇳 Sénégal', cohort: 'Cohorte 1', text: 'Cette formation a complètement transformé ma façon d\'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches.' },
  { name: 'Grace O.',   pays: '🇳🇬 Nigeria', cohort: 'Cohorte 1', text: 'Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l\'écoute. J\'ai acquis des compétences concrètes.' },
  { name: 'Fatoumata D.', pays: '🇲🇱 Mali', cohort: 'Cohorte 1', text: 'La plateforme est facile à utiliser même avec une connexion lente. J\'ai pu suivre tous les modules depuis mon téléphone sans problème.' },
]

const partenaires = ['Africa Forward', 'African Population & Health Research Center', 'EngenderHealth', 'FIGO', 'IPPF', 'Ipas', 'MSI', 'Pathfinder', 'Population Council', 'PSI', 'Rutgers', 'Salthis', 'Centre ODAS']

export default function DashboardPage() {
  const [temoForm, setTemoForm] = useState(false)
  const [temoText, setTemoText] = useState('')
  const [temoSent, setTemoSent] = useState(false)
  const moodleUrl = 'https://learn.centre-odas.io'

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR CONNECTÉE */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard">
              <Image src="/logo-umo.png" alt="UMO ODAS" width={120} height={40} className="h-10 w-auto object-contain" priority />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {[{ label: 'Accueil', href: '/dashboard' }, { label: 'Programmes', href: '/programme' }, { label: 'Cohortes', href: '/cohortes' }, { label: 'Contacts', href: '/contact' }].map(l => (
                <Link key={l.href} href={l.href} className="text-umo-dark hover:text-umo-purple font-heading font-semibold text-sm transition-colors">{l.label}</Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-400 hover:text-umo-purple transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-umo-yellow rounded-full" />
              </button>
              <div className="flex items-center gap-2 pl-3 border-l border-gray-100">
                <div className="w-9 h-9 rounded-full bg-umo-purple flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-black text-white text-sm">A</span>
                </div>
                <span className="hidden md:block font-heading font-bold text-umo-purple text-sm">Aminatou</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO CONNECTÉ */}
      <section className="bg-white py-10 md:py-16 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-umo-teal/20" />
        <div className="absolute top-16 right-0 w-10 h-10 rounded-full bg-umo-yellow/30" />
        <div className="absolute bottom-8 left-0 w-20 h-20 rounded-full bg-umo-purple/10 -translate-x-1/2" />
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-heading font-black text-5xl md:text-6xl leading-tight mb-4">
                <span className="text-umo-purple">Université</span><br/>
                <span className="text-umo-yellow">Militante</span><br/>
                <span className="text-umo-purple">ODAS</span>
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg">
                Un programme de renforcement de capacités 100% en ligne.
                Apprendre, échanger et agir ensemble pour l&apos;avortement sécurisé en Afrique.
              </p>
              <a href={moodleUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                           border-2 border-umo-yellow text-umo-dark font-heading font-bold text-sm
                           hover:bg-umo-yellow transition-all duration-300">
                Accéder au cours <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ val: '+200', lbl: 'Participants' }, { val: '8', lbl: 'Pays Engagés' }, { val: '3', lbl: 'Cohortes réussies' }, { val: '100%', lbl: 'En ligne' }].map((s, i) => (
                <div key={i} className="bg-umo-soft rounded-2xl p-5 text-center border border-umo-light/20">
                  <div className="font-heading font-black text-3xl text-umo-purple">{s.val}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* 2 COHORTES */}
      <section className="py-10 md:py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-heading font-black text-4xl text-umo-yellow mb-1">2 Cohortes</h2>
            <h3 className="font-heading font-bold text-umo-purple text-xl mb-3">Une communauté grandissante</h3>
            <p className="text-gray-500">Depuis 2025, nous formons des militant·es engagé·es à travers toute l&apos;Afrique francophone.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto mb-8">
            {cohortes.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-umo-purple/30 hover:shadow-md transition-all duration-300 flex items-center gap-5">
                <div className="w-12 h-12 bg-umo-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-umo-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-umo-purple">{c.titre}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{c.theme}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold flex-shrink-0 ${c.badge}`}>
                  {c.statut === 'Terminé' ? '✓ ' : ''}{c.statut}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={moodleUrl} target="_blank" rel="noopener noreferrer" className="btn-yellow-solid">
              Mes cours <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* WEBINAIRES */}
      <section className="py-10 md:py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-umo-dark mb-2">Webinaires</h2>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-umo-purple mb-5">&amp; Sessions live</h2>
              <p className="text-gray-600 text-lg mb-6">Des sessions en direct avec nos experts.</p>
              <Link href="/webinaires" className="btn-yellow-solid">En savoir +</Link>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-44 bg-umo-soft rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg">
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-umo-teal rounded-full opacity-40" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-umo-yellow rounded-full opacity-40" />
                <div className="absolute top-2 right-4 w-12 h-12 bg-umo-purple rounded-xl flex items-center justify-center z-10">
                  <span className="text-white text-lg">▶</span>
                </div>
                <Video className="w-16 h-16 text-umo-purple relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* RESSOURCES */}
      <section className="py-10 md:py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-heading font-black text-4xl text-umo-purple mb-2">Ressources</h2>
            <p className="text-gray-500">Documents, guides et données en libre accès.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {ressources.map((r, i) => (
              <div key={i} className="bg-umo-dark rounded-2xl p-6 flex flex-col group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-umo-purple/30 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-umo-light" />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-1 leading-tight">{r.titre}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">{r.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-xs bg-umo-purple/30 text-umo-light px-3 py-1 rounded-full font-heading font-bold">{r.type}</span>
                  {r.dispo ? (
                    <a href={r.lien} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-umo-yellow text-sm font-heading font-bold hover:text-white transition-colors">
                      <Download className="w-4 h-4" /> Télécharger
                    </a>
                  ) : (
                    <span className="text-white/30 text-sm font-heading">Bientôt disponible</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/ressources" className="btn-yellow-solid">Voir plus <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* TÉMOIGNAGES */}
      <section className="py-10 md:py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-heading font-black text-4xl text-umo-purple mb-2">Témoignages</h2>
            <p className="text-gray-500 mb-1">Des participantes de nos cohortes précédentes partagent leur expérience.</p>
            <p className="text-xs text-gray-400 italic">Témoignages validés par un administrateur avant l&apos;affichage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {temoignages.map((t, i) => (
              <div key={i} className="bg-umo-yellow/10 rounded-2xl p-6 border-2 border-umo-yellow/30 hover:border-umo-yellow transition-all">
                <div className="text-4xl text-umo-purple font-black opacity-30 mb-2">❝</div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-umo-purple flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{t.name[0]}</div>
                  <div>
                    <div className="font-heading font-bold text-sm text-umo-purple">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.pays} · {t.cohort}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!temoForm && !temoSent && (
            <div className="text-center">
              <button onClick={() => setTemoForm(true)} className="btn-yellow-solid">
                Témoignez <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          )}
          {temoForm && !temoSent && (
            <div className="max-w-xl mx-auto bg-umo-soft rounded-2xl p-6">
              <h3 className="font-heading font-bold text-umo-purple text-lg mb-2">Partagez votre expérience</h3>
              <p className="text-gray-400 text-xs mb-4 italic">Votre témoignage sera validé par un administrateur avant publication.</p>
              <textarea rows={4} value={temoText} onChange={e => setTemoText(e.target.value)} placeholder="Décrivez votre expérience..." className="form-input resize-none mb-4" />
              <div className="flex gap-3">
                <button onClick={() => { setTemoForm(false); setTemoText('') }} className="btn-outline-purple flex-1">Annuler</button>
                <button onClick={() => { setTemoSent(true); setTemoForm(false) }} disabled={temoText.length < 20} className="btn-primary flex-1 disabled:opacity-50">Envoyer</button>
              </div>
            </div>
          )}
          {temoSent && (
            <div className="text-center py-6">
              <CheckCircle className="w-12 h-12 text-umo-teal mx-auto mb-3" />
              <p className="font-heading font-bold text-umo-purple">Merci pour votre témoignage !</p>
              <p className="text-gray-400 text-sm mt-1">Il sera publié après validation par l&apos;équipe.</p>
            </div>
          )}
        </div>
      </section>

      <GenderDivider />

      {/* PARTENAIRES */}
      <section className="py-10 md:py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-heading font-black text-4xl text-umo-purple mb-3">Nos partenaires</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {partenaires.map((nom, i) => (
              <div key={i} className="px-5 py-3 bg-umo-soft rounded-xl border border-umo-light/30 hover:border-umo-purple/50 hover:shadow-md transition-all group">
                <span className="text-umo-purple text-xs font-heading font-bold group-hover:text-umo-dark transition-colors">{nom}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image src="/logo-umo.png" alt="UMO ODAS" width={120} height={42} className="h-10 w-auto object-contain opacity-60" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-umo-dark text-white">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Image src="/logo-umo.png" alt="Logo UMO" width={140} height={48} className="h-11 w-auto object-contain mb-4" />
              <p className="text-white/55 text-sm leading-relaxed mb-4 max-w-xs">Un programme de renforcement de capacités 100% en ligne.</p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white/50 text-sm"><span className="text-umo-yellow">✉</span><span>umo@centre-odas.io</span></div>
                <div className="flex items-center gap-2 text-white/50 text-sm"><span className="text-umo-yellow">📍</span><span>Abidjan, Côte d&apos;Ivoire</span></div>
              </div>
            </div>
            {[
              { titre: 'Programme', liens: [{ l: 'Présentation', h: '/programme' }, { l: 'Cohortes', h: '/cohortes' }, { l: 'Modules', h: '/programme#modules' }, { l: 'Webinaires', h: '/webinaires' }] },
              { titre: 'Espace', liens: [{ l: 'Se connecter', h: '/plateforme' }, { l: 'Candidater', h: '/candidature' }, { l: 'Ressources', h: '/ressources' }, { l: 'FAQ', h: '/faq' }] },
              { titre: 'ODAS', liens: [{ l: 'Notre Équipe', h: '/equipe' }, { l: 'Contact', h: '/contact' }, { l: 'Centre ODAS', h: 'https://centre-odas.org' }] },
            ].map(col => (
              <div key={col.titre}>
                <h4 className="font-heading font-bold text-umo-yellow text-xs uppercase tracking-widest mb-4">{col.titre}</h4>
                <ul className="space-y-2.5">
                  {col.liens.map(l => <li key={l.h}><Link href={l.h} className="text-white/50 hover:text-white text-sm transition-colors">{l.l}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="section-container py-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">© 2025 Centre ODAS — Tous droits réservés</p>
            <div className="flex items-center gap-2 opacity-30 text-sm">✿ ♀ ☻ ▶ ☯ ☘ ✊ ✿ ♀</div>
            <p className="text-white/30 text-xs">umo.centre-odas.org</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
