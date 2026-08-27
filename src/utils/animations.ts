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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // One-shot — unobserve after trigger
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  )

  const targets = document.querySelectorAll<HTMLElement>(
    '[data-reveal], [data-stagger], .image-reveal-wrapper'
  )
  targets.forEach((el) => observer.observe(el))

  // Return cleanup function
  return () => observer.disconnect()
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
