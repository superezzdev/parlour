import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book an Appointment — Glamorous Beauty Studio, Sarai Meer',
  description:
    'Book your beauty appointment at Glamorous, Sarai Meer. Call +91 70078 75415, WhatsApp us, or fill in our booking form. Located on Sabji Mandi Rd, Sarai Meer, UP 276305.',
  alternates: {
    canonical: 'https://glamorous.in/contact',
  },
}

export default function ContactPage() {
  return (
    <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="text-display-lg">{"Let's Create Your Look"}</h1>
        <p className="lead mt-8">
          {/* Contact / booking page coming soon — foundation only */}
          This page is in development. Please check back soon.
        </p>
      </div>
    </section>
  )
}
