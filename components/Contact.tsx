'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGlobe } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'thidaswickramasinghe8@gmail.com',
      link: 'mailto:thidaswickramasinghe8@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+94 77 795 8497',
      link: 'tel:+94777958497',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Mount Lavinia, Sri Lanka',
      link: '#',
    },
    {
      icon: FaGlobe,
      title: 'Website',
      value: 'thidaswick.com',
      link: 'https://thidaswick.com',
    },
  ]

  return (
    <section id="contact" className="section-pad bg-[color-mix(in_srgb,var(--bg-muted)_55%,transparent)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">06 — Contact</p>
          <h2 className="display-title text-4xl sm:text-5xl">Let&apos;s build something useful</h2>
          <p className="body-copy mt-4 text-lg">
            Open to new projects, collaborations, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="panel flex items-center gap-4 p-4 transition-colors hover:border-accent"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-deep dark:text-accent">
                  <info.icon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">{info.title}</p>
                  <p className="font-medium text-ink">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="panel space-y-5 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-soft">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-line bg-surface-page px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                placeholder="Alex Rivera"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-soft">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-line bg-surface-page px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                placeholder="alex@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-soft">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-line bg-surface-page px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                placeholder="Tell me about your project or role..."
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              <span>Send message</span>
              <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
