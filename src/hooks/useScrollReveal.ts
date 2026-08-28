'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export interface ScrollRevealOptions {
  delay?: number
  y?: number
  duration?: number
  ease?: string
  start?: string
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
  const delay = options?.delay ?? 0
  const y = options?.y ?? 30
  const duration = options?.duration ?? 0.8
  const ease = options?.ease ?? 'power3.out'
  const start = options?.start ?? 'top 92%'

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
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
  }, [delay, y, duration, ease, start])

  return ref
}

/**
 * Section heading reveals (scroll-triggered, apply to ALL section H2s):
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
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const tween = gsap.fromTo(
      el,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
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
  }, [])

  return ref
}

/**
 * Image clip-path reveals (for hero image, gallery teaser images, about portrait, bridal hero):
 */
export function useImageClipReveal<T extends HTMLElement = HTMLDivElement>(options?: ImageClipRevealOptions) {
  const ref = useRef<T>(null)
  const delay = options?.delay ?? 0
  const duration = options?.duration ?? 1.1
  const ease = options?.ease ?? 'power2.inOut'
  const start = options?.start ?? 'top 92%'
  const clipFrom = options?.clipFrom ?? 'inset(0 100% 0 0)'

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.clipPath = 'none'
      return
    }

    const tween = gsap.fromTo(
      el,
      { clipPath: clipFrom },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
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
  }, [delay, duration, ease, start, clipFrom])

  return ref
}


