'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      company: 'RAXWO (PVT) LTD',
      position: 'Intern Software Developer',
      location: 'Sri Lanka',
      period: 'Feb 2025 - Sept 2025',
      description: 'Worked on full-stack web applications using MERN and PHP/MySQL, focusing on developing dynamic features and optimizing performance.',
      technologies: ['MERN Stack', 'PHP', 'MySQL', 'JavaScript'],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-white"></div>

              <div className="bg-gray-50 dark:bg-slate-800 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                  <div className="mb-3 md:mb-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                    <div className="flex items-center text-primary mb-2">
                      <FaBriefcase className="mr-2" />
                      <span className="text-lg">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
