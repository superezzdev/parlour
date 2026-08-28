'use client'

import { useEffect, useRef } from 'react'
import { serviceCategories } from '@/data/services'
import styles from './CategoryNav.module.css'

interface CategoryNavProps {
  activeSlug: string
  onCategorySelect?: (slug: string) => void
}

export default function CategoryNav({
  activeSlug,
  onCategorySelect,
}: CategoryNavProps) {
  const currentActive = activeSlug || serviceCategories[0].slug
  const navTrackRef = useRef<HTMLUListElement>(null)

  // Center active item in mobile horizontal scroll view
  useEffect(() => {
    if (!navTrackRef.current) return
    const activeItem = navTrackRef.current.querySelector(
      `[data-slug="${currentActive}"]`
    ) as HTMLElement
    if (activeItem) {
      const container = navTrackRef.current
      const scrollLeft =
        activeItem.offsetLeft -
        container.offsetWidth / 2 +
        activeItem.offsetWidth / 2
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      })
    }
  }, [currentActive])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault()
    if (onCategorySelect) {
      onCategorySelect(slug)
    } else {
      const target = document.getElementById(slug)
      if (target) {
        const navOffset = window.innerWidth >= 1024 ? 100 : 130
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div className={styles.navWrapper}>
      {/* Mobile Horizontal Sticky Bar */}
      <div className={styles.mobileNavContainer} aria-label="Mobile service categories">
        <ul className={styles.mobileNavTrack} ref={navTrackRef} role="tablist">
          {serviceCategories.map((cat) => {
            const isActive = currentActive === cat.slug
            return (
              <li key={cat.slug} className={styles.mobileNavItem} role="presentation">
                <a
                  href={`#${cat.slug}`}
                  data-slug={cat.slug}
                  onClick={(e) => handleClick(e, cat.slug)}
                  className={`${styles.mobileNavPill}${isActive ? ` ${styles.activeMobile}` : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className={styles.mobilePillNum}>{cat.number}</span>
                  <span className={styles.mobilePillLabel}>{cat.navLabel}</span>
                  {isActive && <span className={styles.goldDot} aria-hidden="true" />}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Desktop Sticky Sidebar Nav */}
      <aside className={styles.desktopSidebar} aria-label="Service categories navigation">
        <div className={styles.sidebarStickyInner}>
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarSubhead}>SERVICE CATEGORIES</span>
            <div className={styles.sidebarDivider} aria-hidden="true" />
          </div>

          <nav className={styles.sidebarNav}>
            <ul className={styles.sidebarList}>
              {serviceCategories.map((cat) => {
                const isActive = currentActive === cat.slug
                return (
                  <li key={cat.slug} className={styles.sidebarListItem}>
                    <a
                      href={`#${cat.slug}`}
                      onClick={(e) => handleClick(e, cat.slug)}
                      className={`${styles.sidebarLink}${isActive ? ` ${styles.activeDesktop}` : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span className={styles.sidebarItemNumber}>{cat.number}</span>
                      <span className={styles.sidebarItemLabel}>{cat.navLabel}</span>
                      {isActive && (
                        <span className={styles.sidebarGoldDot} aria-hidden="true" />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className={styles.sidebarFooter}>
            <p className={styles.sidebarNote}>
              Personalized consultations tailored to your skin and occasion.
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}
