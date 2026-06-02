import { useState } from 'react'
import { motion } from 'framer-motion'
import './ContactForm.css'

const RECIPIENTS = 'eb@silverlinestudios.net,william@silverlinestudios.net'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  })
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Silver Line Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`,
    )
    window.location.href = `mailto:${RECIPIENTS}?subject=${subject}&body=${body}`
  }

  const fields = [
    { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
    { name: 'business', label: 'Business name', type: 'text', required: false, autoComplete: 'organization' },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ]

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {fields.map((field) => (
        <div key={field.name} className="contact-form__field">
          <label htmlFor={field.name} className="contact-form__label">
            {field.label}
          </label>
          <motion.div
            className={`contact-form__input-wrap ${focused === field.name ? 'contact-form__input-wrap--focused' : ''}`}
            animate={{ scale: focused === field.name ? 1.01 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                onFocus={() => setFocused(field.name)}
                onBlur={() => setFocused(null)}
                required={field.required}
                rows={5}
                className="contact-form__input contact-form__textarea"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={handleChange}
                onFocus={() => setFocused(field.name)}
                onBlur={() => setFocused(null)}
                required={field.required}
                autoComplete={field.autoComplete}
                className="contact-form__input"
              />
            )}
          </motion.div>
        </div>
      ))}
      <button type="submit" className="btn-pill contact-form__submit">
        Send message
      </button>
      <p className="contact-form__note">
        Or email us directly at{' '}
        <a href="mailto:eb@silverlinestudios.net">eb@silverlinestudios.net</a>
        {' '}and{' '}
        <a href="mailto:william@silverlinestudios.net">william@silverlinestudios.net</a>
      </p>
    </form>
  )
}
