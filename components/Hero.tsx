'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaUser } from 'react-icons/fa'

export default function Hero() {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState('/assets/pp1.jpg')
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/thidaswick', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thidas-wickramasinghe', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:thidaswickramasinghe8@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I&apos;m{' '}
              <motion.span
                className="text-primary inline-block"
                animate={{
                  color: [
                    '#6366f1',
                    '#8b5cf6',
                    '#a855f7',
                    '#c084fc',
                    '#a855f7',
                    '#8b5cf6',
                    '#6366f1',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Thidas Wickramasinghe
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Software Engineering Student & Developer
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate Information Technology undergraduate focused on Software Engineering, skilled in MERN, Android, and backend technologies. Driven to deliver efficient and modern software solutions.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-primary text-2xl transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center md:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/50"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl -z-10"></div>
              
              {/* Professional image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-2 border-gray-200 bg-white">
                {!imageError ? (
                  <Image
                    src={imageSrc}
                    alt="Thidas Wickramasinghe"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 448px"
                    style={{
                      objectPosition: 'center top',
                      borderRadius: '50%',
                    }}
                    onError={() => {
                      // Try alternative formats if pp1.jpg fails
                      const formats = ['/assets/pp1.jpg', '/assets/pp1.jpeg', '/assets/pp1.png', '/assets/pp1.JPG']
                      const currentIndex = formats.indexOf(imageSrc)
                      if (currentIndex < formats.length - 1) {
                        setImageSrc(formats[currentIndex + 1])
                      } else {
                        setImageError(true)
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-full">
                    <FaUser className="text-6xl md:text-7xl lg:text-8xl text-gray-400" />
                  </div>
                )}
              </div>
              
              {/* Professional shadow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl -z-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
