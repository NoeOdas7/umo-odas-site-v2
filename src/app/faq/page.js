'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  { q: 'Qui peut postuler à l\'UMO ODAS ?',
    a: 'Le programme est ouvert à tout jeune militant.e engagé.e pour l\'avortement sécurisé en Afrique, que ce soit dans le milieu associatif, médical, juridique ou communautaire.' },
  { q: 'Combien de temps dure le programme ?',
    a: '2 à 3 mois voir plus (en fonction des cohortes), avec environ 5 à 8 heures de formation par semaine (modules en ligne + webinaires + coaching).' },
  { q: 'Faut-il un ordinateur pour participer ?',
    a: 'Pas nécessairement. Un smartphone suffit pour accéder à la plateforme Moodle. L\'application mobile Moodle est disponible gratuitement sur Android et iOS. Mais vous pouvez être plus à l\'aise sur une interface plus large comme votre ordinateur.' },
  { q: 'Comment se déroule le coaching ?',
    a: 'Vous êtes affecté·e à un groupe de 5 voir 10 personnes encadrées par un·e coach. Vous avez la possibilité de vous connecter à votre coach ou à vos co-mentorés directement sur l\'onglet forum de Moodle.' },
  { q: 'Que se passe-t-il si je ne peux pas suivre un module à temps ?',
    a: 'Chaque modules est ouvert et accessible en ligne sur deux semaines. Vous pouvez allez à votre propre rythme. Il y a néanmoins des délais à respecter scrupuleusement.' },
  { q: 'Vais-je recevoir une attestation à la fin ?',
    a: 'Oui ! Les participant·es qui complètent le parcours reçoivent une attestation officielle ainsi que des badges numériques par module réussi.' },
  { q: 'Comment puis-je récupérer mes accès si je les ai perdus ?',
    a: 'Utilisez la fonction "Mot de passe oublié" sur la plateforme Moodle. Si le problème persiste, contactez-nous à umo@centre-odas.io' }
]

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden
                    ${open ? 'border-umo-purple' : 'border-umo-soft hover:border-umo-purple/30'}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left gap-4">
        <span className="font-heading font-semibold text-umo-purple text-sm md:text-base">
          {faq.q}
        </span>
        {open
          ? <ChevronUp className="w-5 h-5 text-umo-purple flex-shrink-0" />
          : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-umo-dark via-umo-purple to-umo-light">
        <div className="section-container text-center text-white">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Questions <span className="text-umo-yellow">fréquentes</span>
          </h1>
          <p className="text-white/75 text-lg">Tout ce que vous devez savoir sur l'UMO ODAS.</p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      <section className="py-16 bg-umo-soft">
        <div className="section-container max-w-3xl">
          <div className="space-y-3 mb-12">
            {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
          </div>
          <div className="text-center">
            <p className="text-gray-500 mb-4">Vous n'avez pas trouvé votre réponse ?</p>
            <Link href="/contact" className="btn-primary">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
