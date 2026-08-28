import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import BrandIntro from '@/components/sections/BrandIntro'
import StatsSection from '@/components/sections/StatsSection'
import ServiceGrid from '@/components/sections/ServiceGrid'
import EditorialMoment from '@/components/sections/EditorialMoment'
import BridalTeaser from '@/components/sections/BridalTeaser'
import SelectedWork from '@/components/sections/SelectedWork'
import TrustSection from '@/components/sections/TrustSection'
import LocationBlock from '@/components/sections/LocationBlock'
import AppointmentCTA from '@/components/sections/AppointmentCTA'

export const metadata: Metadata = {
  title: 'Glamorous — Luxury Makeup & Bridal Beauty Studio | Sarai Meer, UP',
  description:
    'Boutique luxury beauty studio in Sarai Meer, Uttar Pradesh. Specialising in bespoke bridal makeup, high-definition party glam, and skin-first artistry. Book your appointment today.',
  alternates: {
    canonical: 'https://glamorous.in/',
  },
  openGraph: {
    title: 'Glamorous — Luxury Makeup & Bridal Beauty Studio | Sarai Meer',
    description:
      'Boutique beauty sanctuary in Sarai Meer. Specialising in bespoke bridal makeup, luminous party looks, and skin-first artistry.',
    url: 'https://glamorous.in/',
    images: [
      {
        url: '/images/hero/hero-editorial.jpg',
        width: 1200,
        height: 800,
        alt: 'Glamorous Makeup & Beauty Studio — Sarai Meer',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Opening Sequence Hero */}
      <HeroSection
        variant="home"
        label="GLAMOROUS / MAKEUP & BEAUTY"
        headline={
          <>
            <div className="overflow-hidden">
              <span className="hero-line-1 block">BEAUTY,</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line-2 block">MADE</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line-3 block text-gold italic font-light">PERSONAL.</span>
            </div>
          </>
        }
        subheadline="Artistry tailored to your individuality — celebrating your natural radiance with patience, precision, and quiet luxury in Sarai Meer."
        ctaLabel="BOOK AN APPOINTMENT"
        ctaHref="/contact"
        secondaryCtaLabel="EXPLORE BRIDAL"
        secondaryCtaHref="/bridal"
        locationTag="SARAI MEER · UTTAR PRADESH"
        imageSrc="/images/hero/hero-editorial.jpg"
        imageAlt="Glamorous beauty studio — editorial bridal and luxury makeup artistry in Sarai Meer"
      />

      {/* 2. Brand Introduction — Split Editorial Layout */}
      <BrandIntro />

      {/* 3. By The Numbers — Monumental Stats Section */}
      <StatsSection />

      {/* 4. Signature Services — 6 Major Categories Editorial Presentation */}
      <ServiceGrid />

      {/* 4. Editorial Image Moment — Full-Width Visual Reset */}
      <EditorialMoment
        imageSrc="/images/hero/editorial-moment.jpg"
        imageAlt="Editorial beauty moment — Glamorous studio artistry"
        tag="THE ART OF REFINEMENT"
        headline="Every look composed with patient precision and quiet intention."
      />

      {/* 5. Bridal — Commercial Showcase Centerpiece */}
      <BridalTeaser />

      {/* 6. Selected Work — Asymmetrical Editorial Gallery Preview */}
      <SelectedWork />

      {/* 7. Trust — Editorial Client Praise & Instagram Artistry Showcase */}
      <TrustSection />

      {/* 8. Visit — Studio Details, Map Visual & Get Directions */}
      <LocationBlock />

      {/* 9. Final CTA — Grand Closing Section */}
      <AppointmentCTA />
    </>
  )
}
