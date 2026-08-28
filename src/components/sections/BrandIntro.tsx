'use client'

import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './BrandIntro.module.css'

export default function BrandIntro() {
  const leftRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0 })
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const rightTextRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0.15 })

  return (
    <section className={`${styles.brandIntro} section`} aria-labelledby="brand-intro-heading">
      <div className="container">
        <div className={`${styles.inner} editorial-split editorial-split--40-60`}>
          {/* Left — Section Label, Accent & Studio Origin */}
          <div ref={leftRef} className={styles.left}>
            <SectionLabel>THE GLAMOROUS EXPERIENCE</SectionLabel>
            <div className={styles.accent} aria-hidden="true" />
            <div className={styles.metaBlock}>
              <p className={styles.metaTitle}>BOUTIQUE BEAUTY STUDIO</p>
              <p className={styles.metaLocation}>Sabji Mandi Rd, Sarai Meer</p>
            </div>
          </div>

          {/* Right — Philosophy Statement & Narrative */}
          <div className={styles.right}>
            <div className="overflow-hidden">
              <EditorialHeading
                ref={headingRef}
                as="h2"
                size="lg"
                id="brand-intro-heading"
                className={`${styles.headline} section-heading`}
              >
                Beauty should never disguise who you are &mdash;<br />
                <em>it should reveal your most glowing self.</em>
              </EditorialHeading>
            </div>

            <div ref={rightTextRef} className={styles.narrative}>
              <p className="lead">
                We&apos;re a boutique makeup and beauty studio on Sabji Mandi Road, Sarai Meer. We do bridal makeup, party glam, hair styling, and skin care &mdash; and we take our time getting every look right. Because your occasion deserves nothing less.
              </p>

              <p className="body-text">
                We believe great makeup doesn&apos;t hide your features &mdash; it enhances them. With careful attention to detail, skin-friendly products, and a calm, welcoming environment, we make sure you step out feeling confident, comfortable, and beautiful.
              </p>

              <div className={styles.action}>
                <Link href="/about" className="btn btn-ghost">
                  <span>Explore our story &amp; philosophy</span>
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

export { BrandIntro as AboutTeaser }
