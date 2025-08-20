'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Users, Brain } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "IT Assistant Intern",
      company: "New Haven Mortgage Corporation",
      duration: "MAY 2025 - AUG 2025",
      location: "Toronto, ON",
      description: "Provided technical support and coordinated with the company's MSP to configure laptops for new hires, troubleshoot hardware/software issues, and manage onboarding/offboarding processes.",
      achievements: [
        "Led the design and development of a mortgage eligibility chatbot to automate client prequalification and streamline workflows, projected to increase client acquisition by 20–30%",
        "Created UML conversation flowcharts and state diagrams to model interactions and ensure accurate eligibility calculations",
        "Maintained IT documentation and leveraged Microsoft Office (Excel, Word, PowerPoint) for reporting and process tracking",
        "Integrated chatbot with existing company systems for seamless workflow automation"
      ],
      technologies: ["Chatbot Development", "UML Diagrams", "Microsoft Office", "System Integration"],
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Frontend Developer",
      company: "WE Accelerate Program – Microsoft Azure and Artificial Intelligence",
      duration: "MAY 2024 - AUG 2024",
      location: "Remote",
      description: "Built FinvestCoach, a personal finance coaching app with Next.js, TypeScript, and Microsoft Azure, featuring an AI-powered chatbot that provides personalized investment guidance.",
      achievements: [
        "Applied best practices in component reusability, accessibility, and frontend design",
        "Deployed on Vercel incorporating improvements through mentor feedback from Microsoft",
        "Developed AI-powered chatbot for personalized financial advice",
        "Implemented responsive design and cross-browser compatibility"
      ],
      technologies: ["Next.js", "TypeScript", "Microsoft Azure", "AI Chatbot", "Vercel"],
      icon: <Code className="h-6 w-6" />,
      projectLink: "Project Link"
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and hands-on experience in technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-full p-4 text-white">
                    {experience.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-primary-600 font-semibold mb-2">
                        {experience.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achievementIndex * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                      Technologies:
                    </span>
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {experience.projectLink && (
                    <div className="mt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {experience.projectLink}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Looking Forward
            </h3>
            <p className="text-gray-600">
              I'm actively seeking opportunities to apply my skills in full-stack development and AI. 
              I'm particularly interested in roles that challenge me to grow while contributing to 
              meaningful projects and innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
