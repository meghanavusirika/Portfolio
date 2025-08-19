'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, CheckCircle, Star, Brain, Code, GraduationCap } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Deloitte Technology Consulting Virtual Experience Program",
      issuer: "Deloitte",
      date: "Jan 2024",
      credential: "Completion Certificate",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Technology Consulting", "Business Analysis", "Project Management", "Client Communication"],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_6xJdJfJGFqqmST2Av_1755387454298_completion_certificate.pdf"
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Jan 2024",
      credential: "AI-900",
      icon: <Code className="h-6 w-6" />,
      skills: ["Azure AI services", "Machine Learning", "Computer Vision", "Natural Language Processing"],
      link: "https://www.credly.com/badges/b5f5069c-b365-4db9-989f-25062e5072dc/public_url"
    },
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google",
      date: "Dec 2023",
      credential: "IT Support",
      icon: <GraduationCap className="h-6 w-6" />,
      skills: ["IT Support", "Networking", "Operating Systems", "Security", "Troubleshooting"],
      link: "https://www.credly.com/badges/02cac0a3-362c-4824-83b5-11610182afe9/public_url"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "Nov 2023",
      credential: "Data Analytics",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Data Analysis", "SQL", "R Programming", "Data Visualization", "Statistical Analysis"],
      link: "https://www.credly.com/badges/9e193522-f741-46f4-a12e-0b133b24c19c/public_url"
    }
  ]

  const getIssuerColor = (issuer: string) => {
    switch (issuer) {
      case "Microsoft": return "from-blue-500 to-cyan-500"
      case "Google": return "from-red-500 to-orange-500"
      case "Deloitte": return "from-green-500 to-blue-500"
      default: return "from-gray-500 to-gray-600"
    }
  }

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Industry-recognized credentials that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getIssuerColor(cert.issuer)} text-white group-hover:scale-110 transition-transform duration-200`}>
                    {cert.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                    <div className="text-xs font-medium text-primary-600 dark:text-primary-400 mt-1">
                      {cert.credential}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {cert.issuer}
                </p>

                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary-600" />
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>Issued {cert.date}</span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Credential
                  </a>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Commitment to Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These certifications represent my dedication to professional development and staying 
              current with industry standards. I'm continuously pursuing new learning opportunities 
              to enhance my skills and expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
