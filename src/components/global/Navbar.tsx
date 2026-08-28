'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, ctaLink } from '@/data/navigation'
import MobileMenu from './MobileMenu'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [prevPathname, setPrevPathname] = useState(pathname)

  // Reset menu when pathname changes during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

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
        className={`${styles.navbar}${scrolled ? ` ${styles.navbarScrolled}` : ''}`}
        role="banner"
      >
        <div className={`${styles.inner} container`}>
          <Link href="/" className={styles.logo} aria-label="GLAMOROUS — Makeup & Beauty">
            <span className={styles.logoWordmark}>GLAMOROUS</span>
            <span className={styles.logoSubtitle}>Makeup &amp; Beauty</span>
          </Link>

          <nav className={`${styles.nav} hidden lg:block`} aria-label="Main navigation">
            <ul className={styles.links} role="list">
              {navLinks.map((link) => {
                const active = isActive(link.href, link.exact)
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink}${active ? ` ${styles.navLinkActive}` : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className={`${styles.cta} hidden lg:block`}>
            <Link href={ctaLink.href} className={styles.ctaButton}>
              {ctaLink.label}
            </Link>
          </div>

          <button
            className={`${styles.hamburger} block lg:hidden${mobileOpen ? ` ${styles.hamburgerOpen}` : ''}`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </header>

      <MobileMenu
        id="mobile-menu"
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPath={pathname}
      />
    </>
  )
}
