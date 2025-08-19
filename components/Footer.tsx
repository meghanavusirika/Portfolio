'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/meghanavusirika',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/meghanavusirika/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:meghana.vusirika@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ]

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-max">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="gradient-text">Meghana Vusirika</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
            Full Stack & AI Developer passionate about building innovative solutions and pushing the boundaries of technology.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/meghanavusirika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/meghanavusirika/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:meghana.vusirika@gmail.com"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Meghana Vusirika. All rights reserved. | Built with Next.js & Tailwind CSS
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            <a href="https://meghanavusirika.ca" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              meghanavusirika.ca
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
