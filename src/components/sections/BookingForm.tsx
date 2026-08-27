'use client'

import { useState, useEffect, useId } from 'react'
import { useSearchParams } from 'next/navigation'
import { serviceCategories } from '@/data/services'
import { bridalPackages } from '@/data/bridal'
import { salon } from '@/data/salon'
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

export default function BookingForm() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get('service') || ''

  const nameId = useId()
  const phoneId = useId()
  const serviceId = useId()
  const dateId = useId()
  const timeId = useId()
  const messageId = useId()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Pre-select service from URL parameter if present
  useEffect(() => {
    if (!serviceParam) return

    const normalizedParam = serviceParam.toLowerCase()
    if (normalizedParam.includes('bridal') || normalizedParam.includes('wedding')) {
      setFormData((prev) => ({ ...prev, service: 'Bridal Artistry & Consultation' }))
    } else if (normalizedParam.includes('makeup') || normalizedParam.includes('party')) {
      setFormData((prev) => ({ ...prev, service: 'Party & Occasion Makeup' }))
    } else if (normalizedParam.includes('hair')) {
      setFormData((prev) => ({ ...prev, service: 'Couture Hair Styling' }))
    } else if (normalizedParam.includes('skin') || normalizedParam.includes('facial')) {
      setFormData((prev) => ({ ...prev, service: 'Skin & Facial Therapy' }))
    } else if (normalizedParam.includes('nail')) {
      setFormData((prev) => ({ ...prev, service: 'Nail Architecture & Art' }))
    }
  }, [serviceParam])

  const [minDate, setMinDate] = useState<string>('')

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0])
  }, [])

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
    return `https://wa.me/917007875415?text=${text}`
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
            <h2 className={styles.formTitle}>Reserve Your Session</h2>
            <p className={styles.formSubtitle}>
              Fill in your details below and our studio concierge will confirm your slot within a few hours.
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
                <option value="">— Select an artistry service —</option>

                <optgroup label="Bridal Experiences">
                  <option value="Bridal Artistry & Consultation">Bespoke Bridal Artistry &amp; Consultation</option>
                  {bridalPackages.map((pkg) => (
                    <option key={pkg.id} value={`Bridal: ${pkg.name}`}>
                      Bridal Package — {pkg.name}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Occasion & Makeup Artistry">
                  {serviceCategories
                    .find((c) => c.slug === 'makeup')
                    ?.services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="Hair, Skin & Beauty">
                  <option value="Couture Hair Styling & Draping">Couture Hair Styling &amp; Draping</option>
                  <option value="Radiant Facial & Skin Therapy">Radiant Facial &amp; Skin Therapy</option>
                  <option value="Nail Architecture & Art">Nail Architecture &amp; Art</option>
                  <option value="Complete Beauty Consultation">General Studio Consultation</option>
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
              className={`btn btn-primary btn-lg ${styles.submitBtn}`}
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
              className={`btn btn-lg ${styles.whatsappInstantBtn}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.764.78 2.796.78h.005c3.18 0 5.767-2.587 5.767-5.766.001-3.181-2.585-5.766-5.772-5.766zm9.969 5.766c0 5.485-4.46 9.945-9.969 9.945-1.748 0-3.376-.452-4.793-1.242l-5.238 1.359 1.385-5.105c-.896-1.488-1.423-3.23-1.423-4.957 0-5.485 4.46-9.945 9.969-9.945 5.51 0 10.069 4.46 10.069 9.945z" />
              </svg>
              <span>SEND INSTANT WHATSAPP COPY</span>
            </a>

            <button type="button" onClick={handleReset} className={styles.resetBtn}>
              Submit Another Request
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
