import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bridal Makeup in Sarai Meer — Glamorous Bridal Beauty Studio',
  description:
    'Bespoke bridal makeup in Sarai Meer by Glamorous Beauty. Every bride deserves to feel extraordinary. Book your bridal consultation today.',
  alternates: {
    canonical: 'https://glamorous.in/bridal',
  },
}

export default function BridalPage() {
  return (
    <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="text-display-lg">Your Bridal Look, Crafted with Love</h1>
        <p className="lead mt-8">
          {/* Bridal page coming soon — foundation only */}
          This page is in development. Please check back soon.
        </p>
      </div>
    </section>
  )
}
