import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Glamorous — Our Story & Beauty Philosophy',
  description:
    "Meet the team behind Glamorous, Sarai Meer's premium makeup and beauty studio. Discover our philosophy, our passion, and our approach to beauty artistry.",
  alternates: {
    canonical: 'https://glamorous.in/about',
  },
}

export default function AboutPage() {
  return (
    <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="text-display-lg">The Story Behind the Studio</h1>
        <p className="lead mt-8">
          {/* About page coming soon — foundation only */}
          This page is in development. Please check back soon.
        </p>
      </div>
    </section>
  )
}
