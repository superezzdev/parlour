import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesMenu from '@/components/sections/ServicesMenu'
import ServicesBookingCTA from '@/components/sections/ServicesBookingCTA'
import { serviceCategories } from '@/data/services'

export const metadata: Metadata = {
  title: 'Our Services — Bridal, Makeup, Hair & Beauty Menu',
  description:
    'Explore Glamorous curated services: bespoke bridal makeup, high-definition party glam, hair styling, restorative skin rituals, and nail artistry in Sarai Meer, Uttar Pradesh. Book an appointment today.',
  alternates: {
    canonical: 'https://glamorous.in/services',
  },
  openGraph: {
    title: 'Curated Beauty Services | Glamorous Makeup & Bridal Studio Sarai Meer',
    description:
      'Bespoke bridal artistry, luminous party glamour, precision hair styling, and restorative skin rituals in Sarai Meer.',
    url: 'https://glamorous.in/services',
    images: [
      {
        url: '/images/services/makeup.jpg',
        width: 1200,
        height: 800,
        alt: 'Glamorous Studio — Curated Services and Artistry Menu',
      },
    ],
  },
}

export default function ServicesPage() {
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
        name: 'Services',
        item: 'https://glamorous.in/services',
      },
    ],
  }

  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Glamorous Studio Services',
    description: 'Comprehensive beauty, bridal, and makeup service catalog offered by Glamorous Studio in Sarai Meer.',
    itemListElement: serviceCategories.map((cat, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: cat.name,
      description: cat.description,
      url: `https://glamorous.in/services#${cat.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />

      {/* 1. Services Hero — Centered Editorial Heading */}
      <HeroSection
        variant="services"
        label="GLAMOROUS / SERVICE PORTFOLIO"
        headline={
          <>
            <span className="block">BEAUTY,</span>
            <span className="block text-gold italic">YOUR WAY.</span>
          </>
        }
        subheadline="A bespoke portfolio of bridal artistry, elevated occasion glamour, and rejuvenating studio rituals crafted for your defining moments."
        locationTag="SARAI MEER · STUDIO MENU"
        imageSrc={null}
      />

      {/* 2. Visual, Scannable Luxury Table Services Menu */}
      <ServicesMenu />

      {/* 3. Final Unified Booking CTA */}
      <ServicesBookingCTA />
    </>
  )
}
