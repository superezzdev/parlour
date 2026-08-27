import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { signatureServices } from '@/data/services'
import styles from './ServiceGrid.module.css'

export default function ServiceGrid() {
  return (
    <section className={`${styles.serviceGrid} section`} aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.header} data-reveal>
          <SectionLabel>What We Do</SectionLabel>
          <EditorialHeading as="h2" size="lg" id="services-heading" className={styles.headline}>
            Curated for every<br />
            <em>beautiful occasion</em>
          </EditorialHeading>
        </div>

        {/* Services — editorial list layout (not a card grid) */}
        <div className={styles.list} data-stagger role="list">
          {signatureServices.map((service, index) => (
            <article
              key={service.id}
              className={styles.item}
              role="listitem"
              aria-label={service.name}
            >
              <div className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{service.name}</h3>
                <p className={`${styles.itemDescription} body-text`}>
                  {service.description}
                </p>
              </div>

              <div className={styles.itemAction}>
                <Link href="/services" className={styles.itemLink} aria-label={`Learn more about ${service.name}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="3" y1="10" x2="17" y2="10" />
                    <polyline points="12,5 17,10 12,15" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className={styles.footer} data-reveal>
          <Link href="/services" className="btn btn-primary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
