import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beauty Gallery — Bridal, Makeup & Hair Looks',
  description:
    "Browse Glamorous's portfolio of bridal, makeup, and hair looks. Each look is a work of artistry, crafted in our Sarai Meer beauty studio.",
  alternates: {
    canonical: 'https://glamorous.in/gallery',
  },
}

export default function GalleryPage() {
  return (
    <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="text-display-lg">A Portfolio of Artistry</h1>
        <p className="lead mt-8">
          {/* Gallery page coming soon — foundation only */}
          This page is in development. Please check back soon.
        </p>
      </div>
    </section>
  )
}
