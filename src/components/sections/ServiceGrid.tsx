'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './ServiceGrid.module.css'

interface ServiceItem {
  number: string
  id: string
  name: string
  slug: string
  description: string
  image: string
}

const servicesList: ServiceItem[] = [
  {
    number: '01',
    id: 'bridal-artistry',
    name: 'Bridal Artistry',
    slug: 'bridal',
    description: 'Personalized bridal makeup tailored with enduring elegance and waterproof wear.',
    image: '/images/services/bridal.jpg',
  },
  {
    number: '02',
    id: 'party-occasion',
    name: 'Party & Occasion',
    slug: 'makeup',
    description: 'Glowing, elegant glamour for engagements, receptions, and family celebrations.',
    image: '/images/services/makeup.jpg',
  },
  {
    number: '03',
    id: 'hair-draping',
    name: 'Hair & Draping',
    slug: 'hair',
    description: 'Party hairstyles, traditional bridal updos, and neat saree and dupatta draping.',
    image: '/images/services/hair.jpg',
  },
  {
    number: '04',
    id: 'festive-beauty',
    name: 'Festive Beauty',
    slug: 'event',
    description: 'Vibrant party looks crafted for mehendi, sangeet, and festive celebrations.',
    image: '/images/services/event.jpg',
  },
  {
    number: '05',
    id: 'skin-rituals',
    name: 'Skin Rituals',
    slug: 'skin',
    description: 'Pre-bridal skin care, rejuvenating facials, and gentle cleansing treatments.',
    image: '/images/services/skin.jpg',
  },
  {
    number: '06',
    id: 'nail-artistry',
    name: 'Nail Artistry',
    slug: 'nails',
    description: 'Hand-painted nail art, bridal designs, and relaxing manicures.',
    image: '/images/services/nails.jpg',
  },
]

export default function ServiceGrid() {
  const [activeService, setActiveService] = useState<number | null>(0)
  const imagePanelRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0 })
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const rightColRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 })

  const currentDesktopIndex = activeService ?? 0

  const handleRowClick = (e: React.MouseEvent, index: number) => {
    // On mobile & touch screens (< 992px), toggle the accordion on tap instead of immediate navigation
    if (typeof window !== 'undefined' && window.innerWidth < 992) {
      e.preventDefault()
      setActiveService((prev) => (prev === index ? null : index))
    }
  }

  return (
    <section className={styles.servicesSection} aria-labelledby="services-preview-heading">
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* ─── Left Column: Dynamic Visual Panel (60% width, desktop only) ─── */}
          <div ref={imagePanelRef} className={styles.leftCol} aria-hidden="true">
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.imageWrapper} ${
                  currentDesktopIndex === index ? styles.imageActive : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.name}
                  className={styles.image}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
            <div className={styles.imageOverlay} />
            <div className={styles.imageBadge}>
              <span className={styles.badgeNumber}>
                {servicesList[currentDesktopIndex].number} / 06
              </span>
              <span className={styles.badgeDot} />
              <span className={styles.badgeName}>
                {servicesList[currentDesktopIndex].name}
              </span>
            </div>
          </div>

          {/* ─── Right Column: Accordion-Style Content (40% width, desktop) ─── */}
          <div ref={rightColRef} className={styles.rightCol}>
            <span className={styles.eyebrow}>WHAT WE CREATE</span>

            <div className="overflow-hidden">
              <h2
                ref={headingRef}
                id="services-preview-heading"
                className={styles.heading}
              >
                {'Six disciplines,\none standard.'}
              </h2>
            </div>

            {/* Interactive Accordion Rows */}
            <div className={styles.serviceList} role="list">
              {servicesList.map((service, index) => {
                const isActive = activeService === index

                return (
                  <div
                    key={service.id}
                    className={`${styles.rowItem} ${isActive ? styles.rowActive : ''}`}
                    role="listitem"
                  >
                    <Link
                      href={`/services#${service.slug}`}
                      className={styles.rowLink}
                      onClick={(e) => handleRowClick(e, index)}
                      onMouseEnter={() => setActiveService(index)}
                      onFocus={() => setActiveService(index)}
                      aria-expanded={isActive}
                      aria-label={`${service.number} ${service.name}`}
                    >
                      <div className={styles.rowHeader}>
                        {/* Left: Number */}
                        <span className={styles.rowNumber}>{service.number}</span>

                        {/* Center: Name & Desktop-only Hover Description */}
                        <div className={styles.rowContent}>
                          <h3 className={styles.rowName}>{service.name}</h3>
                          <p className={styles.description}>{service.description}</p>
                        </div>

                        {/* Right: Desktop Arrow & Mobile Accordion Toggle */}
                        <div className={styles.rowAction} aria-hidden="true">
                          <span className={styles.rowArrow}>&rarr;</span>
                          <span
                            className={`${styles.mobileToggle} ${
                              isActive ? styles.mobileToggleOpen : ''
                            }`}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* Mobile-only Expanding Rich Card (< 992px) */}
                    <div
                      className={`${styles.mobileExpandedBody} ${
                        isActive ? styles.mobileExpandedOpen : ''
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className={styles.mobileCardContent}>
                        <Link
                          href={`/services#${service.slug}`}
                          className={styles.mobileImageFrame}
                          tabIndex={isActive ? 0 : -1}
                          aria-label={`View ${service.name} gallery and details`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={service.image}
                            alt={service.name}
                            className={styles.mobileImage}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className={styles.mobileImageOverlay} />
                          <div className={styles.mobileImageBadge}>
                            <span className={styles.mobileBadgeNumber}>
                              {service.number}
                            </span>
                            <span className={styles.mobileBadgeDot} />
                            <span className={styles.mobileBadgeLabel}>
                              SIGNATURE SERVICE
                            </span>
                          </div>
                        </Link>

                        <p className={styles.mobileDescription}>
                          {service.description}
                        </p>

                        <Link
                          href={`/services#${service.slug}`}
                          className={styles.mobileServiceCta}
                          tabIndex={isActive ? 0 : -1}
                        >
                          <span>Explore {service.name}</span>
                          <span className={styles.mobileCtaArrow} aria-hidden="true">
                            &rarr;
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Explore Link */}
            <div className={styles.footerLinkWrapper}>
              <Link href="/services" className={styles.exploreLink}>
                <span>Explore complete menu</span>
                <span className={styles.exploreArrow} aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ServiceGrid as ServicesPreview }
