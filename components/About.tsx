'use client'

import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'

export default function About() {
  const features = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building complete web applications with MERN stack and PHP/MySQL',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Development',
      description: 'Creating Android applications with Kotlin and Java',
    },
    {
      icon: FaLaptopCode,
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces with Figma and modern design principles',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hello! I'm Thidas</h3>
            <p className="text-gray-700 text-lg mb-4">
              I'm a passionate Information Technology undergraduate focused on Software Engineering, skilled in MERN, Android, and backend technologies. A quick learner with a proactive mindset and proven experience through a completed internship.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Currently pursuing my degree at Sri Lanka Institute of Information Technology (SLIIT), I have hands-on experience in full-stack web development, mobile app development, and working with modern technologies like React, Node.js, MongoDB, Kotlin, and Spring Boot.
            </p>
            <p className="text-gray-700 text-lg">
              I'm driven to deliver efficient and modern software solutions. Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors shadow-sm"
              >
                <feature.icon className="text-primary text-3xl mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
