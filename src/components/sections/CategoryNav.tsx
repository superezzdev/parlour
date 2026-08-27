'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { serviceCategories } from '@/data/services'
import styles from './CategoryNav.module.css'

export default function CategoryNav() {
  const [activeSlug, setActiveSlug] = useState<string>(serviceCategories[0].slug)
  const [isScrolled, setIsScrolled] = useState(false)
  const navContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Observer for detecting which category section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute('id')
          if (categoryId) {
            setActiveSlug(categoryId)
          }
        }
      })
    }, observerOptions)

    serviceCategories.forEach((cat) => {
      const el = document.getElementById(cat.slug)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handlePillClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault()
    setActiveSlug(slug)
    const target = document.getElementById(slug)
    if (target) {
      // Calculate offset taking sticky navbar (72px) + CategoryNav (~54px) + margin into account
      const navOffset = 136
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`${styles.stickyWrapper}${isScrolled ? ` ${styles.stickyWrapperScrolled}` : ''}`}
      aria-label="Service categories navigation"
      ref={navContainerRef}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.labelWrapper} aria-hidden="true">
          <span className={styles.subnavTitle}>Disciplines</span>
        </div>

        <ul className={styles.navTrack} role="menubar">
          {serviceCategories.map((cat) => {
            const isActive = activeSlug === cat.slug
            return (
              <li key={cat.slug} className={styles.navItem} role="none">
                <a
                  href={`#${cat.slug}`}
                  onClick={(e) => handlePillClick(e, cat.slug)}
                  className={`${styles.navPill}${isActive ? ` ${styles.isActive}` : ''}`}
                  role="menuitem"
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className={styles.pillNumber}>{cat.number}</span>
                  <span>{cat.navLabel}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className={styles.quickBookingLink}>
          <Link href="/contact" className="btn btn-ghost btn-sm" style={{ padding: 0 }}>
            Book Consultation →
          </Link>
        </div>
      </div>
    </nav>
  )
}
