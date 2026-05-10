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
      src="/pictos/LogoUMO_UMO.png"
      alt="Logo UMO ODAS"
      width={70}
      height={70}
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
      <div className="py-5 border-t border-white/10">
        <div className="flex items-center justify-center gap-6 flex-wrap px-6">
          <Image src="/pictos/picto-05.png" alt="" width={44} height={44} className="object-contain flex-shrink-0" />
          <span style={{ color: '#34b7ad', fontSize: '36px', fontWeight: 'bold' }}>♀</span>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,.25)', flexShrink: 0 }}>
            <Image src="/hero-man.jpg" alt="" width={60} height={60} className="w-full h-full object-cover object-top" />
          </div>
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path d="M50 5 C55 25, 75 20, 90 30 C75 40, 80 60, 70 75 C60 65, 40 65, 30 75 C20 60, 25 40, 10 30 C25 20, 45 25, 50 5Z" fill="#622ed1" />
          </svg>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,.25)', flexShrink: 0 }}>
            <Image src="/hero-woman.jpg" alt="" width={70} height={70} className="w-full h-full object-cover object-top" />
          </div>
          <svg width="55" height="50" viewBox="0 0 100 80">
            <path d="M50 10 A30 30 0 0 1 50 70Z" fill="#321b45" />
            <path d="M60 10 A30 30 0 0 1 60 70Z" fill="#622ed1" />
          </svg>
          <Image src="/pictos/picto-07.png" alt="" width={44} height={44} className="object-contain flex-shrink-0" />
          <Image src="/pictos/picto-19.png" alt="" width={36} height={44} className="object-contain flex-shrink-0" style={{ filter: 'brightness(0.15)' }} />
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,.25)', flexShrink: 0 }}>
            <Image src="/hero-man.jpg" alt="" width={60} height={60} className="w-full h-full object-cover" />
          </div>
          <span style={{ color: '#34b7ad', fontSize: '36px', fontWeight: 'bold' }}>♀</span>
        </div>
      </div>

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
