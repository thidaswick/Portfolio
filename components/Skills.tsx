'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaJs, FaJava, FaCode, FaDatabase, FaChartBar, FaRobot } from 'react-icons/fa'
import { SiKotlin, SiMongodb, SiSpringboot, SiPhp, SiFigma, SiNextdotjs } from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Web',
      skills: [
        { name: 'Next.js', icon: SiNextdotjs, level: 85 },
        { name: 'React', icon: FaReact, level: 85 },
        { name: 'JavaScript', icon: FaJs, level: 88 },
        { name: 'HTML/CSS', icon: FaCode, level: 90 },
        { name: 'MERN Stack', icon: FaCode, level: 85 },
      ],
    },
    {
      title: 'Backend & Mobile',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85 },
        { name: 'Spring Boot', icon: SiSpringboot, level: 80 },
        { name: 'PHP/MySQL', icon: FaDatabase, level: 82 },
        { name: 'Kotlin', icon: SiKotlin, level: 85 },
        { name: 'Java', icon: FaJava, level: 88 },
        { name: 'Python', icon: FaPython, level: 80 },
      ],
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'Power BI', icon: FaChartBar, level: 75 },
        { name: 'UI/UX Design', icon: SiFigma, level: 80 },
        { name: 'AI Tools', icon: FaRobot, level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-white dark:bg-slate-800 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm"
            >
              <h3 className="text-xl lg:text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {skill.icon && (
                          <skill.icon className="text-primary text-lg flex-shrink-0" />
                        )}
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
