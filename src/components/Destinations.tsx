'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { DestinationCard } from '@/components/ui/card-21'


export default function DestinationsSection() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const destinations = [
    {
      name: "Canada",
      flag: "🇨🇦",
      image: "/assets/destinations/canada.png",
      stats: "120+ Universities • 98% Visa Rate",
      themeColor: "0 75% 25%", // deep red
    },
    {
      name: "UK",
      flag: "🇬🇧",
      image: "/assets/destinations/uk.png",
      stats: "150+ Universities • No IELTS Options",
      themeColor: "215 60% 25%", // royal blue
    },
    {
      name: "USA",
      flag: "🇺🇸",
      image: "/assets/destinations/usa.png",
      stats: "200+ Universities • STEM Extensions",
      themeColor: "210 80% 20%", // dark navy
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "/assets/destinations/australia.png",
      stats: "80+ Universities • Post-Study Work",
      themeColor: "175 70% 20%", // teal
    },
    {
      name: "China",
      flag: "🇨🇳",
      image: "/assets/destinations/china.png",
      stats: "60+ Universities • Scholarships",
      themeColor: "5 80% 22%", // crimson
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: (custom: { isMobile: boolean; index: number }) => ({
      opacity: 0,
      x: custom.isMobile ? (custom.index % 2 === 0 ? -60 : 60) : 0,
      y: custom.isMobile ? 0 : 40,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="relative z-30 px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pb-32 bg-[#071320] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#1E3A8A]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[200px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-[800] text-white tracking-tight leading-tight">
              Top Study Destinations
            </h2>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#e5c158] transition-colors duration-300 font-semibold text-sm sm:text-base group"
            >
              View All Destinations
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              custom={{ isMobile, index: i }}
              variants={cardVariants}
              className="w-full h-[400px] sm:h-[430px]"
            >
              <DestinationCard
                imageUrl={dest.image}
                location={dest.name}
                flag={dest.flag}
                stats={dest.stats}
                href="#"
                themeColor={dest.themeColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>


    </section>
  )
}
