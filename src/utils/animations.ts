/**
 * GLAMOROUS — Animation Utilities
 * IntersectionObserver scroll reveal + parallax init.
 * Used in Client Components via useEffect.
 */

/** Check if user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Promise-based delay */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Initialize IntersectionObserver scroll animations */
export function initScrollAnimations(): () => void {
  if (typeof window === 'undefined') return () => {}

  const targets = document.querySelectorAll<HTMLElement>(
    '[data-reveal], [data-stagger], .image-reveal-wrapper, .text-reveal-line'
  )

  // If user prefers reduced motion, reveal everything immediately
  if (prefersReducedMotion()) {
    targets.forEach((el) => el.setAttribute('data-visible', 'true'))
    return () => {}
  }

  let observer: IntersectionObserver | null = null

  // Immediately reveal anything already visible in the viewport before observer attaches
  const revealVisibleTargets = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < vh && rect.bottom > 0) {
        el.setAttribute('data-visible', 'true')
        observer?.unobserve(el)
      }
    })
  }

  const timeoutId = setTimeout(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
            // One-shot — unobserve after trigger
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.setAttribute('data-visible', 'true')
      } else {
        observer?.observe(el)
      }
    })
  }, 30)

  // Safety fallback: after 1000ms, ensure any elements in view are revealed
  // (guards against slow image downloads shifting the DOM layout on bad internet)
  const safetyTimeoutId = setTimeout(revealVisibleTargets, 1000)

  // Return cleanup function
  return () => {
    clearTimeout(timeoutId)
    clearTimeout(safetyTimeoutId)
    observer?.disconnect()
  }
}

/** Initialize parallax scroll effect (desktop fine-pointer only) */
export function initParallax(): () => void {
  if (typeof window === 'undefined') return () => {}
  if (prefersReducedMotion()) return () => {}

  // Disable on mobile/touch screens to eliminate layout thrashing and jitter
  const isTouchDevice = window.matchMedia('(pointer: coarse), (max-width: 1023px)').matches
  if (isTouchDevice) return () => {}

  const elements = document.querySelectorAll<HTMLElement>('[data-parallax]')
  if (elements.length === 0) return () => {}

  let ticking = false
  let animId: number | null = null

  const updateParallax = () => {
    const vh = window.innerHeight
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax ?? '0.3')
      const rect = el.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2 - vh / 2) * speed
      el.style.transform = `translateY(${offset.toFixed(1)}px)`
    })
    ticking = false
  }

  const handleScroll = () => {
    if (!ticking) {
      ticking = true
      animId = window.requestAnimationFrame(updateParallax)
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  return () => {
    window.removeEventListener('scroll', handleScroll)
    if (animId !== null) window.cancelAnimationFrame(animId)
  }
}
