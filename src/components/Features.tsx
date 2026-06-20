'use client'
import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
  },
}

export default function FeaturesSection() {
  const cards = [
    {
      title: "Top Universities",
      desc: "Global university partnerships",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6M5 10v8h14v-8M9 14v4M15 14v4M4 20h16" />
        </svg>
      )
    },
    {
      title: "Student Support",
      desc: "End-to-end guidance every step",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0M12 14l2-2m0 0l2 2m-2-2v6" />
        </svg>
      )
    },
    {
      title: "Scholarships",
      desc: "Access to global scholarships",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.8 6.7 19.1l1-5.8-4.2-4.1 5.9-.9L12 3z" />
        </svg>
      )
    },
    {
      title: "Visa Assistance",
      desc: "Smooth visa processing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6l1 2h3a1 1 0 011 1v13a2 2 0 01-2 2H6a2 2 0 01-2-2V6a1 1 0 011-1h3l1-2zm3 7a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative z-30 px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pb-28 bg-white overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-[#0B2E6F]/[0.03] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-16">
          Your Journey to International Education, Simplified
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] px-6 py-7 text-center cursor-pointer relative overflow-hidden will-change-[transform,opacity] transition-colors transition-shadow duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_50px_rgba(11,46,111,0.10)]"
            >
              {/* Gold glow top border on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#f0c94d] group-hover:w-2/3 transition-all duration-500 rounded-full" />

              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

              {/* Icon Container */}
              <motion.div
                variants={iconVariants}
                className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0B2E6F]/5 to-[#0B2E6F]/10 border border-[#0B2E6F]/5 text-[#0B2E6F] transition-colors transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] group-hover:scale-110"
              >
                {card.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                variants={textVariants}
                className="text-[20px] font-semibold text-gray-900 leading-tight mb-2 font-display group-hover:text-[#0B2E6F] transition-colors duration-300"
              >
                {card.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={textVariants}
                className="text-[14px] leading-6 text-gray-500 max-w-[180px] mx-auto group-hover:text-gray-700 transition-colors duration-300"
              >
                {card.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
