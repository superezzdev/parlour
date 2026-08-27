'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, ctaLink } from '@/data/navigation'
import { salon } from '@/data/salon'
import MobileMenu from './MobileMenu'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [prevPathname, setPrevPathname] = useState(pathname)

  // Reset menu when pathname changes during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href
    return pathname.startsWith(href) && href !== '/'
  }

  return (
    <>
      <a className="skip-to-main" href="#main-content">
        Skip to main content
      </a>

      <header
        className={`${styles.navbar}${isScrolled ? ` ${styles.navbarScrolled}` : ''}`}
        role="banner"
      >
        <div className={`${styles.inner} container`}>
          <Link href="/" className={styles.logo} aria-label={`${salon.name} — Home`}>
            <span className={styles.logoWordmark}>{salon.name}</span>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.links} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link${isActive(link.href, link.exact) ? ' is-active' : ''}`}
                    aria-current={isActive(link.href, link.exact) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.cta}>
            <Link href={ctaLink.href} className="btn btn-primary btn-sm">
              {ctaLink.label}
            </Link>
          </div>

          <button
            className={`${styles.hamburger}${menuOpen ? ` ${styles.hamburgerOpen}` : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </header>

      <MobileMenu
        id="mobile-menu"
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  )
}
