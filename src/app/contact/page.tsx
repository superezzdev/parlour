import { Suspense } from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ContactDetailsSection from '@/components/sections/ContactDetailsSection'

export const metadata: Metadata = {
  title: 'Book an Appointment & Visit — Glamorous Studio Sarai Meer',
  description:
    'Book your bridal consultation, occasion makeup session, or beauty treatment at Glamorous Studio in Sarai Meer. Call +91 88377 79719 or book online.',
  alternates: {
    canonical: 'https://glamorous.in/contact',
  },
  openGraph: {
    title: 'Book an Appointment | Glamorous Studio Sarai Meer',
    description:
      'Book your bridal consultation or beauty appointment at Glamorous Studio in Sarai Meer.',
    url: 'https://glamorous.in/contact',
    images: [
      {
        url: '/images/hero/hero-editorial.jpg',
        width: 1200,
        height: 800,
        alt: 'Book an Appointment at Glamorous Beauty Studio Sarai Meer',
      },
    ],
  },
}

export default function ContactPage() {
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
        name: 'Contact & Book',
        item: 'https://glamorous.in/contact',
      },
    ],
  }

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Book an Appointment — Glamorous Beauty Studio',
    description: 'Book bridal makeup, occasion styling, and beauty services at Glamorous in Sarai Meer, UP.',
    mainEntity: {
      '@type': 'BeautySalon',
      name: 'Glamorous (makeup & beauty)',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Main Market Road',
        addressLocality: 'Sarai Meer',
        addressRegion: 'Uttar Pradesh',
        postalCode: '276305',
        addressCountry: 'IN',
      },
      telephone: '+91 88377 79719',
      url: 'https://glamorous.in/contact',
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://glamorous.in/contact',
          inLanguage: 'en-IN',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Beauty & Bridal Appointment',
        },
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* 1. HERO — Clean High-Impact Editorial Entrance */}
      <HeroSection
        variant="contact"
        label="APPOINTMENTS & BOOKINGS"
        headline={
          <>
            <span className="block">BOOK YOUR</span>
            <span className="block font-light">
              <span className="gold-underline-animated text-gold italic">APPOINTMENT.</span>
            </span>
          </>
        }
        subheadline="Book your bridal consultation, occasion makeup session, or personalized beauty treatment at our Sarai Meer studio."
        locationTag="SARAI MEER · APPOINTMENTS"
        imageSrc={null}
      />

      {/* 2. CONTACT DETAILS & LUXURY BOOKING FORM */}
      <Suspense fallback={<div style={{ minHeight: '600px', backgroundColor: 'var(--color-ivory)' }} />}>
        <ContactDetailsSection />
      </Suspense>
    </>
  )
}
