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
    if (isOpen) closeButtonRef.current?.focus()
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
      className={`${styles.overlay}${isOpen ? ` ${styles.open}` : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      hidden={!isOpen}
    >
      <button ref={closeButtonRef} className={styles.close} onClick={onClose} aria-label="Close navigation menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className={styles.logoBlock}>
        <span className={styles.wordmark}>{salon.name}</span>
        <span className={styles.tagline}>Makeup &amp; Beauty</span>
      </div>

      <nav aria-label="Mobile navigation">
        <ul className={styles.links} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`mobile-nav-link${isActive(link.href, link.exact) ? ' is-active' : ''}`}
                aria-current={isActive(link.href, link.exact) ? 'page' : undefined}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <Link
          href={ctaLink.href}
          className="btn btn-primary btn-lg"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={onClose}
        >
          {ctaLink.label}
        </Link>

        <div className={styles.contact}>
          <a href={`tel:${salon.phone}`} className={styles.contactLink}>{salon.phoneDisplay}</a>
          <a href={salon.instagram[0].url} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            {salon.instagram[0].handle}
          </a>
        </div>
      </div>
    </div>
  )
}
