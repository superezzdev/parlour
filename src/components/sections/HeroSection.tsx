'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import { gsap } from '@/lib/gsap'
import { useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './HeroSection.module.css'

export type HeroVariant = 'home' | 'services' | 'gallery' | 'about' | 'contact' | 'bridal' | 'default'

export interface HeroSectionProps {
  variant?: HeroVariant
  label?: string
  headline?: React.ReactNode
  subheadline?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  locationTag?: string
  /** Background/Feature image URL — null if not applicable */
  imageSrc?: string | null
  imageAlt?: string
  /** Whether this is full-viewport (kept for backwards compatibility) */
  fullBleed?: boolean
}

export default function HeroSection({
  variant = 'home',
  label,
  headline = (
    <>
      <div className="overflow-hidden">
        <span className="hero-line-1 block">BEAUTY,</span>
      </div>
      <div className="overflow-hidden">
        <span className="hero-line-2 block">MADE</span>
      </div>
      <div className="overflow-hidden">
        <span className="hero-line-3 block text-gold italic font-light">PERSONAL.</span>
      </div>
    </>
  ),
  subheadline,
  ctaLabel = 'BOOK AN APPOINTMENT',
  ctaHref = '/contact',
  secondaryCtaLabel = 'EXPLORE BRIDAL',
  secondaryCtaHref = '/bridal',
  locationTag = 'SARAI MEER · UTTAR PRADESH',
  imageSrc = '/images/hero/hero-editorial.jpg',
  imageAlt = 'Glamorous beauty studio — luxury makeup artistry in Sarai Meer',
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null)
  const aboutImageRef = useImageClipReveal<HTMLDivElement>({ start: 'top 80%' })
  const bridalImageRef = useImageClipReveal<HTMLDivElement>({ start: 'top 80%' })

  // PART A — Hero text animation (runs on page load, not scroll):
  // After the page has rendered (useEffect with 0.2s delay), animate the hero content
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setTimeout(() => {
      const heroEl = heroRef.current
      if (!heroEl) return

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        const eyebrow = heroEl.querySelector('.hero-eyebrow')
        const line1 = heroEl.querySelector('.hero-line-1')
        const line2 = heroEl.querySelector('.hero-line-2')
        const line3 = heroEl.querySelector('.hero-line-3')
        const desc = heroEl.querySelector('.hero-description')
        const buttons = heroEl.querySelector('.hero-buttons')
        const image = heroEl.querySelector('.hero-image')

        if (eyebrow) {
          tl.from(eyebrow, { opacity: 0, y: 20, duration: 0.6 })
        }
        if (line1) {
          tl.from(line1, { y: '100%', duration: 0.8 }, eyebrow ? '-=0.3' : '+=0')
        }
        if (line2) {
          tl.from(line2, { y: '100%', duration: 0.8 }, '-=0.6')
        }
        if (line3) {
          tl.from(line3, { y: '100%', duration: 0.8 }, '-=0.6')
        }
        if (desc) {
          tl.from(desc, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        }
        if (buttons) {
          tl.from(buttons, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        }
        if (image) {
          tl.from(image, { clipPath: 'inset(100% 0 0 0)', duration: 1.2, ease: 'power2.inOut' }, '-=0.8')
        }
      }, heroRef)

      return () => ctx.revert()
    }, 200)

    return () => clearTimeout(timer)
  }, [variant])

  // Top-left location badge (Unified single instance across all pages)
  const locationBadgeNode = locationTag ? (
    <div className={styles.badgeTopLeft} aria-hidden="true">
      <span className={styles.locationBadge}>{locationTag}</span>
    </div>
  ) : null

  // ─────────────────────────────────────────────────────────────
  // 1. SERVICES HERO (Centered, Minimal, Noir, Short py-20, No Image)
  // ─────────────────────────────────────────────────────────────
  if (variant === 'services') {
    return (
      <section ref={heroRef} className={styles.heroServices} aria-label="Services hero">
        {locationBadgeNode}
        <div className={`container ${styles.servicesContainer}`}>
          <div className={styles.servicesContent}>
            {label && (
              <div className={`${styles.servicesLabelWrapper} hero-eyebrow`}>
                <SectionLabel>{label}</SectionLabel>
              </div>
            )}

            <h1 className={styles.servicesHeadline}>
              {headline}
            </h1>

            {/* Thin horizontal line: 1px, bg-ghost, width 60px, mx-auto */}
            <div className={styles.servicesGhostLine} aria-hidden="true" />

            {subheadline && (
              <p className={`${styles.servicesSubheadline} hero-description`}>{subheadline}</p>
            )}
          </div>
        </div>
      </section>
    )
  }

  // ─────────────────────────────────────────────────────────────
  // 2. GALLERY HERO (Image-First, Full Viewport, Bottom Pinned Text)
  // ─────────────────────────────────────────────────────────────
  if (variant === 'gallery') {
    return (
      <section ref={heroRef} className={styles.heroGallery} aria-label="Gallery portfolio hero">
        {locationBadgeNode}

        {/* Full viewport hero image */}
        <div className={`${styles.galleryMedia} hero-image`} aria-hidden="true">
          {imageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.galleryImage}
              loading="eager"
              fetchPriority="high"
            />
          )}
          {/* Black gradient overlay: transparent 40% to rgba(8,8,8,0.95) 100% */}
          <div className={styles.galleryOverlay} aria-hidden="true" />
        </div>

        {/* Headline text positioned at the bottom */}
        <div className={styles.galleryBottomContent}>
          {label && (
            <div className={`${styles.galleryLabel} hero-eyebrow`}>
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}

          <h1 className={styles.galleryHeadline}>
            {headline}
          </h1>

          {subheadline && (
            <p className={`${styles.gallerySubheadline} hero-description`}>{subheadline}</p>
          )}
        </div>
      </section>
    )
  }

  // ─────────────────────────────────────────────────────────────
  // 3. ABOUT HERO (Portrait-Split: 40% Left Text + 60% Right Portrait)
  // ─────────────────────────────────────────────────────────────
  if (variant === 'about') {
    return (
      <section ref={heroRef} className={styles.heroAbout} aria-label="About studio hero">
        {locationBadgeNode}

        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutSplitGrid}>
            {/* 40% Left: only the headline text, vertically centered */}
            <div className={styles.aboutLeftText}>
              {label && (
                <div className={`${styles.aboutLabelWrapper} hero-eyebrow`}>
                  <SectionLabel>{label}</SectionLabel>
                </div>
              )}

              <h1 className={styles.aboutHeadline}>
                {headline}
              </h1>

              {subheadline && (
                <p className={`${styles.aboutSubheadline} hero-description`}>{subheadline}</p>
              )}
            </div>

            {/* 60% Right: full-height portrait image with clip-path reveal */}
            <div className={styles.aboutRightMedia}>
              <div ref={aboutImageRef} className={styles.aboutImageFrame}>
                {imageSrc && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={styles.aboutPortraitImage}
                    loading="eager"
                    fetchPriority="high"
                  />
                )}
                <div className={styles.aboutImageOverlay} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ─────────────────────────────────────────────────────────────
  // 4. CONTACT / BOOK HERO (Text Only, Small py-20, Animated Underline)
  // ─────────────────────────────────────────────────────────────
  if (variant === 'contact') {
    return (
      <section ref={heroRef} className={styles.heroContact} aria-label="Appointments hero">
        {locationBadgeNode}

        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactContent}>
            {label && (
              <div className={`${styles.contactLabelWrapper} hero-eyebrow`}>
                <SectionLabel>{label}</SectionLabel>
              </div>
            )}

            <h1 className={styles.contactHeadline}>
              {headline}
            </h1>

            {subheadline && (
              <p className={`${styles.contactSubheadline} hero-description`}>{subheadline}</p>
            )}
          </div>
        </div>
      </section>
    )
  }

  // ─────────────────────────────────────────────────────────────
  // 5. BRIDAL HERO (Cinematic Luxury Bridal Treatment)
  // ─────────────────────────────────────────────────────────────
  if (variant === 'bridal') {
    return (
      <section ref={heroRef} className={styles.heroBridal} aria-label="Bridal hero">
        {locationBadgeNode}

        <div ref={bridalImageRef} className={`${styles.bridalMedia} hero-image`} aria-hidden="true">
          {imageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.bridalImage}
              loading="eager"
              fetchPriority="high"
            />
          )}
          <div className={styles.bridalOverlay} aria-hidden="true" />
        </div>

        <div className={`container ${styles.bridalContent}`}>
          {label && (
            <div className="hero-eyebrow">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}

          <h1 className={styles.headline}>
            {headline}
          </h1>

          {subheadline && (
            <p className={`${styles.subheadline} hero-description`}>{subheadline}</p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <div className={`${styles.actionGroup} hero-buttons`}>
              {ctaLabel && (
                <Link href={ctaHref} className={`btn btn-primary btn-lg ${styles.heroPrimaryCta}`}>
                  {ctaLabel}
                </Link>
              )}

              {secondaryCtaLabel && (
                <Link href={secondaryCtaHref} className={`btn ${styles.heroSecondaryCta}`}>
                  <span>{secondaryCtaLabel}</span>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="4" y1="10" x2="16" y2="10" />
                    <polyline points="11,5 16,10 11,15" />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    )
  }

  // ─────────────────────────────────────────────────────────────
  // 6. HOME HERO (Default: 50% Left Text + 50% Absolute Right Image + Gold Line)
  // ─────────────────────────────────────────────────────────────
  return (
    <section ref={heroRef} className={styles.heroHome} aria-label="Hero section">
      {locationBadgeNode}

      {/* Subtle Gold Vertical Line: 1px, 120px, bg-gold between left and right panels */}
      <div className={styles.homeGoldDivider} aria-hidden="true" />

      {/* 50% Right Full-Height Image Panel (position: absolute, right: 0, top: 0, width: 50%, height: 100%) */}
      <div className={`${styles.homeMediaRight} hero-image`} aria-hidden="true">
        {imageSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt}
            className={styles.homeImage}
            loading="eager"
            fetchPriority="high"
          />
        )}
        <div className={styles.homeMediaOverlay} aria-hidden="true" />
      </div>

      {/* 50% Left Content Panel: justify-content: flex-end (align to bottom-left) */}
      <div className={`container ${styles.homeContainer}`}>
        <div className={styles.homeLeftContent}>
          {label && (
            <div className="hero-eyebrow">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}

          <h1 className={styles.headline}>
            {headline}
          </h1>

          {subheadline && (
            <p className={`${styles.subheadline} hero-description`}>{subheadline}</p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <div className={`${styles.actionGroup} hero-buttons`}>
              {ctaLabel && (
                <Link href={ctaHref} className={`btn btn-primary btn-lg ${styles.heroPrimaryCta}`}>
                  {ctaLabel}
                </Link>
              )}

              {secondaryCtaLabel && (
                <Link href={secondaryCtaHref} className={`btn ${styles.heroSecondaryCta}`}>
                  <span>{secondaryCtaLabel}</span>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="4" y1="10" x2="16" y2="10" />
                    <polyline points="11,5 16,10 11,15" />
                  </svg>
                </Link>
              )}
            </div>
          )}

          {/* Scroll indicator */}
          <div className={`${styles.scroll} hero-scroll`} aria-hidden="true">
            <div className={styles.scrollLine} />
            <span className={styles.scrollText}>Scroll</span>
          </div>
        </div>
      </div>
    </section>
  )
}
