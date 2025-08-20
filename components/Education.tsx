'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = {
    degree: "Bachelor of Applied Science (B.A.Sc.)",
    major: "Computer Engineering Honors",
    university: "University of Waterloo",
    location: "Waterloo, ON",
    graduation: "Expected Graduation: 2029",
    description: "Currently pursuing a comprehensive Computer Engineering program that combines theoretical foundations with practical applications in software development, hardware systems, and emerging technologies.",
    highlights: [
      "Core courses in Computer Architecture, Data Structures, and Algorithms",
      "Software Engineering principles and best practices",
      "Mathematics and Physics fundamentals",
      "Hands-on laboratory work and project-based learning",
      "Co-op program integration for industry experience"
    ]
  }

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-full p-4 text-white">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-primary-600 font-semibold mb-2">
                  {education.major}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{education.university}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{education.graduation}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                {education.description}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-600" />
                Academic Achievements
              </h4>
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  University of Waterloo President Scholarship of Distinction
                </h5>
                <p className="text-gray-600 text-sm">
                  Awarded to students who have an admission average of 95% or higher, in recognition of their outstanding academic achievement.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  Engineering Ambassador
                </h5>
                <p className="text-gray-600 text-sm">
                  Representing the faculty at campus events and student panels, supporting prospective students with academic guidance, and fostering an inclusive engineering community through outreach initiatives.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-600" />
                Program Highlights
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {education.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
