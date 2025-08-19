import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://meghanavusirika.ca'),
  title: "Meghana Vusirika - Full Stack & AI Developer",
  description: "Full Stack & AI Developer passionate about building innovative solutions. Computer Engineering student at University of Waterloo specializing in React, Node.js, Python, and AI/ML.",
  keywords: ["Full Stack Developer", "AI Developer", "React", "Node.js", "Python", "Machine Learning", "University of Waterloo", "Computer Engineering"],
  authors: [{ name: "Meghana Vusirika" }],
  creator: "Meghana Vusirika",
  publisher: "Meghana Vusirika",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://meghanavusirika.ca",
    siteName: "Meghana Vusirika Portfolio",
    title: "Meghana Vusirika - Full Stack & AI Developer",
    description: "Full Stack & AI Developer passionate about building innovative solutions. Computer Engineering student at University of Waterloo specializing in React, Node.js, Python, and AI/ML.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meghana Vusirika - Full Stack & AI Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghana Vusirika - Full Stack & AI Developer",
    description: "Full Stack & AI Developer passionate about building innovative solutions. Computer Engineering student at University of Waterloo specializing in React, Node.js, Python, and AI/ML.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://meghanavusirika.ca"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
