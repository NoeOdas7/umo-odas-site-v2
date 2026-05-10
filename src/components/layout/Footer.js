import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Programme: [
    { label: 'Présentation', href: '/programme' },
    { label: 'Cohortes', href: '/cohortes' },
    { label: 'Modules', href: '/programme' },
    { label: 'Webinaires', href: '/webinaires' },
    { label: 'Charte UMO', href: '/charte-umo' },
  ],
  Espace: [
    { label: 'Se connecter', href: '/plateforme' },
    { label: 'Candidater', href: '/candidature' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'FAQ', href: '/faq' },
  ],
  ODAS: [
    { label: 'Notre équipe', href: '/equipe' },
    { label: 'Contact', href: '/contact' },
    { label: 'Centre ODAS', href: 'https://centre-odas.org' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#321b45' }} className="text-white">

      {/* ── Contenu principal ── */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

         <div className="lg:col-span-2">
  <div className="flex items-center gap-4 mb-5">
    <Image
      src="/pictos/Logo_UMO_blanc.png"
      alt="Logo UMO ODAS"
      width={160}
      height={120}
      className="object-contain flex-shrink-0"
    />
  </div>  
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs">
              Un programme de renforcement de capacités 100% en ligne.
              Apprendre, échanger et agir ensemble pour l&apos;avortement sécurisé en Afrique.
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-umo-yellow">✉</span>
                <span>umo@centre-odas.org</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-umo-yellow">📍</span>
                <span>Abidjan, Côte d&apos;Ivoire</span>
              </div>
            </div>
          </div>

          {/* Colonnes liens */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-white text-base mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bande pictos bas ── */}
    div className="overflow-hidden bg-white py-3 border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '120px', objectPosition: 'center' }} unoptimized />

      {/* ── Barre bas ── */}
      <div className="border-t border-white/10">
        <div className="section-container py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2025 Centre ODAS — Tous droits réservés</p>
          <p className="text-white/30 text-xs">umo.centre-odas.org</p>
        </div>
      </div>
    </footer>
  )
}
