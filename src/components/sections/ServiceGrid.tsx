import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import styles from './ServiceGrid.module.css'

interface FeaturedCategory {
  number: string
  id: string
  title: string
  slug: string
  description: string
  image: string
  tag: string
}

const featuredCategories: FeaturedCategory[] = [
  {
    number: '01',
    id: 'bridal-makeup',
    title: 'Bridal Artistry',
    slug: 'bridal',
    description:
      'Bespoke, ceremony-ready bridal looks crafted with endurance, radiant skin precision, and classic elegance.',
    image: '/images/services/bridal.jpg',
    tag: 'SIGNATURE CRAFT',
  },
  {
    number: '02',
    id: 'party-makeup',
    title: 'Party & Occasion Makeup',
    slug: 'makeup',
    description:
      'Luminous, sculpted glamour tailored for engagements, receptions, and unforgettable festive gatherings.',
    image: '/images/services/makeup.jpg',
    tag: 'EDITORIAL GLOW',
  },
  {
    number: '03',
    id: 'hair-styling',
    title: 'Hair Styling & Draping',
    slug: 'hair',
    description:
      'Intricate bridal updos, romantic textured waves, and immaculate dupatta & saree draping artistry.',
    image: '/images/services/hair.jpg',
    tag: 'BESPOKE FINISH',
  },
  {
    number: '04',
    id: 'skin-care',
    title: 'Skin Care & Facials',
    slug: 'skin',
    description:
      'Nourishing pre-bridal prep, brightening facials, and delicate cleanup treatments that awaken natural radiance.',
    image: '/images/services/skin.jpg',
    tag: 'SKIN RITUALS',
  },
  {
    number: '05',
    id: 'nails-art',
    title: 'Manicure & Nail Art',
    slug: 'nails',
    description:
      'Refined manicures, custom bridal nail accents, and lasting polish finishes to complement your styling.',
    image: '/images/services/nails.jpg',
    tag: 'STUDIO DETAILS',
  },
  {
    number: '06',
    id: 'event-celebration',
    title: 'Mehendi & Festive Looks',
    slug: 'event',
    description:
      'Vibrant, festive beauty aesthetics coordinated seamlessly with your traditional wardrobe and celebrations.',
    image: '/images/services/event.jpg',
    tag: 'FESTIVE EDIT',
  },
]

export default function ServiceGrid() {
  return (
    <section className={`${styles.serviceGrid} section`} aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.header} data-reveal>
          <div className={styles.headerTop}>
            <SectionLabel>SIGNATURE OFFERINGS</SectionLabel>
            <span className={styles.categoryCount}>06 Disciplines</span>
          </div>
          <div className={styles.headerContent}>
            <EditorialHeading as="h2" size="lg" id="services-heading" className={styles.headline}>
              Curated beauty disciplines,<br />
              <em>executed with mastery.</em>
            </EditorialHeading>
            <p className={styles.headerLead}>
              Every service is delivered using premium products, meticulous hygiene,
              and tailored techniques aligned with your personal features.
            </p>
          </div>
        </div>

        {/* Services — Horizontal Editorial Presentation */}
        <div className={styles.list} data-stagger role="list">
          {featuredCategories.map((item) => (
            <Link
              key={item.id}
              href={`/services#${item.slug}`}
              className={styles.rowLink}
              role="listitem"
              aria-label={`Explore ${item.title}`}
            >
              <article className={styles.item}>
                {/* 1. Number */}
                <div className={styles.numberCol}>
                  <span className={styles.number}>{item.number}</span>
                </div>

                {/* 2. Visual Thumbnail */}
                <div className={styles.imageCol} aria-hidden="true">
                  <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.thumbnail}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 3. Title & Tag */}
                <div className={styles.titleCol}>
                  <span className={styles.tag}>{item.tag}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>

                {/* 4. Description */}
                <div className={styles.descCol}>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>

                {/* 5. Action Arrow */}
                <div className={styles.actionCol} aria-hidden="true">
                  <div className={styles.actionCircle}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="10" x2="16" y2="10" />
                      <polyline points="11,5 16,10 11,15" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Note on custom bookings & Footer CTA */}
        <div className={styles.footer} data-reveal>
          <div className={styles.footerInfo}>
            <p className={styles.placeholderNote}>
              * Service durations and packages can be customized for group bookings and wedding parties.
            </p>
            <Link href="/services" className="btn btn-primary btn-lg">
              Explore Complete Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
