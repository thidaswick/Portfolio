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
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">Hello! I&apos;m Thidas</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              I&apos;m a MERN stack developer and IT undergraduate at SLIIT with two internships building production ERP and web applications. Proficient in React.js, Node.js, TypeScript, PHP, and MySQL, with hands-on experience in RESTful API development, Agile workflows, and full-stack application delivery.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              I&apos;ve worked as a Contract Software Engineer at Qube Design Labs on production ERP modules, and as an Intern Software Engineer at RAXWO Technologies across hostel management, agency ERP, and enterprise PHP systems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              A quick learner who adapts to new technologies and contributes to team-based software projects from requirements through deployment. Always open to discussing new opportunities and meaningful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors shadow-sm"
              >
                <feature.icon className="text-primary text-2xl lg:text-2xl mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
