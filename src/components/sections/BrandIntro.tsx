import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import styles from './BrandIntro.module.css'

export default function BrandIntro() {
  return (
    <section className={`${styles.brandIntro} section`} aria-labelledby="brand-intro-heading">
      <div className="container">
        <div className={`${styles.inner} editorial-split editorial-split--40-60`}>
          {/* Left — Section Label, Accent & Studio Origin */}
          <div className={styles.left} data-reveal="left">
            <SectionLabel>THE GLAMOROUS EXPERIENCE</SectionLabel>
            <div className={styles.accent} aria-hidden="true" />
            <div className={styles.metaBlock}>
              <p className={styles.metaTitle}>BOUTIQUE BEAUTY STUDIO</p>
              <p className={styles.metaLocation}>Sabji Mandi Rd, Sarai Meer</p>
            </div>
          </div>

          {/* Right — Philosophy Statement & Narrative */}
          <div className={styles.right}>
            <EditorialHeading
              as="h2"
              size="lg"
              id="brand-intro-heading"
              className={styles.headline}
              data-reveal
            >
              Beauty should never disguise who you are &mdash;<br />
              <em>it should reveal your most luminous self.</em>
            </EditorialHeading>

            <div data-stagger className={styles.narrative}>
              <p className="lead">
                Nestled on the 1st Floor at Sabji Mandi Road in Sarai Meer, Glamorous is
                an intimate beauty sanctuary dedicated to the art of personalized aesthetic expression.
                From sacred bridal rituals to radiant evening celebrations, every look we compose
                is tailored with intentional nuance.
              </p>

              <p className="body-text">
                We believe true glamour is not a mask, but an authentic elevation. With patient precision,
                skin-first artistry, and deep reverence for timeless elegance, we ensure you walk
                into your most cherished moments looking and feeling unmistakably extraordinary.
              </p>

              <div className={styles.action}>
                <Link href="/about" className="btn btn-ghost">
                  <span>Explore our philosophy &amp; story</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
