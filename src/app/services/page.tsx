import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import CategoryNav from '@/components/sections/CategoryNav'
import ServiceEditorialSection from '@/components/sections/ServiceEditorialSection'
import AppointmentCTA from '@/components/sections/AppointmentCTA'
import { serviceCategories } from '@/data/services'
import { salon } from '@/data/salon'

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

      {/* 1. Services Hero — Large Editorial Heading */}
      <HeroSection
        label="GLAMOROUS / SERVICE PORTFOLIO"
        headline={[
          'BEAUTY,',
          'YOUR WAY.',
        ]}
        subheadline="A bespoke portfolio of bridal artistry, elevated occasion glamour, and rejuvenating studio rituals crafted for your defining moments."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact"
        secondaryCtaLabel="EXPLORE DISCIPLINES"
        secondaryCtaHref="#makeup"
        locationTag="SARAI MEER · STUDIO MENU"
        imageSrc="/images/services/makeup.jpg"
        imageAlt="Glamorous curated services and luxury makeup artistry in Sarai Meer"
        fullBleed={false}
      />

      {/* 2. Tactile Category Sub-Navigation */}
      <CategoryNav />

      {/* 3. Large Alternating Editorial Service Presentation */}
      <main id="services-menu" aria-label="Services Menu">
        {serviceCategories.map((category, index) => (
          <ServiceEditorialSection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </main>

      {/* 4. Final CTA — Grand Closing Section */}
      <AppointmentCTA />
    </>
  )
}
