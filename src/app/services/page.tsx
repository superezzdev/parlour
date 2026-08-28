import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesStandards from '@/components/sections/ServicesStandards'
import ServicesMenu from '@/components/sections/ServicesMenu'
import ServicesFAQ from '@/components/sections/ServicesFAQ'
import AppointmentCTA from '@/components/sections/AppointmentCTA'
import CompactWhatsAppStrip from '@/components/sections/CompactWhatsAppStrip'
import { serviceCategories } from '@/data/services'

export const metadata: Metadata = {
  title: 'Our Services — Bridal, Makeup, Hair & Beauty Menu',
  description:
    'Explore Glamorous services: bridal makeup, party glam, hair styling, skin care, and nail art in Sarai Meer, Uttar Pradesh. Book an appointment today.',
  alternates: {
    canonical: 'https://glamorous.in/services',
  },
  openGraph: {
    title: 'Services & Pricing | Glamorous Makeup & Bridal Studio Sarai Meer',
    description:
      'Bridal makeup, party glam, hair styling, and skin care treatments in Sarai Meer.',
    url: 'https://glamorous.in/services',
    images: [
      {
        url: '/images/services/makeup.jpg',
        width: 1200,
        height: 800,
        alt: 'Glamorous Studio — Services and Artistry Menu',
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
    description:
      'Comprehensive beauty, bridal, and makeup service catalog offered by Glamorous Studio in Sarai Meer.',
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

      {/* 1. Cinematic Services Hero — Atmospheric Editorial Header */}
      <HeroSection
        variant="services"
        label="GLAMOROUS / COMPLETE SERVICE MENU"
        headline={
          <>
            <div className="overflow-hidden">
              <span className="hero-line-1 block">BEAUTY,</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line-2 block text-gold italic font-light">YOUR WAY.</span>
            </div>
          </>
        }
        subheadline="Our complete menu of bespoke bridal makeup, party glam, hair styling, skin rituals, and nail artistry — crafted with patience and care in Sarai Meer."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact"
        secondaryCtaLabel="EXPLORE BRIDAL"
        secondaryCtaHref="/bridal"
        locationTag="SARAI MEER · STUDIO MENU"
        imageSrc="/images/services/makeup.jpg"
        imageAlt="Glamorous studio services and bridal makeup menu in Sarai Meer"
      />

      {/* 2. Studio Standards & Quality Promises */}
      <ServicesStandards />

      {/* 3. Visual, Scannable Luxury Services Catalog */}
      <ServicesMenu />

      {/* 4. Practical Services FAQ Accordion */}
      <ServicesFAQ />

      {/* 5. Grand Closing Call to Action */}
      <AppointmentCTA
        label="RESERVATIONS &amp; CONSULTATIONS"
        headline={
          <>
            FIND YOUR<br />
            PERFECT LOOK.
          </>
        }
        body="Whether you are reserving wedding dates, preparing for a family celebration, or scheduling a refreshing skin care treatment — we take our time to get your look just right."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact"
      />

      {/* 6. Compact WhatsApp Action Strip */}
      <CompactWhatsAppStrip />
    </>
  )
}
