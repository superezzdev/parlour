'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface ScrollRevealOptions {
  delay?: number
  y?: number
  duration?: number
  ease?: string
}

export interface ImageClipRevealOptions {
  delay?: number
  duration?: number
  ease?: string
  start?: string
  clipFrom?: string
}

/**
 * Generic ScrollReveal hook for animating element opacity & y translation
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: ScrollRevealOptions) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: options?.y ?? 40 },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 0.8,
        delay: options?.delay ?? 0,
        ease: options?.ease ?? 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill()
      }
      tween.kill()
    }
  }, [options?.delay, options?.y, options?.duration, options?.ease])

  return ref
}

/**
 * PART B — Section heading reveals (scroll-triggered, apply to ALL section H2s):
 * <div className="overflow-hidden">
 *   <h2 ref={headingRef} className="section-heading">...</h2>
 * </div>
 */
export function useHeadingReveal<T extends HTMLElement = HTMLHeadingElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const tween = gsap.from(el, {
      y: '100%',
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
      },
    })

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill()
      }
      tween.kill()
    }
  }, [])

  return ref
}

/**
 * PART C — Image clip-path reveals (for hero image, gallery teaser images, about portrait, bridal hero):
 * gsap.from(imageRef.current, {
 *   clipPath: 'inset(0 100% 0 0)',
 *   duration: 1.2,
 *   ease: 'power2.inOut',
 *   scrollTrigger: {
 *     trigger: imageRef.current,
 *     start: 'top 80%',
 *   }
 * })
 */
export function useImageClipReveal<T extends HTMLElement = HTMLDivElement>(options?: ImageClipRevealOptions) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const tween = gsap.from(el, {
      clipPath: options?.clipFrom ?? 'inset(0 100% 0 0)',
      duration: options?.duration ?? 1.2,
      delay: options?.delay ?? 0,
      ease: options?.ease ?? 'power2.inOut',
      scrollTrigger: {
        trigger: el,
        start: options?.start ?? 'top 80%',
      },
    })

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill()
      }
      tween.kill()
    }
  }, [options?.delay, options?.duration, options?.ease, options?.start, options?.clipFrom])

  return ref
}
