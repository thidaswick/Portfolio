'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      degree: 'BSc (Hons) in Information Technology',
      period: 'SEPT 2022 – PRESENT (Expected: March 2027)',
      icon: FaUniversity,
    },
    {
      institution: 'Dharmaraja College, Kandy',
      degree: 'Completed GCE O/L and A/L',
      period: 'JAN 2008 – AUG 2021',
      icon: FaGraduationCap,
    },
  ]

  return (
    <section id="education" className="section-pad bg-[color-mix(in_srgb,var(--bg-muted)_55%,transparent)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">04 — Education</p>
          <h2 className="display-title text-4xl sm:text-5xl">Learning that shapes the craft</h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="panel p-6 sm:p-8"
            >
              <edu.icon className="mb-5 text-2xl text-accent" />
              <h3 className="mb-2 font-display text-xl font-semibold text-ink">{edu.institution}</h3>
              <p className="mb-4 text-ink-soft">{edu.degree}</p>
              <div className="flex items-center gap-2 text-sm text-muted">
                <FaCalendarAlt />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
