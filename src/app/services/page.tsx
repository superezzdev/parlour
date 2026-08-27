import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services — Makeup, Bridal, Hair & Beauty',
  description:
    "Explore Glamorous's curated services: bridal makeup, party looks, hair styling, and beauty treatments in Sarai Meer, Uttar Pradesh. Book online or call +91 70078 75415.",
  alternates: {
    canonical: 'https://glamorous.in/services',
  },
}

export default function ServicesPage() {
  return (
    <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="text-display-lg">Curated Services for Every Beautiful Occasion</h1>
        <p className="lead mt-8">
          {/* [PLACEHOLDER S01] Services page coming soon — foundation only */}
          This page is in development. Please check back soon.
        </p>
      </div>
    </section>
  )
}
