'use client'

import { useState, useEffect } from 'react'
import { serviceCategories } from '@/data/services'
import CategoryNav from './CategoryNav'
import ServiceCategoryTable from './ServiceCategoryTable'
import styles from './ServicesMenu.module.css'

export default function ServicesMenu() {
  const [activeSlug, setActiveSlug] = useState<string>(serviceCategories[0].slug)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            setActiveSlug(id)
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

  const handleCategorySelect = (slug: string) => {
    setActiveSlug(slug)
    const target = document.getElementById(slug)
    if (target) {
      const isDesktop = window.innerWidth >= 1024
      const navOffset = isDesktop ? 100 : 130
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className={styles.servicesMenuSection} aria-label="Services Catalog">
      {/* Mobile Top Sticky Navigation */}
      <div className={styles.mobileNavWrapper}>
        <CategoryNav
          activeSlug={activeSlug}
          onCategorySelect={handleCategorySelect}
        />
      </div>

      <div className={`container ${styles.layoutContainer}`}>
        {/* Desktop Left Sticky Sidebar */}
        <div className={styles.sidebarColumn}>
          <CategoryNav
            activeSlug={activeSlug}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {/* Right Content Column — Clean Tables */}
        <main className={styles.tablesColumn} id="services-catalog">
          {serviceCategories.map((category) => (
            <ServiceCategoryTable key={category.id} category={category} />
          ))}
        </main>
      </div>
    </section>
  )
}
