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
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    targets.forEach((el) => {
      // If already visible in viewport, reveal immediately
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.setAttribute('data-visible', 'true')
      } else {
        observer?.observe(el)
      }
    })
  }, 40)

  // Return cleanup function
  return () => {
    clearTimeout(timeoutId)
    observer?.disconnect()
  }
}

/** Initialize parallax scroll effect */
export function initParallax(): () => void {
  if (typeof window === 'undefined') return () => {}
  if (prefersReducedMotion()) return () => {}

  const elements = document.querySelectorAll<HTMLElement>('[data-parallax]')
  if (elements.length === 0) return () => {}

  const handleScroll = () => {
    if (prefersReducedMotion()) return
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax ?? '0.3')
      const rect = el.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed
      el.style.transform = `translateY(${offset}px)`
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}
