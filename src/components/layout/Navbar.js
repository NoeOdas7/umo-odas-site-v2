'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, LogOut } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinksPublic = [
    { label: 'Accueil',    href: '/' },
    { label: 'Programmes', href: '/programme' },
    { label: 'Cohortes',   href: '/cohortes' },
    { label: 'Contacts',   href: '/contact' },
    { label: 'Charte UMO', href: '/charte-umo' },
  ]

  const navLinksConnected = [
    { label: 'Accueil',    href: '/' },
    { label: 'Programmes', href: '/programme' },
    { label: 'Cohortes',   href: '/mes-cours' },
    { label: 'Contacts',   href: '/contact' },
    { label: 'Charte UMO', href: '/charte-umo' },
  ]

  const navLinks = user ? navLinksConnected : navLinksPublic

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    router.push('/')
  }

  const isActive = (href) => pathname === href

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-lg border-b border-gray-100'
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-umo.png"
              alt="Université Militante ODAS"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`font-heading font-semibold text-sm transition-colors duration-200 relative group
                  ${isActive(link.href)
                    ? 'text-umo-purple'
                    : 'text-umo-dark hover:text-umo-purple'
                  }`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-umo-purple rounded-full transition-all duration-300
                  ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          {/* Boutons desktop */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {/* Avatar + nom */}
                <div className="flex items-center gap-2 pl-2">
                  <div className="w-9 h-9 rounded-full bg-umo-purple flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-black text-white text-sm">
                      {user.prenom ? user.prenom[0].toUpperCase() : 'A'}
                    </span>
                  </div>
                  <span className="font-heading font-bold text-umo-purple text-sm">
                    {user.prenom || 'Aminatou'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn-connect text-xs px-4 py-2 flex items-center gap-1.5">
                  <LogOut className="w-3 h-3" /> Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link href="/plateforme" className="btn-connect text-xs px-5 py-2">
                  Se connecter
                </Link>
                <Link href="/candidature" className="btn-yellow-solid text-xs px-5 py-2">
                  Candidatez →
                </Link>
              </>
            )}
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-umo-dark p-2 rounded-lg hover:bg-umo-soft transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile ouvert */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-heading font-semibold text-sm px-4 py-3 rounded-xl transition-all duration-200
                    ${isActive(link.href)
                      ? 'text-umo-purple bg-umo-soft'
                      : 'text-umo-dark hover:text-umo-purple hover:bg-umo-soft'
                    }`}>
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2" />
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-umo-purple flex items-center justify-center">
                      <span className="font-heading font-black text-white text-xs">
                        {user.prenom ? user.prenom[0].toUpperCase() : 'A'}
                      </span>
                    </div>
                    <span className="font-heading font-bold text-umo-purple text-sm">
                      {user.prenom || 'Aminatou'}
                    </span>
                  </div>
                  <button onClick={handleLogout}
                    className="btn-connect text-sm text-center mx-4 mt-1 flex items-center justify-center gap-2">
                    <LogOut className="w-4 h-4" /> Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link href="/plateforme" onClick={() => setMenuOpen(false)}
                    className="btn-connect text-sm text-center mx-4">Se connecter</Link>
                  <Link href="/candidature" onClick={() => setMenuOpen(false)}
                    className="btn-yellow-solid text-sm text-center mx-4 mt-2">Candidatez →</Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
