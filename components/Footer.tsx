'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/thidaswick', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thidas-wickramasinghe', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:thidaswickramasinghe8@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 text-sm sm:text-base text-center md:text-left"
          >
            © {new Date().getFullYear()} Thidas. All rights reserved.
          </motion.p>
          <div className="flex space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
