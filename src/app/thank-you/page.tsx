import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Appointment Confirmed — Thank You',
  description: 'Your appointment request has been received. We will be in touch soon.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <section style={{ paddingTop: 'calc(72px + 6rem)', paddingBottom: '6rem', textAlign: 'center' }}>
      <div className="container container--narrow">
        <p className="label" style={{ justifyContent: 'center' }}>Confirmed</p>
        <h1 className="text-display-lg mt-8">
          Thank you.<br />
          <em>{"We'll be in touch."}</em>
        </h1>
        <p className="lead mt-8" style={{ marginInline: 'auto', textAlign: 'center' }}>
          Your appointment request has been received. We will contact you shortly to confirm the details.
        </p>
        <Link href="/" className="btn btn-primary btn-lg" style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
          Return Home
        </Link>
      </div>
    </section>
  )
}
