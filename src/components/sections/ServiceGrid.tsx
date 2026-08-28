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
  const [activeService, setActiveService] = useState<number>(0)
  const imagePanelRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0 })
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const rightColRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 })

  return (
    <section className={styles.servicesSection} aria-labelledby="services-preview-heading">
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* ─── Left Column: Dynamic Visual Panel (60% width, desktop) ─── */}
          <div ref={imagePanelRef} className={styles.leftCol} aria-hidden="true">
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.imageWrapper} ${
                  activeService === index ? styles.imageActive : ''
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
                {servicesList[activeService].number} / 06
              </span>
              <span className={styles.badgeDot} />
              <span className={styles.badgeName}>
                {servicesList[activeService].name}
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
                  <Link
                    key={service.id}
                    href={`/services#${service.slug}`}
                    className={`${styles.rowItem} ${isActive ? styles.rowActive : ''}`}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    role="listitem"
                    aria-label={`${service.number} ${service.name}`}
                  >
                    <div className={styles.rowHeader}>
                      {/* Left: Number */}
                      <span className={styles.rowNumber}>{service.number}</span>

                      {/* Center: Name & Expanding 1-Line Description */}
                      <div className={styles.rowContent}>
                        <h3 className={styles.rowName}>{service.name}</h3>
                        <p className={styles.description}>{service.description}</p>
                      </div>

                      {/* Right: Arrow */}
                      <span className={styles.rowArrow} aria-hidden="true">
                        &rarr;
                      </span>
                    </div>
                  </Link>
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
