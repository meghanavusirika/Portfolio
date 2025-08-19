'use client'

import { motion } from 'framer-motion'
import { Code, Database, Brain, Palette, Users, Zap, GitBranch } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "JavaScript", "TypeScript", "React", "Node.js", "Next.js", "Express.js", 
        "Python", "C++", "Flask", "SQL"
      ],
      description: "Can hand-code all components with modern best practices"
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "PostgreSQL", "MySQL", "SQLite", "SQLAlchemy", "MongoDB", "Firebase", 
        "Microsoft Azure", "Vercel", "Netlify", "Render"
      ],
      description: "Experience with both SQL and NoSQL databases, cloud deployment"
    },
    {
      title: "Tools & Technologies",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        "Git", "Github", "Docker", "Jenkins", "GitHub Actions", "Jira", "Postman", 
        "JWT", "OAuth", "REST APIs", "Axios", "MS Office Suite"
      ],
      description: "Version control, CI/CD, and development tools"
    },
    {
      title: "AI & Data",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "OpenAI (GPT-4, CLIP)", "HuggingFace Transformers", "LLaMA 2 (Ollama)", 
        "PyTorch", "Stable Diffusion", "Prompt Engineering"
      ],
      description: "Advanced AI/ML frameworks and techniques"
    },
    {
      title: "Frontend & UI/UX",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        "Tailwind CSS", "Shadcn UI", "Framer Motion", "Responsive Design", 
        "Cross-Browser Development", "Accessibility"
      ],
      description: "Modern UI frameworks and design principles"
    },
    {
      title: "Software Engineering",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        "Agile & Waterfall SDLC", "CI/CD Pipelines", "UML Diagrams", 
        "Technical Documentation", "State Management", "API Integration", 
        "Unit Testing/Automated Testing"
      ],
      description: "Professional development methodologies and practices"
    }
  ]

  const softSkills = [
    "Problem Solving", "Analytical Thinking", "Team Collaboration", 
    "Verbal & Written Communication", "Adaptability", "Self-Motivation", 
    "Active Learning", "Creativity", "Leadership"
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg p-2 text-white group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="skill-tag text-xs"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Soft <span className="gradient-text">Skills</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary-600" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Professional & Interpersonal Skills
                </h4>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-dark-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and industry best practices. My passion for learning drives me to 
              explore new frameworks, tools, and methodologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
