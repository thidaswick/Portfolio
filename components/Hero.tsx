'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from 'react-icons/fa'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/thidaswick', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thidas-wickramasinghe/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:thidaswickramasinghe8@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy column */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:pb-24 lg:pr-10 lg:pt-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-5"
          >
            Software Engineer · Full-Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="display-title mb-6 max-w-xl text-5xl sm:text-6xl lg:text-7xl"
          >
            Thidas
            <span className="block text-accent">Wickramasinghe</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="body-copy mb-8 max-w-lg text-base sm:text-lg"
          >
            Building production ERP and web systems with React, Node.js, and TypeScript —
            from internships to contract engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View my work
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-all hover:border-accent hover:text-accent"
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Full-bleed portrait plane */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[52vh] lg:min-h-screen"
        >
          <div className="absolute inset-0 overflow-hidden lg:rounded-bl-[3.5rem]">
            {!imageError ? (
              <Image
                src="/assets/clean.png"
                alt="Thidas Wickramasinghe"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_18%]"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-surface-muted">
                <FaUser className="text-7xl text-muted" />
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[color-mix(in_srgb,var(--bg)_55%,transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
