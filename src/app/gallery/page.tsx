import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import GalleryGrid from '@/components/ui/GalleryGrid'
import AppointmentCTA from '@/components/sections/AppointmentCTA'
import { galleryImages } from '@/data/gallery'

export const metadata: Metadata = {
  title: 'Art-Directed Gallery & Bridal Portfolio — Glamorous Studio Sarai Meer',
  description:
    'Explore our curated beauty portfolio. Featuring bridal makeup artistry, editorial beauty looks, precision hairstyling, and detailed craftsmanship in Sarai Meer.',
  alternates: {
    canonical: 'https://glamorous.in/gallery',
  },
  openGraph: {
    title: 'Selected Work & Artistry Gallery | Glamorous Studio Sarai Meer',
    description:
      'An art gallery experience of bridal transformations, high-definition makeup, and couture hairstyling.',
    url: 'https://glamorous.in/gallery',
    images: [
      {
        url: '/images/gallery/bridal/bridal-01.jpg',
        width: 1200,
        height: 800,
        alt: 'Selected Work — Glamorous Makeup & Bridal Studio Sarai Meer',
      },
    ],
  },
}

export default function GalleryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://glamorous.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gallery',
        item: 'https://glamorous.in/gallery',
      },
    ],
  }

  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Glamorous Studio Artistry Portfolio',
    description: 'Exhibition of curated bridal, makeup, hair, skin, and detail artistry at Glamorous Studio.',
    image: galleryImages.map((img) => ({
      '@type': 'ImageObject',
      name: img.title || img.alt,
      description: img.description || img.alt,
      contentUrl: `https://glamorous.in${img.src}`,
      thumbnail: `https://glamorous.in${img.src}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      {/* 1. HERO — Cinematic Editorial Exhibition Hero */}
      <HeroSection
        variant="gallery"
        label="SELECTED WORK / PORTFOLIO ARCHIVE"
        headline={
          <>
            <span className="block">SELECTED</span>
            <span className="block">WORK &</span>
            <span className="block text-gold italic font-light">ARTISTRY.</span>
          </>
        }
        subheadline="An art-directed exhibition of bespoke bridal transformations, editorial makeup, couture hairstyling, and finishing craft in Sarai Meer."
        locationTag="SARAI MEER · STUDIO ARCHIVE"
        imageSrc="/images/gallery/bridal/bridal-01.jpg"
        imageAlt="Curated bridal and makeup artistry gallery at Glamorous Studio"
      />

      {/* 2. GALLERY GRID — Interactive Filter Bar & Asymmetric Masonry */}
      <div id="gallery-portfolio">
        <GalleryGrid images={galleryImages} showFilters initialCategory="all" />
      </div>

      {/* 3. UNDERSTATED APPOINTMENT CTA */}
      <AppointmentCTA
        label="CONSULTATIONS &amp; BOOKINGS"
        headline={
          <>
            CRAFT YOUR<br />
            SIGNATURE<br />
            LOOK.
          </>
        }
        body="Inspired by our portfolio? Reserve a private consultation at our Sarai Meer studio to discuss your upcoming event, bridal look, or personalized beauty treatment."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact"
      />
    </>
  )
}
