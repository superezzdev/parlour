import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import GalleryGrid from '@/components/ui/GalleryGrid'
import CompactWhatsAppStrip from '@/components/sections/CompactWhatsAppStrip'
import { galleryImages } from '@/data/gallery'

export const metadata: Metadata = {
  title: 'Portfolio & Client Gallery — Glamorous Studio Sarai Meer',
  description:
    'Explore our portfolio of bridal makeup, party glam, hair styling, and beauty transformations in Sarai Meer.',
  alternates: {
    canonical: 'https://glamorous.in/gallery',
  },
  openGraph: {
    title: 'Client Gallery & Portfolio | Glamorous Studio Sarai Meer',
    description:
      'Real client photos: bridal transformations, party makeup, and hair styling in Sarai Meer.',
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
        label="SELECTED WORK / CLIENT GALLERY"
        headline={
          <>
            <span className="block">SELECTED</span>
            <span className="block">WORK &</span>
            <span className="block text-gold italic font-light">LOOKS.</span>
          </>
        }
        subheadline="A collection of our bridal transformations, party makeup, hair styling, and client looks crafted in Sarai Meer."
        locationTag="SARAI MEER · STUDIO GALLERY"
        imageSrc="/images/gallery/bridal/bridal-01.jpg"
        imageAlt="Bridal and makeup artistry gallery at Glamorous Studio"
      />

      {/* 2. GALLERY GRID — Interactive Filter Bar & Asymmetric Masonry */}
      <div id="gallery-portfolio">
        <GalleryGrid images={galleryImages} showFilters initialCategory="all" />
      </div>

      {/* 3. Compact WhatsApp Action Strip */}
      <CompactWhatsAppStrip />
    </>
  )
}
