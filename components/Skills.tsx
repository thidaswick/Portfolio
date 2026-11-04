'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaJs, FaJava, FaCode, FaDatabase, FaRobot } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiSpringboot, SiPhp, SiNextdotjs, SiExpress, SiPostgresql, SiFigma } from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'JavaScript', icon: FaJs, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'Java', icon: FaJava, level: 85 },
        { name: 'PHP', icon: SiPhp, level: 82 },
        { name: 'Python', icon: FaPython, level: 80 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: FaReact, level: 90 },
        { name: 'Node.js', icon: FaNodeJs, level: 88 },
        { name: 'Express.js', icon: SiExpress, level: 85 },
        { name: 'Next.js', icon: SiNextdotjs, level: 85 },
        { name: 'Spring Boot', icon: SiSpringboot, level: 80 },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', icon: FaDatabase, level: 88 },
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 78 },
        { name: 'Git & GitHub', icon: FaCode, level: 90 },
        { name: 'Figma', icon: SiFigma, level: 80 },
      ],
    },
    {
      title: 'Methodologies & AI',
      skills: [
        { name: 'RESTful APIs', icon: FaCode, level: 88 },
        { name: 'Agile / Scrum', icon: FaCode, level: 85 },
        { name: 'MVC Architecture', icon: FaCode, level: 82 },
        { name: 'AI-Assisted Dev', icon: FaRobot, level: 88 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-pad bg-[color-mix(in_srgb,var(--bg-muted)_55%,transparent)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-3">02 — Skills</p>
          <h2 className="display-title text-4xl sm:text-5xl">Tools I use to ship real products</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08, duration: 0.55 }}
              className="panel p-6"
            >
              <h3 className="mb-6 font-display text-lg font-semibold text-ink">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-accent" />
                        <span className="text-sm font-medium text-ink-soft">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
                      <motion.div
                        className="h-full rounded-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: skillIndex * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
