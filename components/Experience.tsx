'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      company: 'Qube Design Labs',
      position: 'Contract Software Engineer',
      location: 'Sri Lanka',
      period: 'DEC 2025 – MAY 2026',
      description:
        'Developed and delivered modules for a production ERP solution serving real business workflows using the MERN stack.',
      highlights: [
        'Implemented UI components and RESTful API endpoints across 3+ ERP modules including inventory and reporting.',
        'Collaborated in an Agile team — requirement analysis, sprint reviews, UI implementation, backend integration, testing, and bug fixing.',
      ],
      technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Agile'],
    },
    {
      company: 'RAXWO Technologies',
      position: 'Intern Software Engineer',
      location: 'Sri Lanka',
      period: 'MAR 2025 – SEP 2025',
      description:
        'Built full-stack web features across 3 concurrent projects, focusing on dynamic UI, RESTful APIs, and MySQL schema design.',
      highlights: [
        'Built a Hostel Management System for 200+ students with bookings, room allocation, and records using MERN and JWT authentication.',
        'Contributed to an Agency ERP with client tracking, project management, invoicing, and reporting across 10+ client accounts.',
        'Supported an enterprise management platform with PHP, JavaScript, and MySQL — improving data handling and query performance.',
      ],
      technologies: ['MERN Stack', 'PHP', 'MySQL', 'JavaScript', 'JWT', 'REST APIs'],
    },
  ]

  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">03 — Experience</p>
          <h2 className="display-title text-4xl sm:text-5xl">Where I&apos;ve been building</h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="panel overflow-hidden"
            >
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[220px_1fr]">
                <div className="space-y-3 border-b border-line pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                  <p className="font-display text-xl font-semibold text-ink">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <FaCalendarAlt className="text-accent" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <FaMapMarkerAlt className="text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-2xl font-semibold text-ink">{exp.position}</h3>
                  <p className="body-copy mb-4">{exp.description}</p>
                  <ul className="mb-5 space-y-2">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-accent-soft/40 px-3 py-1 text-xs font-medium text-accent-deep dark:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
