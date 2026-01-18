'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      degree: 'Faculty of Computing, Information Technology',
      period: '2022 - PRESENT',
      icon: FaUniversity,
    },
    {
      institution: 'Dharmaraja College Kandy',
      degree: 'Completed G.C.E(O/L) 2018, Completed G.C.E(A/L) 2022',
      period: '2008 - 2022',
      icon: FaGraduationCap,
    },
  ]

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-primary transition-all duration-300 shadow-sm"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-primary text-2xl sm:text-3xl lg:text-2xl flex-shrink-0">
                  <edu.icon />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{edu.institution}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3">{edu.degree}</p>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
