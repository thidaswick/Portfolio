'use client'

import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaProjectDiagram, FaRobot } from 'react-icons/fa'

export default function About() {
  const features = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description:
        'Building production web applications with React.js, Node.js, TypeScript, PHP, and MySQL — from RESTful APIs to responsive UIs.',
    },
    {
      icon: FaProjectDiagram,
      title: 'ERP & Enterprise Systems',
      description:
        'Hands-on experience delivering ERP modules, inventory, reporting, and business workflow systems in Agile teams.',
    },
    {
      icon: FaLaptopCode,
      title: 'Agile Delivery',
      description:
        'Experienced in requirement analysis, sprint reviews, backend integration, testing, and deployment in collaborative environments.',
    },
    {
      icon: FaRobot,
      title: 'AI-Assisted Development',
      description:
        'Using GitHub Copilot, Cursor AI, ChatGPT, and Claude to improve productivity, code quality, and problem-solving.',
    },
  ]

  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">01 — About</p>
          <h2 className="display-title text-4xl sm:text-5xl">
            Crafting reliable software with clarity and pace
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="font-display text-2xl font-semibold text-ink">Hello — I&apos;m Thidas</h3>
            <p className="body-copy text-lg">
              I&apos;m a MERN stack developer and IT undergraduate at SLIIT with two internships building production ERP and web applications. Proficient in React.js, Node.js, TypeScript, PHP, and MySQL, with hands-on experience in RESTful API development, Agile workflows, and full-stack application delivery.
            </p>
            <p className="body-copy text-lg">
              I&apos;ve worked as a Contract Software Engineer at Qube Design Labs on production ERP modules, and as an Intern Software Engineer at RAXWO Technologies across hostel management, agency ERP, and enterprise PHP systems.
            </p>
            <p className="body-copy text-lg">
              A quick learner who adapts to new technologies and contributes to team-based software projects from requirements through deployment.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="panel p-5 transition-colors hover:border-accent"
              >
                <feature.icon className="mb-4 text-xl text-accent" />
                <h4 className="mb-2 font-display text-lg font-semibold text-ink">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
