'use client'

import { useState, useId } from 'react'
import { useSearchParams } from 'next/navigation'
import { serviceCategories } from '@/data/services'
import { bridalPackages } from '@/data/bridal'
import { salon } from '@/data/salon'
import { useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './BookingForm.module.css'

interface FormData {
  name: string
  phone: string
  service: string
  preferredDate: string
  preferredTime: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  service?: string
  preferredDate?: string
  preferredTime?: string
}

function getInitialService(serviceParam: string | null): string {
  if (!serviceParam) return ''
  const normalized = serviceParam.toLowerCase()
  if (normalized.includes('bridal') || normalized.includes('wedding')) {
    return 'Bridal Makeup & Consultation'
  }
  if (normalized.includes('makeup') || normalized.includes('party')) {
    return 'Party & Occasion Makeup'
  }
  if (normalized.includes('hair')) {
    return 'Hair Styling & Draping'
  }
  if (normalized.includes('skin') || normalized.includes('facial')) {
    return 'Facial & Skin Care'
  }
  if (normalized.includes('nail')) {
    return 'Manicure & Nail Art'
  }
  return serviceParam
}

export default function BookingForm() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get('service')
  const formHeadingRef = useHeadingReveal<HTMLHeadingElement>()

  const nameId = useId()
  const phoneId = useId()
  const serviceId = useId()
  const dateId = useId()
  const timeId = useId()
  const messageId = useId()

  const [formData, setFormData] = useState<FormData>(() => ({
    name: '',
    phone: '',
    service: getInitialService(serviceParam),
    preferredDate: '',
    preferredTime: '',
    message: '',
  }))

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Get current date string for min date in picker
  const [minDate] = useState<string>(() => new Date().toISOString().split('T')[0])

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your full name.'
        if (value.trim().length < 2) return 'Name must be at least 2 characters.'
        return undefined
      case 'phone': {
        if (!value.trim()) return 'Please enter your contact phone number.'
        const cleaned = value.replace(/[\s\-()]/g, '')
        if (!/^(?:\+?91)?[6-9]\d{9}$/.test(cleaned)) {
          return 'Please enter a valid 10-digit mobile number.'
        }
        return undefined
      }
      case 'service':
        if (!value) return 'Please select a service or experience.'
        return undefined
      case 'preferredDate':
        if (!value) return 'Please select your preferred date.'
        return undefined
      case 'preferredTime':
        if (!value) return 'Please select your preferred time slot.'
        return undefined
      default:
        return undefined
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all required fields
    const newErrors: FormErrors = {}
    let hasError = false

    const fieldsToValidate = ['name', 'phone', 'service', 'preferredDate', 'preferredTime']
    fieldsToValidate.forEach((field) => {
      const error = validateField(field, (formData as unknown as Record<string, string>)[field])
      if (error) {
        newErrors[field as keyof FormErrors] = error
        hasError = true
      }
    })

    setTouched({
      name: true,
      phone: true,
      service: true,
      preferredDate: true,
      preferredTime: true,
    })
    setErrors(newErrors)

    if (hasError) return

    setIsSubmitting(true)

    // Simulate luxury concierge processing / optimistic state
    // In production, this can seamlessly connect to Next.js API route, email handler, or database
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format pre-filled WhatsApp link with the booking details
  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hi Glamorous! I would like to book an appointment.\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Service: ${formData.service}\n` +
      `• Date: ${formData.preferredDate}\n` +
      `• Preferred Time: ${formData.preferredTime}\n` +
      (formData.message ? `• Notes: ${formData.message}\n` : '')
    )
    return `https://wa.me/${salon.phone.replace(/[^0-9]/g, '')}?text=${text}`
  }

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    })
    setErrors({})
    setTouched({})
    setIsSubmitted(false)
  }

  return (
    <div className={styles.formContainer} id="booking-concierge">
      {!isSubmitted ? (
        <>
          <div className={styles.formHeader}>
            <div className="overflow-hidden">
              <h2 ref={formHeadingRef} className={`${styles.formTitle} section-heading`}>Reserve Your Session</h2>
            </div>
            <p className={styles.formSubtitle}>
              Fill in your details below and we will confirm your appointment shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* Row 1: Name & Phone */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor={nameId} className={styles.label}>
                  Full Name <span className={styles.requiredStar} aria-hidden="true">*</span>
                </label>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="e.g. Ayesha Siddiqui"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${nameId}-error` : undefined}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                />
                {errors.name && (
                  <span id={`${nameId}-error`} className={styles.errorMessage} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor={phoneId} className={styles.label}>
                  Phone Number <span className={styles.requiredStar} aria-hidden="true">*</span>
                </label>
                <input
                  id={phoneId}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                />
                {errors.phone && (
                  <span id={`${phoneId}-error`} className={styles.errorMessage} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Service Selection */}
            <div className={styles.fieldGroup}>
              <label htmlFor={serviceId} className={styles.label}>
                Select Service / Experience <span className={styles.requiredStar} aria-hidden="true">*</span>
              </label>
              <select
                id={serviceId}
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? `${serviceId}-error` : undefined}
                className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
              >
                <option value="">— Select a service —</option>

                <optgroup label="Bridal Services">
                  <option value="Bridal Makeup & Consultation">Bridal Makeup &amp; Consultation</option>
                  {bridalPackages.map((pkg) => (
                    <option key={pkg.id} value={`Bridal: ${pkg.name}`}>
                      Bridal Package — {pkg.name}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Occasion & Makeup">
                  {serviceCategories
                    .find((c) => c.slug === 'makeup')
                    ?.services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="Hair, Skin & Nails">
                  <option value="Hair Styling & Draping">Hair Styling &amp; Draping</option>
                  <option value="Facial & Skin Care">Facial &amp; Skin Care</option>
                  <option value="Manicure & Nail Art">Manicure &amp; Nail Art</option>
                  <option value="General Studio Consultation">General Studio Consultation</option>
                </optgroup>
              </select>
              {errors.service && (
                <span id={`${serviceId}-error`} className={styles.errorMessage} role="alert">
                  {errors.service}
                </span>
              )}
            </div>

            {/* Row 3: Date & Preferred Time */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor={dateId} className={styles.label}>
                  Preferred Date <span className={styles.requiredStar} aria-hidden="true">*</span>
                </label>
                <input
                  id={dateId}
                  name="preferredDate"
                  type="date"
                  min={minDate || undefined}
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.preferredDate}
                  aria-describedby={errors.preferredDate ? `${dateId}-error` : undefined}
                  className={`${styles.input} ${errors.preferredDate ? styles.inputError : ''}`}
                />
                {errors.preferredDate && (
                  <span id={`${dateId}-error`} className={styles.errorMessage} role="alert">
                    {errors.preferredDate}
                  </span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor={timeId} className={styles.label}>
                  Preferred Time Window <span className={styles.requiredStar} aria-hidden="true">*</span>
                </label>
                <select
                  id={timeId}
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.preferredTime}
                  aria-describedby={errors.preferredTime ? `${timeId}-error` : undefined}
                  className={`${styles.select} ${errors.preferredTime ? styles.inputError : ''}`}
                >
                  <option value="">— Select preferred time —</option>
                  <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 4:30 PM)">Afternoon (1:00 PM – 4:30 PM)</option>
                  <option value="Evening (4:30 PM – 8:00 PM)">Evening (4:30 PM – 8:00 PM)</option>
                  <option value="Early Morning / Special Event Hours">Early Morning / Special Wedding Time</option>
                </select>
                {errors.preferredTime && (
                  <span id={`${timeId}-error`} className={styles.errorMessage} role="alert">
                    {errors.preferredTime}
                  </span>
                )}
              </div>
            </div>

            {/* Row 4: Message / Notes */}
            <div className={styles.fieldGroup}>
              <label htmlFor={messageId} className={styles.label}>
                Event Details / Special Notes <span className={styles.hint}>(Optional)</span>
              </label>
              <textarea
                id={messageId}
                name="message"
                placeholder="Tell us about your event, outfit palette, skin sensitivities, or specific style references..."
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: 'var(--space-2)' }}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner} aria-hidden="true" />
                  <span>RESERVING YOUR SLOT...</span>
                </>
              ) : (
                <span>CONFIRM APPOINTMENT REQUEST</span>
              )}
            </button>

            <p className={styles.guaranteeNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span>No immediate payment required. We will confirm your timing directly.</span>
            </p>
          </form>
        </>
      ) : (
        /* Luxury Success State */
        <div className={styles.successCard} role="status" aria-live="polite">
          <div className={styles.successBadge} aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h2 className={styles.successTitle}>
            Appointment Request Received.
          </h2>

          <p className={styles.successText}>
            Thank you, <strong>{formData.name}</strong>. Our studio concierge has received your request for <strong>{formData.service}</strong> on <strong>{formData.preferredDate}</strong>.
          </p>

          <div className={styles.bookingSummaryBox}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Client:</span>
              <span className={styles.summaryValue}>{formData.name}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Phone:</span>
              <span className={styles.summaryValue}>{formData.phone}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Service:</span>
              <span className={styles.summaryValue}>{formData.service}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Date &amp; Slot:</span>
              <span className={styles.summaryValue}>{formData.preferredDate} · {formData.preferredTime}</span>
            </div>
          </div>

          <div className={styles.successActions}>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>SEND INSTANT WHATSAPP COPY</span>
            </a>

            <button type="button" onClick={handleReset} className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
              Submit Another Request
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
