import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AboutPhilosophy from '@/components/sections/AboutPhilosophy'
import AboutArtistry from '@/components/sections/AboutArtistry'
import AboutExperience from '@/components/sections/AboutExperience'
import AboutStudio from '@/components/sections/AboutStudio'
import AboutSocial from '@/components/sections/AboutSocial'
import CompactWhatsAppStrip from '@/components/sections/CompactWhatsAppStrip'

export const metadata: Metadata = {
  title: 'Our Story & Philosophy — Glamorous Studio Sarai Meer',
  description:
    'Discover the philosophy, artistry, and story of Glamorous in Sarai Meer. Bridal makeup, skin preparation, and beauty care led by Sabreen Siddiqui.',
  alternates: {
    canonical: 'https://glamorous.in/about',
  },
  openGraph: {
    title: 'Our Story & Philosophy | Glamorous Studio Sarai Meer',
    description:
      'Step inside our boutique studio in Sarai Meer dedicated to mindful bridal artistry and attentive personal care.',
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
        jobTitle: 'Lead Bridal Makeup Artist & Founder',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Main Market Road',
        addressLocality: 'Sarai Meer',
        addressRegion: 'Uttar Pradesh',
        postalCode: '276305',
        addressCountry: 'IN',
      },
      telephone: '+91 88377 79719',
      sameAs: [
        'https://superezz.dev',
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

      {/* 1. HERO — Quiet Editorial Portrait Split */}
      <HeroSection
        variant="about"
        label="ABOUT SABREEN & GLAMOROUS"
        headline={
          <>
            <span className="block font-light">SABREEN</span>
            <span className="block text-gold italic font-light">SIDDIQUI.</span>
          </>
        }
        subheadline="A boutique studio in Sarai Meer dedicated to quality makeup, attentive service, and making every client feel truly special."
        locationTag="SARAI MEER · OUR STUDIO"
        imageSrc="/images/about/about-studio.jpg"
        imageAlt="Glamorous beauty studio in Sarai Meer"
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

      {/* 7. Compact WhatsApp Action Strip */}
      <CompactWhatsAppStrip />
    </>
  )
}
