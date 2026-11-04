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
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">05 — Projects</p>
          <h2 className="display-title text-4xl sm:text-5xl">Selected work across product and academia</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => {
            const githubUrl =
              typeof project.github === 'string' && project.github.startsWith('http')
                ? project.github
                : null

            const cardInner = (
              <>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
                    {project.category}
                  </span>
                  {'status' in project && project.status === 'ongoing' && (
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-deep dark:text-accent">
                      Ongoing
                    </span>
                  )}
                </div>
                <h3 className="mb-3 font-display text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-ink-soft sm:text-base">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
                {githubUrl && (
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-ink">
                    <FaGithub />
                    <span>View code</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                )}
              </>
            )

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.05, 0.35), duration: 0.5 }}
                className="group panel flex h-full flex-col p-6 transition-colors hover:border-accent sm:p-7"
              >
                {githubUrl ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col text-left no-underline outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    aria-label={`${project.title} — view repository on GitHub`}
                  >
                    {cardInner}
                  </a>
                ) : (
                  <div className="flex h-full flex-col">{cardInner}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
