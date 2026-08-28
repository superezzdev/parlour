import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import BrandIntro from '@/components/sections/BrandIntro'
import StatsSection from '@/components/sections/StatsSection'
import ServiceGrid from '@/components/sections/ServiceGrid'
import EditorialMoment from '@/components/sections/EditorialMoment'
import BridalTeaser from '@/components/sections/BridalTeaser'
import SelectedWork from '@/components/sections/SelectedWork'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import LocationBlock from '@/components/sections/LocationBlock'
import AppointmentCTA from '@/components/sections/AppointmentCTA'

export const metadata: Metadata = {
  title: 'Glamorous — Luxury Makeup & Bridal Beauty Studio | Sarai Meer, UP',
  description:
    'Boutique makeup and beauty studio in Sarai Meer, UP. Specializing in bridal makeup, party glam, hair styling, and skin care by Sabreen. Book your appointment today.',
  alternates: {
    canonical: 'https://glamorous.in/',
  },
  openGraph: {
    title: 'Glamorous — Makeup & Bridal Beauty Studio | Sarai Meer',
    description:
      'Boutique beauty studio in Sarai Meer. Specializing in bridal makeup, party glam, hair styling, and skin care by Sabreen.',
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
        subheadline="Bridal and occasion makeup by Sabreen — crafted with patience, precision, and care. Based in Sarai Meer, trusted across Eastern UP."
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

      {/* 7. Client Appreciation — Editorial Testimonial Carousel */}
      <TestimonialsSection />

      {/* 8. Visit — Studio Details, Map Visual & Get Directions */}
      <LocationBlock />

      {/* 9. Final CTA — Grand Closing Section */}
      <AppointmentCTA />
    </>
  )
}
