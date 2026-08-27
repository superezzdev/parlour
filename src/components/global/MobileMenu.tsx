'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { navLinks, ctaLink } from '@/data/navigation'
import { salon } from '@/data/salon'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  id: string
  isOpen: boolean
  onClose: () => void
  currentPath: string
}

export default function MobileMenu({ id, isOpen, onClose, currentPath }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return currentPath === href
    return currentPath.startsWith(href) && href !== '/'
  }

  return (
    <div
      id={id}
      className={`${styles.drawer}${isOpen ? ` ${styles.open}` : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      aria-hidden={!isOpen}
    >
      {/* Editorial Watermark Texture */}
      <div className={styles.watermark} aria-hidden="true">
        <span>HAUTE BEAUTÉ</span>
      </div>

      <div className={styles.container}>
        {/* Top Header: Brand Wordmark + Refined Close Button */}
        <header className={styles.header}>
          <div className={styles.brandBlock}>
            <Link href="/" onClick={onClose} className={styles.brandLink}>
              <span className={styles.wordmark}>{salon.name}</span>
            </Link>
            <span className={styles.tagline}>Makeup &amp; Beauty Studio</span>
          </div>

          <button
            ref={closeButtonRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Middle Navigation: Primary Focus with Numbered Serif Links */}
        <nav className={styles.nav} aria-label="Mobile navigation">
          <ul className={styles.navList} role="list">
            {navLinks.map((link, index) => {
              const active = isActive(link.href, link.exact)
              const itemNumber = String(index + 1).padStart(2, '0')

              return (
                <li
                  key={link.href}
                  className={styles.navItem}
                  style={{ '--stagger-idx': index } as React.CSSProperties}
                >
                  <Link
                    href={link.href}
                    className={`${styles.navLink}${active ? ` ${styles.navLinkActive}` : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={onClose}
                  >
                    <span className={styles.linkLeft}>
                      <span className={styles.linkIndex}>{itemNumber}</span>
                      <span className={styles.linkLabel}>{link.label}</span>
                      {active && <span className={styles.activeDot} aria-hidden="true" />}
                    </span>
                    <span className={styles.linkArrow} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7h8M7.5 3.5l3.5 3.5-3.5 3.5" />
                      </svg>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom Section: Luxury CTA + Clean Studio Contact Information */}
        <footer className={styles.footer}>
          <div className={styles.ctaWrapper}>
            <Link
              href={ctaLink.href}
              className={styles.ctaButton}
              onClick={onClose}
            >
              <span className={styles.ctaText}>{ctaLink.label}</span>
              <span className={styles.ctaIcon} aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>

          <div className={styles.bottomMeta}>
            <div className={styles.contactRow}>
              <a href={`tel:${salon.phone}`} className={styles.metaLink}>
                <svg className={styles.metaIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{salon.phoneDisplay}</span>
              </a>

              <a
                href={salon.instagram[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.metaLink}
              >
                <svg className={styles.metaIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>{salon.instagram[0].handle}</span>
              </a>
            </div>

            <div className={styles.locationRow}>
              <span className={styles.locationDot} aria-hidden="true" />
              <span>Sarai Meer, Uttar Pradesh</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
