import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import styles from './BrandIntro.module.css'

export default function BrandIntro() {
  return (
    <section className={`${styles.brandIntro} section`} aria-labelledby="brand-intro-heading">
      <div className="container">
        <div className={`${styles.inner} editorial-split editorial-split--40-60`}>
          {/* Left — Label + Decorative */}
          <div className={styles.left} data-reveal="left">
            <SectionLabel>Our Studio</SectionLabel>
            <div className={styles.accent} aria-hidden="true" />
            <p className={`${styles.location} caption`}>
              Sarai Meer, Uttar Pradesh
            </p>
          </div>

          {/* Right — Content */}
          <div className={styles.right}>
            <EditorialHeading
              as="h2"
              size="lg"
              id="brand-intro-heading"
              className={styles.headline}
              data-reveal
            >
              {/* PLACEHOLDER H04 */}
              Beauty is not an afterthought.<br />
              <em>It is the beginning of the story.</em>
            </EditorialHeading>

            <div data-stagger>
              <p className="lead">
                {/* PLACEHOLDER BRAND_INTRO */}
                Nestled in Sarai Meer, Glamorous is a beauty studio dedicated to the
                art of transformation. From bridal days to evening events, every look
                we create is considered, crafted, and entirely yours.
              </p>

              <p className="body-text mt-8">
                We believe that skilled artistry — patient, precise, and personal —
                can help every woman feel her most confident. That belief is at the
                heart of everything we do.
              </p>

              <Link
                href="/about"
                className="btn btn-ghost mt-10"
                style={{ display: 'inline-block' }}
              >
                Our story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
