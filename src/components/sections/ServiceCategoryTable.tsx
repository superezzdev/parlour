'use client'

import React from 'react'
import { ServiceCategory } from '@/data/services'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './ServiceCategoryTable.module.css'

interface ServiceCategoryTableProps {
  category: ServiceCategory
}

export default function ServiceCategoryTable({ category }: ServiceCategoryTableProps) {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const introRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const tableRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 })

  return (
    <section
      id={category.slug}
      className={styles.categorySection}
      aria-labelledby={`category-heading-${category.slug}`}
    >
      {/* Category Header */}
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

        {/* Single intro sentence max */}
        <p ref={introRef} className={styles.categoryIntro}>{category.description}</p>

        {/* 1px Ghost Divider */}
        <div className={styles.ghostDivider} aria-hidden="true" />
      </header>

      {/* Services Clean Table / List */}
      <div ref={tableRef} className={styles.serviceTable} role="list" aria-label={`${category.name} offerings`}>
        {category.services.map((service) => (
          <div
            key={service.id}
            className={styles.serviceRow}
            role="listitem"
            tabIndex={0}
          >
            {/* Left Accent Bar on Hover (3px gold) */}
            <span className={styles.goldHoverBar} aria-hidden="true" />

            {/* Left Content: Title & Short Description */}
            <div className={styles.serviceMain}>
              <div className={styles.titleRow}>
                <h3 className={styles.serviceName}>{service.name}</h3>
                {service.isSignature && (
                  <span className={styles.signatureBadge}>Signature</span>
                )}
              </div>
              <p className={styles.serviceDescription}>
                {service.shortDescription || service.tagline}
              </p>
            </div>

            {/* Right Content: Duration & Price */}
            <div className={styles.serviceMeta}>
              {service.duration && (
                <span className={styles.serviceDuration}>{service.duration}</span>
              )}
              <span className={styles.servicePrice}>{service.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
