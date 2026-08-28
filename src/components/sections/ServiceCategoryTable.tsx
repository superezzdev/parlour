'use client'

import React from 'react'
import Link from 'next/link'
import { ServiceCategory } from '@/data/services'
import { salon } from '@/data/salon'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './ServiceCategoryTable.module.css'

interface ServiceCategoryTableProps {
  category: ServiceCategory
}

export default function ServiceCategoryTable({ category }: ServiceCategoryTableProps) {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const introRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const bannerRef = useScrollReveal<HTMLDivElement>({ y: 25, delay: 0.12 })
  const tableRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 })

  const isBridal = category.slug === 'bridal'

  return (
    <section
      id={category.slug}
      className={styles.categorySection}
      aria-labelledby={`category-heading-${category.slug}`}
    >
      {/* 1. Category Header */}
      <header className={styles.categoryHeader}>
        <div className={styles.headerMeta}>
          <span className={styles.categoryNumber}>{category.number}</span>
          <span className={styles.categoryTag}>{category.navLabel}</span>
        </div>

        <div className="overflow-hidden">
          <h2 id={`category-heading-${category.slug}`} ref={headingRef} className={`${styles.categoryTitle} section-heading`}>
            {category.name}
          </h2>
        </div>

        <p ref={introRef} className={styles.categoryIntro}>{category.description}</p>
      </header>

      {/* 2. Category Featured Visual Banner */}
      {category.heroImage && (
        <div ref={bannerRef} className={styles.categoryBanner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={category.heroImage}
            alt={`${category.name} artistry at Glamorous studio`}
            className={styles.bannerImage}
            loading="lazy"
          />
          <div className={styles.bannerOverlay} aria-hidden="true" />
          <div className={styles.bannerBadge}>
            <span>{category.number} · {category.name.toUpperCase()}</span>
          </div>
        </div>
      )}

      {/* 3. Luxury Service Cards */}
      <div ref={tableRef} className={styles.serviceTable} role="list" aria-label={`${category.name} offerings`}>
        {category.services.map((service) => {
          const bookingUrl = `/contact?service=${encodeURIComponent(service.name)}`
          const waMessage = encodeURIComponent(
            `Hi Glamorous! I would like to inquire about the "${service.name}" service.`
          )
          const waUrl = `https://wa.me/${salon.phone.replace(/[^0-9]/g, '')}?text=${waMessage}`

          return (
            <div
              key={service.id}
              className={styles.serviceRow}
              role="listitem"
            >
              {/* Left Accent Bar on Hover (3px gold) */}
              <span className={styles.goldHoverBar} aria-hidden="true" />

              {/* Left Content: Title & Description */}
              <div className={styles.serviceMain}>
                <div className={styles.titleRow}>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  {service.isSignature && (
                    <span className={styles.signatureBadge}>Signature Craft</span>
                  )}
                </div>
                <p className={styles.serviceDescription}>
                  {service.shortDescription || service.tagline || service.description}
                </p>
              </div>

              {/* Right Content: Duration, Price & Action Buttons */}
              <div className={styles.serviceRight}>
                <div className={styles.serviceMeta}>
                  <span className={styles.servicePrice}>{service.price}</span>
                  {service.duration && (
                    <span className={styles.serviceDuration}>{service.duration}</span>
                  )}
                </div>

                <div className={styles.serviceActions}>
                  <Link
                    href={bookingUrl}
                    className={styles.bookBtn}
                    aria-label={`Reserve ${service.name}`}
                  >
                    <span>Reserve</span>
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="4" y1="10" x2="16" y2="10" />
                      <polyline points="11,5 16,10 11,15" />
                    </svg>
                  </Link>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waBtn}
                    aria-label={`Chat on WhatsApp about ${service.name}`}
                    title="Inquire on WhatsApp"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 4. Special Bridal Showcase Link for Bridal Category */}
      {isBridal && (
        <div className={styles.bridalSpotlight}>
          <div className={styles.spotlightContent}>
            <span className={styles.spotlightLabel}>THE BRIDAL EXPERIENCE</span>
            <h3 className={styles.spotlightTitle}>Planning your wedding day look?</h3>
            <p className={styles.spotlightText}>
              Discover our complete bridal journey, consultations &amp; trials, lehenga and jewellery styling, and multi-day packages.
            </p>
          </div>
          <Link href="/bridal" className={styles.spotlightBtn}>
            <span>Explore Bridal Experience</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" y1="10" x2="16" y2="10" />
              <polyline points="11,5 16,10 11,15" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  )
}
