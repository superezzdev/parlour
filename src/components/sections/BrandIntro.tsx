'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './BrandIntro.module.css'

export default function BrandIntro() {
  const leftRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0 })
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const rightTextRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.12 })
  const imageFrameRef = useImageClipReveal<HTMLDivElement>({ delay: 0.1 })

  return (
    <section className={`${styles.brandIntro} section`} aria-labelledby="brand-intro-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left Column — Identity, Visual Anchor & Studio Details */}
          <div ref={leftRef} className={styles.left}>
            <div className={styles.labelWrapper}>
              <SectionLabel>THE GLAMOROUS EXPERIENCE</SectionLabel>
            </div>

            {/* Studio Visual Anchor Card */}
            <div ref={imageFrameRef} className={styles.visualCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/about/about-studio.jpg"
                  alt="Inside Glamorous Boutique Beauty Studio in Sarai Meer"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={styles.studioImage}
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaBadge}>BOUTIQUE STUDIO</span>
                  <h3 className={styles.studioName}>GLAMOROUS</h3>
                  <p className={styles.metaLocation}>Sabji Mandi Rd, Sarai Meer, UP</p>
                </div>
                <div className={styles.accentLine} aria-hidden="true" />
                <p className={styles.studioTagline}>
                  Occasion &amp; Bridal Artistry &bull; By Appointment
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Editorial Statement, Narrative & Pillars */}
          <div className={styles.right}>
            <div className={styles.headingWrapper}>
              <EditorialHeading
                ref={headingRef}
                as="h2"
                size="lg"
                id="brand-intro-heading"
                className={styles.headline}
              >
                Beauty should never disguise who you are &mdash;
                <br />
                <span className={styles.headlineHighlight}>
                  it should reveal your most glowing self.
                </span>
              </EditorialHeading>
            </div>

            <div ref={rightTextRef} className={styles.narrative}>
              <p className={styles.leadText}>
                We&apos;re a boutique makeup and beauty studio on Sabji Mandi Road, Sarai Meer. We do bridal makeup, party glam, hair styling, and skin care &mdash; and we take our time getting every look right. Because your occasion deserves nothing less.
              </p>

              <p className={styles.bodyText}>
                We believe great makeup doesn&apos;t hide your features &mdash; it enhances them. With careful attention to detail, skin-friendly products, and a calm, welcoming environment, we make sure you step out feeling confident, comfortable, and beautiful.
              </p>

              {/* 3 Core Experience Pillars */}
              <div className={styles.pillarsGrid}>
                <div className={styles.pillarItem}>
                  <span className={styles.pillarNum}>01</span>
                  <div className={styles.pillarText}>
                    <strong className={styles.pillarTitle}>Skin-First Prep</strong>
                    <span className={styles.pillarDesc}>Hydrated base for weightless, all-day comfort</span>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <span className={styles.pillarNum}>02</span>
                  <div className={styles.pillarText}>
                    <strong className={styles.pillarTitle}>Bespoke Artistry</strong>
                    <span className={styles.pillarDesc}>Precision shades matched to skin tone &amp; outfit</span>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <span className={styles.pillarNum}>03</span>
                  <div className={styles.pillarText}>
                    <strong className={styles.pillarTitle}>Calm Sanctuary</strong>
                    <span className={styles.pillarDesc}>Unhurried private setting focused solely on you</span>
                  </div>
                </div>
              </div>

              <div className={styles.action}>
                <Link href="/about" className="btn btn-secondary">
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
