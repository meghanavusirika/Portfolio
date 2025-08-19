'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Zap, Users } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "Building complete web applications with modern technologies like React, Node.js, and Python."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent solutions using OpenAI, PyTorch, and advanced NLP techniques."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on Azure, Vercel, and implementing CI/CD pipelines."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Working effectively in agile environments with strong communication and leadership skills."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Computer Engineering student at the University of Waterloo, 
            specializing in full-stack development and artificial intelligence. I love creating 
            innovative solutions that make a real impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm currently pursuing my Bachelor of Applied Science in Computer Engineering 
                at the University of Waterloo, expected to graduate in 2029. My academic journey 
                has been focused on combining theoretical knowledge with practical application.
              </p>
              <p>
                I've developed a strong foundation in both frontend and backend technologies, 
                with particular expertise in React, Node.js, Python, and AI/ML frameworks. 
                My projects demonstrate my ability to build complete, production-ready applications.
              </p>
              <p>
                Beyond technical skills, I value problem-solving, analytical thinking, and 
                effective communication. I enjoy collaborating with teams and taking on 
                leadership roles to drive projects forward.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-white dark:bg-dark-800 rounded-xl p-4 mb-3 inline-block">
                      <div className="text-primary-600 dark:text-primary-400">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              What Drives Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm passionate about leveraging technology to solve real-world problems. 
              Whether it's building AI-powered applications, creating seamless user experiences, 
              or optimizing backend systems, I'm always excited to learn new technologies 
              and push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
