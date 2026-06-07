import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

// 🔑 بدّلي هذي بمفاتيحك
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

function Contact() {
  const { t } = useLang()
  const { ref, isVisible } = useScrollReveal()
  const formRef = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 6000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section className="contact" id="contact">
      <div ref={ref} className={`contact-inner reveal ${isVisible ? 'visible' : ''}`}>
        <span className="eyebrow">{t.contact.eyebrow}</span>
        <h2 className="contact-title"><span className="accent">{t.contact.title}</span></h2>

        <div className="contact-grid">

          <div className="contact-left">
            <div className="contact-card">
              <div className="contact-card-icon"><i className="ti ti-mail"></i></div>
              <div className="contact-card-body">
                <span className="contact-card-label">{t.contact.email}</span>
                <a href="mailto:shahad.k.a.j@gmail.com" className="contact-card-value">shahad.k.a.j@gmail.com</a>
              </div>
            </div>

            <div className="contact-follow">
              <span className="contact-follow-label">{t.contact.follow}</span>
              <div className="contact-socials">
                <a href="https://github.com/ShahadKhalidJ" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <i className="ti ti-brand-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/shahad-aljandal-a0a3b3305" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <i className="ti ti-brand-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <h3 className="contact-form-title">{t.contact.formTitle}</h3>

            <div className="form-row">
              <label htmlFor="cf-name" className="form-label">{t.contact.labelName} <span className="req">*</span></label>
              <input type="text" id="cf-name" name="from_name" className="form-input" placeholder={t.contact.placeName} required disabled={status === 'sending'} />
            </div>

            <div className="form-row">
              <label htmlFor="cf-email" className="form-label">{t.contact.labelEmail} <span className="req">*</span></label>
              <input type="email" id="cf-email" name="from_email" className="form-input" placeholder={t.contact.placeEmail} required disabled={status === 'sending'} />
            </div>

            <div className="form-row">
              <label htmlFor="cf-subject" className="form-label">{t.contact.labelSubject}</label>
              <input type="text" id="cf-subject" name="subject" className="form-input" placeholder={t.contact.placeSubject} disabled={status === 'sending'} />
            </div>

            <div className="form-row">
              <label htmlFor="cf-message" className="form-label">{t.contact.labelMessage} <span className="req">*</span></label>
              <textarea id="cf-message" name="message" className="form-input form-textarea" placeholder={t.contact.placeMessage} rows="5" required disabled={status === 'sending'}></textarea>
            </div>

            <button type="submit" className="btn-send" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>
                  <i className="ti ti-loader-2 ti-spin"></i>
                  <span>{t.contact.sending}</span>
                </>
              ) : (
                <>
                  <i className="ti ti-send"></i>
                  <span>{t.contact.send}</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-message success">
                <i className="ti ti-circle-check"></i>
                <span>{t.contact.success}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="form-message error">
                <i className="ti ti-alert-circle"></i>
                <span>{t.contact.error}</span>
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact