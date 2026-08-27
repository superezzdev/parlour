import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { ServiceCategory } from '@/data/services'
import { salon } from '@/data/salon'
import styles from './ServiceEditorialSection.module.css'

interface ServiceEditorialSectionProps {
  category: ServiceCategory
}

export default function ServiceEditorialSection({
  category,
}: ServiceEditorialSectionProps) {
  return (
    <section
      id={category.slug}
      className={styles.categorySection}
      aria-labelledby={`category-title-${category.slug}`}
    >
      <div className="container">
        {/* Category Header */}
        <div className={styles.categoryHeader} data-reveal>
          <div className={styles.categoryHeaderTop}>
            <SectionLabel>{`${category.number} / ${category.name.toUpperCase()}`}</SectionLabel>
            <span className={styles.categoryWatermark} aria-hidden="true">
              {category.number}
            </span>
          </div>

          <EditorialHeading
            as="h2"
            size="lg"
            id={`category-title-${category.slug}`}
            className={styles.categoryTitle}
          >
            {category.name}
          </EditorialHeading>

          <p className={styles.categoryTagline}>{category.description}</p>
        </div>

        {/* Alternating Services Stack */}
        <div className={styles.servicesStack}>
          {category.services.map((service, serviceIdx) => {
            const isReversed = serviceIdx % 2 === 1
            const serviceIndexNumber = `${category.number}.${serviceIdx + 1}`
            const whatsappMessage = encodeURIComponent(
              `Hi Glamorous! I would like to inquire about the "${service.name}" service.`
            )
            const whatsappUrl = `https://wa.me/${salon.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

            return (
              <article
                key={service.id}
                className={`${styles.serviceRow}${isReversed ? ` ${styles.serviceRowReversed}` : ''}`}
                data-reveal
                aria-labelledby={`service-title-${service.id}`}
              >
                {/* 1. Large Editorial Image with subtle hover scale */}
                <div className={styles.imageColumn}>
                  <div className={styles.imageFrame}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      className={styles.serviceImage}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay} aria-hidden="true" />

                    {service.isSignature && (
                      <span className={styles.signatureBadge}>Signature Craft</span>
                    )}

                    <span className={styles.serviceIndexPill} aria-hidden="true">
                      {serviceIndexNumber}
                    </span>
                  </div>
                </div>

                {/* 2. Editorial Content Column */}
                <div className={styles.contentColumn}>
                  <div className={styles.serviceMeta}>
                    <span className={styles.serviceTag}>
                      {service.categorySlug.toUpperCase()} · DISC. {category.number}
                    </span>
                  </div>

                  <h3 id={`service-title-${service.id}`} className={styles.serviceTitle}>
                    {service.name}
                  </h3>

                  {service.tagline && (
                    <p className={styles.serviceTagline}>{service.tagline}</p>
                  )}

                  <p className={styles.serviceDesc}>{service.description}</p>

                  {/* Highlights of craftsmanship */}
                  {service.highlights && service.highlights.length > 0 && (
                    <div className={styles.highlightsBlock}>
                      <h4 className={styles.highlightsTitle}>Service Inclusions &amp; Focus</h4>
                      <ul className={styles.highlightsList}>
                        {service.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className={styles.highlightItem}>
                            <span className={styles.highlightBullet} aria-hidden="true">
                              ◆
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Pricing / Consultation Note — strictly no fake pricing */}
                  {service.pricingNote && (
                    <div className={styles.pricingRow}>
                      <span className={styles.pricingPrefix}>Pricing:</span>
                      <span className={styles.pricingBadge}>
                        <span className={styles.pricingBadgeDot} aria-hidden="true" />
                        <span>{service.pricingNote}</span>
                      </span>
                    </div>
                  )}

                  {/* CTA Actions */}
                  <div className={styles.serviceActions}>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className={`btn btn-primary btn-md ${styles.bookBtn}`}
                    >
                      <span>Reserve Consultation</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="4" y1="10" x2="16" y2="10" />
                        <polyline points="11,5 16,10 11,15" />
                      </svg>
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-ghost btn-sm ${styles.inquireBtn}`}
                      aria-label={`Inquire about ${service.name} via WhatsApp`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
