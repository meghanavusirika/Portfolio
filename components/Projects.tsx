'use client'

import { motion } from 'framer-motion'
import { Code, Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "SnapSphere",
      description: "AI-powered photo spot discovery platform with vibe analysis and smart recommendations. Built with React, TypeScript, Python Flask, and CLIP AI.",
      technologies: ["React", "TypeScript", "Python", "Flask", "CLIP AI", "Mapbox", "Tailwind CSS"],
      image: "/snapsphere-preview.png",
      link: "https://github.com/meghanavusirika/SnapSphere",
      demo: "#"
    },
    {
      title: "ShelfLife",
      description: "Smart Kitchen pantry management app with AI-powered recipe suggestions and food waste reduction. Features real-time pantry tracking, expiration alerts, food rescue tracking, and sustainability metrics with carbon footprint reduction insights.",
      technologies: ["React", "TypeScript", "Node.js", "AI/ML", "OCR", "Tailwind CSS", "Data Analytics", "Sustainability APIs"],
      image: "/shelflife-preview.png",
      link: "https://github.com/meghanavusirika/ShelfLife",
      demo: "#"
    },
    {
      title: "SustainIQ",
      description: "Advanced ESG Analytics & AI-Powered Insights platform for comprehensive sustainability reporting. Features ESG dashboard, company comparison, industry benchmarking, AI report summarization, and interactive ESG mapping.",
      technologies: ["React", "TypeScript", "Node.js", "AI/ML", "Data Visualization", "ESG APIs", "PostgreSQL", "Chart.js"],
      image: "/sustainiq-preview.png",
      link: "https://github.com/meghanavusirika/SustainIQ",
      demo: "#"
    },
    {
      title: "SpendShield",
      description: "Personal finance tracker with AI-powered spending analysis and budget optimization. Features real-time budget overview, expense tracking, spending alerts, and fraud detection with a shield-protected financial interface.",
      technologies: ["React", "TypeScript", "Node.js", "AI/ML", "Financial APIs", "Data Analysis", "Chart.js", "Budget Management"],
      image: "/spendshield-preview.png",
      link: "https://github.com/meghanavusirika/SpendShield",
      demo: "#"
    },
    {
      title: "Finvest",
      description: "Interactive financial investment chatbot tailored for students and beginner investors, providing personalized guidance and portfolio suggestions.",
      technologies: ["Next.js", "TypeScript", "Microsoft Azure", "Microsoft AI", "Chatbot", "Financial APIs"],
      image: "/finvest-preview.png",
      link: "https://github.com/meghanavusirika/Finvest-Coach",
      demo: "#"
    },
    {
      title: "Heart Rate Monitor",
      description: "Wearable heart rate monitor designed to accurately measure pulse rate, specifically focused on assisting elderly individuals with heart arrhythmia. Empowers elderly residents to monitor their heart rates independently with built-in LED alerts and speaker notifications.",
      technologies: ["STM32F401RE", "C++", "3D Printing", "Embedded Systems", "IoT", "Healthcare", "Wearable Technology"],
      image: "/hrm-preview.jpg",
      link: "https://github.com/meghanavusirika/Heart-Rate-Monitor",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical skills and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to letter if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.image-fallback');
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                {/* Fallback letter display */}
                <div className={`image-fallback text-4xl font-bold text-primary-600 ${project.image ? 'hidden' : ''}`}>
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary-600" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600">
              I'm constantly working on new projects and improving existing ones. 
              Check back regularly to see my latest work and innovations!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
