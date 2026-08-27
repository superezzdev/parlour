import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AboutPhilosophy from '@/components/sections/AboutPhilosophy'
import AboutArtistry from '@/components/sections/AboutArtistry'
import AboutExperience from '@/components/sections/AboutExperience'
import AboutStudio from '@/components/sections/AboutStudio'
import AboutSocial from '@/components/sections/AboutSocial'
import AppointmentCTA from '@/components/sections/AppointmentCTA'

export const metadata: Metadata = {
  title: 'Our Story & Beauty Philosophy — Glamorous Studio Sarai Meer',
  description:
    'Discover the philosophy, artistry, and sanctuary of Glamorous in Sarai Meer. Mindful bridal artistry, high-definition skin preparation, and serene personal care led by Sabreen Siddiqui.',
  alternates: {
    canonical: 'https://glamorous.in/about',
  },
  openGraph: {
    title: 'Our Story & Beauty Philosophy | Glamorous Studio Sarai Meer',
    description:
      'Beauty is an experience. Step inside our intimate sanctuary in Sarai Meer dedicated to mindful bridal artistry and unhurried personal care.',
    url: 'https://glamorous.in/about',
    images: [
      {
        url: '/images/about/about-studio.jpg',
        width: 1200,
        height: 800,
        alt: 'Glamorous Makeup & Beauty Studio Sanctuary in Sarai Meer',
      },
    ],
  },
}

export default function AboutPage() {
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
        name: 'About',
        item: 'https://glamorous.in/about',
      },
    ],
  }

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Glamorous Beauty Studio',
    description:
      'The philosophy, artistry, experience, and studio story of Glamorous in Sarai Meer, UP.',
    mainEntity: {
      '@type': 'BeautySalon',
      name: 'Glamorous (makeup & beauty)',
      founder: {
        '@type': 'Person',
        name: 'Sabreen Siddiqui',
        jobTitle: 'Lead Bridal Makeup Artist & Creative Director',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1st Floor, Mumtaz Bangle Store, Sabji Mandi Rd',
        addressLocality: 'Sarai Meer',
        addressRegion: 'Uttar Pradesh',
        postalCode: '276305',
        addressCountry: 'IN',
      },
      telephone: '+91 70078 75415',
      sameAs: [
        'https://www.instagram.com/glamorouse_makeup_beauty',
        'https://www.instagram.com/makeup_by_sabreen_786',
      ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* 1. HERO — Quiet Editorial Introduction */}
      <HeroSection
        label="THE ATELIER & SANCTUARY"
        headline={[
          'BEAUTY',
          'IS AN',
          'EXPERIENCE.',
        ]}
        subheadline="An intimate sanctuary in Sarai Meer dedicated to mindful artistry, personal elegance, and the timeless rituals of beauty."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact"
        secondaryCtaLabel="EXPLORE OUR SERVICES"
        secondaryCtaHref="/services"
        locationTag="SARAI MEER · THE SANCTUARY"
        imageSrc="/images/about/about-studio.jpg"
        imageAlt="Glamorous beauty studio sanctuary in Sarai Meer"
        fullBleed={false}
      />

      {/* 2. THE PHILOSOPHY */}
      <AboutPhilosophy />

      {/* 3. THE ARTISTRY */}
      <AboutArtistry />

      {/* 4. THE EXPERIENCE */}
      <AboutExperience />

      {/* 5. THE STUDIO */}
      <AboutStudio />

      {/* 6. SOCIAL & JOURNEY */}
      <AboutSocial />

      {/* 7. APPOINTMENT CTA */}
      <AppointmentCTA
        label="EXPERIENCE GLAMOROUS"
        headline={
          <>
            BEGIN YOUR<br />
            BEAUTY<br />
            JOURNEY.
          </>
        }
        body="Whether planning for your bridal celebration or treating yourself to personalized skincare and makeup, we invite you to reserve your session at our Sarai Meer studio."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact"
      />
    </>
  )
}
