import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import BrandIntro from '@/components/sections/BrandIntro'
import ServiceGrid from '@/components/sections/ServiceGrid'
import BridalTeaser from '@/components/sections/BridalTeaser'
import LocationBlock from '@/components/sections/LocationBlock'
import AppointmentCTA from '@/components/sections/AppointmentCTA'

export const metadata: Metadata = {
  title: 'Glamorous — Makeup & Beauty Studio | Sarai Meer, Uttar Pradesh',
  description:
    'Premium makeup and beauty studio in Sarai Meer. Specialising in bridal makeup, party looks, and beauty transformations. Book an appointment today — +91 70078 75415.',
  alternates: {
    canonical: 'https://glamorous.in/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Brand Statement */}
      <HeroSection
        label="Makeup & Beauty Studio"
        headline={[
          'Beauty Crafted',          // Line 1
          'for Your Most',           // Line 2
          'Memorable Moments',       // Line 3
        ]}
        subheadline="At Glamorous, we believe every face tells a story worth telling beautifully."
        ctaLabel="Book an Appointment"
        ctaHref="/contact"
        imageSrc={null} // [PLACEHOLDER H03]
        imageAlt="Glamorous beauty studio — bridal makeup artistry in Sarai Meer"
        fullBleed
      />

      {/* 2. Brand Introduction */}
      <BrandIntro />

      {/* 3. Signature Services */}
      <ServiceGrid />

      {/* 4. Bridal Teaser */}
      <BridalTeaser />

      {/* 5. Location */}
      <LocationBlock />

      {/* 6. Final CTA */}
      <AppointmentCTA />
    </>
  )
}
