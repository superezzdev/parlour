import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import BridalStorySection from '@/components/sections/BridalStorySection'
import BridalProcessSection from '@/components/sections/BridalProcessSection'
import BridalGallerySection from '@/components/sections/BridalGallerySection'
import BridalPackagesSection from '@/components/sections/BridalPackagesSection'
import BridalFAQSection from '@/components/sections/BridalFAQSection'
import AppointmentCTA from '@/components/sections/AppointmentCTA'

export const metadata: Metadata = {
  title: 'Bridal Makeup & Styling in Sarai Meer — Glamorous Studio',
  description:
    'Bridal makeup by Sabreen in Sarai Meer. Unhurried consultations, trials, bridal hair styling, and long-lasting waterproof makeup for your wedding day.',
  alternates: {
    canonical: 'https://glamorous.in/bridal',
  },
  openGraph: {
    title: 'Bridal Makeup in Sarai Meer | Glamorous Studio',
    description:
      'Crafted with patience and care. Long-lasting bridal makeup, hair styling, and dupatta draping in Sarai Meer, UP.',
    url: 'https://glamorous.in/bridal',
    images: [
      {
        url: '/images/bridal/bridal-hero.jpg',
        width: 1200,
        height: 800,
        alt: 'Glamorous Bridal Makeup Studio in Sarai Meer',
      },
    ],
  },
}

export default function BridalPage() {
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
        name: 'Bridal Experience',
        item: 'https://glamorous.in/bridal',
      },
    ],
  }

  const bridalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bridal Makeup and Styling',
    provider: {
      '@type': 'BeautySalon',
      name: 'Glamorous Makeup & Beauty Studio',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Main Market Road',
        addressLocality: 'Sarai Meer',
        addressRegion: 'Uttar Pradesh',
        postalCode: '276305',
        addressCountry: 'IN',
      },
      telephone: '+91 88377 79719',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Sarai Meer, Azamgarh, Uttar Pradesh',
    },
    description:
      'Comprehensive bridal beauty and makeup services including consultations, trial sessions, HD waterproof makeup, bridal hair styling, dupatta setting, and multi-day packages.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bridalServiceSchema) }}
      />

      {/* 1. HERO — Large Cinematic Bridal Hero */}
      <HeroSection
        variant="bridal"
        label="THE BRIDAL EXPERIENCE"
        headline={
          <>
            <span className="block">YOUR DAY.</span>
            <span className="block">YOUR LOOK.</span>
            <span className="block text-gold italic font-light">YOUR MOMENT.</span>
          </>
        }
        subheadline="An unhurried bridal beauty experience — tailored to your vision, your skin, and the joy of your wedding day."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact?service=bridal"
        secondaryCtaLabel="EXPLORE PACKAGES"
        secondaryCtaHref="#packages"
        locationTag="SARAI MEER · BRIDAL STUDIO"
        imageSrc="/images/bridal/bridal-hero.jpg"
        imageAlt="Glamorous bridal makeup artistry in Sarai Meer"
      />

      {/* 2. STORY SECTION — The Bridal Moment & Approach */}
      <BridalStorySection />

      {/* 3. PROCESS — 01 CONSULT, 02 PREPARE, 03 CREATE, 04 REVEAL */}
      <BridalProcessSection />

      {/* 4. BRIDAL GALLERY — Large Immersive Showcase */}
      <BridalGallerySection />

      {/* 5. OPTIONAL PACKAGES — Editable Package UI */}
      <BridalPackagesSection />

      {/* 6. FAQ — Accordion for 5 Key Bridal Questions */}
      <BridalFAQSection />

      {/* 7. FINAL CTA — Emotional Closing Action */}
      <AppointmentCTA
        label="BRIDAL RESERVATIONS"
        headline={
          <>
            YOUR<br />
            BRIDAL LOOK<br />
            STARTS HERE.
          </>
        }
        body="Wedding dates fill up fast during the season. Book your bridal consultation with Sabreen in Sarai Meer today to plan your wedding look."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact?service=bridal"
      />
    </>
  )
}
