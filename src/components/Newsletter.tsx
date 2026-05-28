'use client'

import React from 'react'
import { motion } from 'framer-motion'


export default function Newsletter() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0.75, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  }

  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const formVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative z-30 bg-[#030c14] pt-4 sm:pt-6 pb-28 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[200px] bg-[#1E3A8A]/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[150px] bg-[#D4AF37]/5 blur-[80px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter Box */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-30px" }}
          className="w-full rounded-2xl sm:rounded-[32px] border border-white/10 bg-[#071320]/60 backdrop-blur-xl py-5 px-6 sm:py-6 sm:px-9 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold/blue glow inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-[80px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#1E3A8A]/10 blur-[80px] pointer-events-none rounded-full" />

          {/* Left Area: Icon & Texts */}
          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            {/* Custom Golden Open-Envelope Newsletter Icon with premium float effect */}
            <motion.div 
              variants={iconVariants}
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="shrink-0 flex items-center justify-center bg-white/5 rounded-xl p-2.5 border border-white/5 shadow-inner"
            >
              <svg className="w-9 h-9 text-[#D4AF37]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Envelope base */}
                <path d="M54 30V48C54 51.3137 51.3137 54 48 54H16C12.6863 54 10 51.3137 10 48V30" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Flap down */}
                <path d="M10 32L30.126 42.063C31.2996 42.6498 32.7004 42.6498 33.874 42.063L54 32" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Open Flap back */}
                <path d="M10 30L32 15L54 30" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Emerging Letter */}
                <rect x="18" y="21" width="28" height="19" rx="2" fill="#D4AF37" opacity="0.25"/>
                <rect x="18" y="21" width="28" height="19" rx="2" stroke="#D4AF37" strokeWidth="3"/>
                {/* Text lines in letter */}
                <line x1="24" y1="27" x2="40" y2="27" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round"/>
                <line x1="24" y1="33" x2="34" y2="33" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </motion.div>
            
            {/* Texts */}
            <motion.div variants={textVariants} className="text-center sm:text-left">
              <h3 className="text-white font-display font-[800] text-lg sm:text-xl tracking-tight leading-tight">
                Stay Updated
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-md font-sans">
                Get the latest updates on scholarships, deadlines and exciting opportunities.
              </p>
            </motion.div>
          </div>

          {/* Right Area: Email Input Pill */}
          <motion.div variants={formVariants} className="w-full lg:w-auto relative z-10 shrink-0">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full sm:w-[380px] bg-white rounded-full p-1 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none text-[#071320] placeholder-[#071320]/50 text-xs sm:text-sm px-4 w-full focus:outline-none font-medium font-sans"
                required
              />
              <button
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#e5c158] active:scale-95 text-[#071320] font-[800] text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300 shrink-0 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
