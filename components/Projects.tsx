'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaJava } from 'react-icons/fa'
import { SiKotlin, SiSpringboot, SiPhp, SiPython, SiMongodb, SiFigma, SiJavascript } from 'react-icons/si'

export default function Projects() {
  const projects = [
    {
      title: 'Hostel Management System',
      description: 'Full-stack web application for managing hostel operations, bookings, and student records.',
      tech: ['MERN Stack'],
      techIcons: [FaCode],
      category: 'Systems & Management (Internship)',
      github: '#',
      demo: '#',
    },
    {
      title: 'Agency Management System',
      description: 'Comprehensive management system for agencies with client tracking, project management, and reporting features.',
      tech: ['MERN Stack'],
      techIcons: [FaCode],
      category: 'Systems & Management (Internship)',
      github: '#',
      demo: '#',
    },
    {
      title: 'Company System',
      description: 'Enterprise management system built with PHP and MySQL for company operations and data management.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      techIcons: [SiPhp, FaDatabase, SiJavascript],
      category: 'Systems & Management (Internship)',
      github: '#',
      demo: '#',
    },
    {
      title: 'AcadamiX',
      description: 'E-learning platform for educational institutions with course management and student tracking features.',
      tech: ['Java', 'Spring Boot'],
      techIcons: [FaJava, SiSpringboot],
      category: 'E-Learning & Education (University)',
      github: '#',
      demo: '#',
    },
    {
      title: 'Event Lanka',
      description: 'Event management mobile application for organizing and managing events in Sri Lanka.',
      tech: ['Kotlin', 'Java'],
      techIcons: [SiKotlin, FaJava],
      category: 'E-Learning & Education (University)',
      github: '#',
      demo: '#',
    },
    {
      title: 'FitPulse',
      description: 'Android fitness tracking application for workout management and health monitoring.',
      tech: ['Kotlin'],
      techIcons: [SiKotlin],
      category: 'Health & Fitness (University)',
      github: '#',
      demo: '#',
    },
    {
      title: 'CeylonHarvest',
      description: 'Agriculture management system with AI-powered disease detection for crops, built with MERN stack and Python.',
      tech: ['MERN', 'Python'],
      techIcons: [FaCode, SiPython],
      category: 'Agriculture & Smart Solutions (University)',
      github: '#',
      demo: '#',
    },
    {
      title: 'Store Management System',
      description: 'Complete store management solution with inventory tracking, sales management, and reporting capabilities.',
      tech: ['MERN Stack'],
      techIcons: [FaCode],
      category: 'Store & Business Management (University)',
      github: '#',
      demo: '#',
    },
    {
      title: 'TorontoCupcakes Website Redesign',
      description: 'Modern UI/UX redesign for TorontoCupcakes website focusing on user experience and visual appeal.',
      tech: ['Figma', 'UI/UX'],
      techIcons: [SiFigma],
      category: 'UI/UX Design (University)',
      github: '#',
      demo: '#',
    },
    {
      title: 'FitTrack Fitness App UI Design',
      description: 'Creative mobile app UI design for fitness tracking application with intuitive user interface.',
      tech: ['Figma', 'UI/UX'],
      techIcons: [SiFigma],
      category: 'UI/UX Design (University)',
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-primary transition-all duration-300 shadow-sm"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                <div className="text-gray-500 text-sm">Project Image</div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.techIcons.map((TechIcon, techIndex) => (
                    <TechIcon key={techIndex} className="text-primary text-xl" title={project.tech[techIndex]} />
                  ))}
                  {project.tech.filter((_, i) => i >= project.techIcons.length).map((tech, techIndex) => (
                    <span key={techIndex} className="text-primary text-sm font-medium">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
