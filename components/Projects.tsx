'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaCode, FaDatabase, FaJava } from 'react-icons/fa'
import { SiSpringboot, SiPhp, SiPython, SiJavascript } from 'react-icons/si'

export default function Projects() {
  const projects = [
    {
      title: 'WorqHub',
      description:
        'Multi-tenant MERN SaaS ERP platform for SMEs — work orders, inventory, customers, invoicing, and reports with tenant data isolation, RBAC, and RESTful APIs. Built during my contract role at Qube Design Labs.',
      tech: ['MERN Stack', 'MongoDB', 'JWT', 'RBAC'],
      techIcons: [FaCode],
      category: 'Contract · Qube Design Labs',
      github: 'https://github.com/thidaswick/WorqHub.git',
      demo: '#',
    },
    {
      title: 'Hostel Management System',
      description:
        'Full-stack system for bookings, room allocation, and student records for 200+ students, built with MERN and JWT authentication.',
      tech: ['MERN Stack', 'JWT'],
      techIcons: [FaCode],
      category: 'Internship · RAXWO Technologies',
      github: null,
      demo: '#',
    },
    {
      title: 'Agency ERP Management System',
      description:
        'Agency management with client tracking, project management, invoicing, and reporting across 10+ client accounts.',
      tech: ['MERN Stack'],
      techIcons: [FaCode],
      category: 'Internship · RAXWO Technologies',
      github: 'https://github.com/thidaswick/AgencySystem.git',
      demo: '#',
    },
    {
      title: 'Enterprise Management Platform',
      description:
        'Enterprise system using PHP, JavaScript, and MySQL with improved data handling and reduced query load times.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      techIcons: [SiPhp, FaDatabase, SiJavascript],
      category: 'Internship · RAXWO Technologies',
      github: 'https://github.com/thidaswick/Raxwo-Company-System.git',
      demo: '#',
    },
    {
      title: 'Career Development & Recruitment Framework',
      description:
        'Final year research project: explainable AI-based career decision-support using multimodal and causal AI. Career Safety and Industry Stability Analysis module in progress.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'React'],
      techIcons: [SiPython, FaCode],
      category: 'Academic · Final Year Research (2026)',
      status: 'ongoing' as const,
      github: null,
      demo: '#',
    },
    {
      title: 'Event Photography & Videography Booking System',
      description:
        'Full-stack academic web application for event photography and videography reservations with booking CRUD and responsive UI.',
      tech: ['Java', 'JSP/Servlets', 'Bootstrap'],
      techIcons: [FaJava, FaCode],
      category: 'Academic Project (2026)',
      github: 'https://github.com/thidaswick/Event-booking-system.git',
      demo: '#',
    },
    {
      title: 'Garage ERP System',
      description:
        'Web-based ERP for an automobile service centre: technician job assignment, status tracking, inventory, and invoicing with real-time updates.',
      tech: ['Node.js', 'TypeScript', 'SQLite'],
      techIcons: [FaCode, FaDatabase],
      category: 'Academic Project (2026)',
      github: 'https://github.com/HaritheW/Yasuki.git',
      demo: '#',
    },
    {
      title: 'CeylonHarvest',
      description:
        'AI-powered agriculture web app for farmers to upload plant images for automated disease detection with treatment and prevention recommendations.',
      tech: ['MERN', 'Python'],
      techIcons: [FaCode, SiPython],
      category: 'Academic Project (2025)',
      github: 'https://github.com/thidaswick/Ceylone-Harvest.git',
      demo: '#',
    },
    {
      title: 'SkillShare',
      description:
        'Community learning platform with user authentication, skill/course listings, RESTful APIs, and client-server integration.',
      tech: ['Java', 'React.js', 'Spring Boot'],
      techIcons: [FaJava, SiSpringboot],
      category: 'Academic Project (2025)',
      github: 'https://github.com/Izu99/paf-skillshare',
      demo: '#',
    },
    {
      title: 'Store Management System',
      description:
        'Store management system for Lanka Glass House with secure data handling, RESTful APIs, and module integration.',
      tech: ['MongoDB', 'React.js', 'Node.js', 'Express.js', 'Next.js'],
      techIcons: [FaCode],
      category: 'Academic Project (2025)',
      github: 'https://github.com/thidaswick/WebProject',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Internship deliverables and academic projects from my portfolio and CV
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const githubUrl =
              typeof project.github === 'string' && project.github.startsWith('http')
                ? project.github
                : null

            const cardInner = (
              <>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">{project.category}</span>
                  {'status' in project && project.status === 'ongoing' && (
                    <span className="text-xs text-amber-700 dark:text-amber-300 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">
                      Ongoing
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.techIcons.map((TechIcon, techIndex) => (
                    <TechIcon key={techIndex} className="text-primary text-lg" title={project.tech[techIndex]} />
                  ))}
                  {project.tech.filter((_, i) => i >= project.techIcons.length).map((tech, techIndex) => (
                    <span key={techIndex} className="text-primary text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {githubUrl && (
                  <div className="flex items-center space-x-2 text-primary">
                    <FaGithub className="text-lg" aria-hidden />
                    <span className="font-medium">Code</span>
                  </div>
                )}
              </>
            )

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm"
              >
                {githubUrl ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 sm:p-6 text-left no-underline rounded-lg outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    aria-label={`${project.title} — view repository on GitHub`}
                  >
                    {cardInner}
                  </a>
                ) : (
                  <div className="p-4 sm:p-6">{cardInner}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
