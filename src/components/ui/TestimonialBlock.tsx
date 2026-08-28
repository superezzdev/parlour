'use client'

import type { Testimonial } from '@/data/testimonials'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface TestimonialBlockProps {
  testimonials: Testimonial[]
  className?: string
}

function TestimonialItem({ item, delay }: { item: Testimonial; delay: number }) {
  const cardRef = useScrollReveal<HTMLQuoteElement>({ delay, y: 35 })

  return (
    <blockquote
      ref={cardRef}
      className="testimonial-card"
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-lg)',
          fontStyle: 'italic',
          color: 'var(--color-espresso)',
          lineHeight: 1.5,
          marginBottom: 'var(--space-6)',
        }}
      >
        &ldquo;{item.text}&rdquo;
      </p>

      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--color-petal)',
            color: 'var(--color-espresso)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-label)',
            fontSize: 'var(--text-xs)',
            fontWeight: 500,
          }}
        >
          {item.authorInitials}
        </div>
        <div>
          <cite
            style={{
              fontStyle: 'normal',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: 'var(--text-sm)',
              color: 'var(--color-espresso)',
            }}
          >
            {item.authorName}
          </cite>
          <p className="caption" style={{ margin: 0, fontSize: 'var(--text-xs)' }}>
            Verified via {item.platform}
          </p>
        </div>
      </footer>
    </blockquote>
  )
}

export default function TestimonialBlock({
  testimonials,
  className = '',
}: TestimonialBlockProps) {
  const headingRef = useScrollReveal<HTMLHeadingElement>({ y: 60, duration: 1.0 })

  // Gracefully render nothing if no verified reviews exist yet
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className={`testimonial-section section ${className}`} aria-label="Client testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <p className="label" style={{ justifyContent: 'center' }}>Words From Our Clients</p>
          <div ref={headingRef}>
            <h2 className="text-display-md" style={{ marginTop: 'var(--space-4)' }}>
              Real stories, <em>shared with love</em>
            </h2>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-8)',
          }}
        >
          {testimonials.map((item, idx) => (
            <TestimonialItem
              key={item.id}
              item={item}
              delay={idx * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
