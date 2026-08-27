import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import styles from './BridalTeaser.module.css'

export default function BridalTeaser() {
  return (
    <section className={styles.bridalTeaser} aria-labelledby="bridal-teaser-heading">
      {/* Full-bleed background */}
      <div className={styles.media} aria-hidden="true">
        {/* [PLACEHOLDER H03] — replace with real bridal editorial image */}
        <div className={styles.bg} />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.inner} data-reveal>
          <SectionLabel>Bridal Beauty</SectionLabel>

          <EditorialHeading
            as="h2"
            size="xl"
            italic
            id="bridal-teaser-heading"
            className={styles.headline}
          >
            Your day.<br />
            Your face.<br />
            Your story.
          </EditorialHeading>

          <p className={`${styles.body} lead`}>
            Every bride deserves to feel extraordinary.
            A look crafted with patience, precision, and a deep
            understanding of who you are.
          </p>

          <Link href="/bridal" className={`btn btn-primary btn-lg ${styles.cta}`}>
            Discover Bridal
          </Link>
        </div>
      </div>
    </section>
  )
}
