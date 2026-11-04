'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/thidaswick', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thidas-wickramasinghe/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:thidaswickramasinghe8@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="font-display text-lg font-semibold text-ink">
            thidas<span className="text-accent">wick</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} Thidas Wickramasinghe. All rights reserved.
          </p>
        </motion.div>

        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
