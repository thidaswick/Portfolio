'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaUser } from 'react-icons/fa'

export default function Hero() {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState('/assets/pp1.jpg')
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/thidaswick', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thidas-wickramasinghe', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:thidaswickramasinghe8@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden py-16 sm:py-20">

      {/* Animated background elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {!shouldReduceMotion && !isMobile ? (
          <>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
            ></motion.div>
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-2xl opacity-20"></div>
          </>
        )}
      </div>

      {/* Floating code elements - reduced on mobile for performance */}
      {!isMobile && !shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          {['< />', '{ }', '[ ]'].slice(0, isMobile ? 2 : 3).map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/5 text-2xl md:text-4xl font-mono font-bold"
              initial={{
                x: `${20 + i * 15}%`,
                y: `${15 + i * 12}%`,
                opacity: 0,
              }}
              animate={{
                y: [`${15 + i * 12}%`, `${25 + i * 8}%`, `${15 + i * 12}%`],
                x: [`${20 + i * 15}%`, `${25 + i * 10}%`, `${20 + i * 15}%`],
                opacity: [0, 0.08, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 sm:pt-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
          >
            {/* Animated greeting with typewriter effect */}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <motion.span
                className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Hi there! 👋
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              I&apos;m{' '}
              <motion.span
                className="text-primary inline-block break-words relative"
                animate={shouldReduceMotion ? {} : {
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
                transition={shouldReduceMotion ? {} : {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.span
                  className="relative"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Thidas Wickramasinghe
                </motion.span>
                {/* Animated cursor effect - disabled on mobile */}
                {!shouldReduceMotion && !isMobile && (
                  <motion.span
                    className="inline-block w-0.5 h-8 md:h-12 bg-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.span>
            </motion.h1>
            <motion.div
              className="mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 inline-flex items-center gap-2 flex-wrap justify-center md:justify-start"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Software Engineering Student
                </motion.span>
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                >
                  &
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Developer
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Animated tech stack badges */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {['React', 'Node.js', 'MongoDB', 'Kotlin', 'Spring Boot'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Passionate Information Technology undergraduate focused on Software Engineering, skilled in MERN, Android, and backend technologies. Driven to deliver efficient and modern software solutions.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 1.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={shouldReduceMotion || isMobile ? {} : { 
                    scale: 1.2, 
                    y: -5,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-primary text-xl sm:text-2xl transition-colors relative group"
                  aria-label={social.label}
                >
                  <social.icon />
                  <motion.span
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary opacity-0 group-hover:opacity-100 whitespace-nowrap"
                    initial={{ y: 5, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex justify-center md:justify-start gap-4 flex-wrap"
            >
              <motion.a
                href="#projects"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/50"
              >
                <span>View My Work</span>
                {!shouldReduceMotion && !isMobile ? (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                ) : (
                  <span>→</span>
                )}
              </motion.a>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary border-2 border-primary rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/5 transition-all shadow-md"
              >
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Static background glow - reduced blur on mobile */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-2xl'} -z-10`}></div>
              
              {/* Professional image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-2 border-gray-200 bg-white">
                {!imageError ? (
                  <Image
                    src={imageSrc}
                    alt="Thidas Wickramasinghe"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
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
              
              {/* Static border ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
              
              {/* Static shadow effect - reduced on mobile */}
              <div className={`absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-full ${isMobile ? 'blur-lg' : 'blur-xl'} -z-20`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - static on mobile */}
      {shouldReduceMotion || isMobile ? (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      ) : (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
