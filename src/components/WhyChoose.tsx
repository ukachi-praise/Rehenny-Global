'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ExpandOnHover from '@/components/ui/expand-cards'

import { 
  Compass, 
  User, 
  Users, 
  GraduationCap, 
  Globe, 
  Building2, 
  Layers, 
  TrendingUp, 
  Trophy, 
  Award, 
  Sprout, 
  FileBadge 
} from 'lucide-react'

export default function WhyChoose() {
  const images = [
    '/assets/whychoose/why_choose_1.png',
    '/assets/whychoose/why_choose_2.png',
    '/assets/whychoose/why_choose_3.png',
    '/assets/whychoose/why_choose_4.png',
    '/assets/whychoose/why_choose_5.png'
  ]

  const featureCards = [
    {
      title: "Personalized Guidance",
      description: "Tailored university shortlists based on your profile and aspirations.",
      IconLeft: Compass,
      IconRight: User,
      leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
      rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Expert Counsellors",
      description: "Receive direct mentoring from experienced international education specialists.",
      IconLeft: Users,
      IconRight: GraduationCap,
      leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
      rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Global Network",
      description: "Access a vast, supportive network of university partners and student alumni.",
      IconLeft: Globe,
      IconRight: Building2,
      leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
      rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Transparent Process",
      description: "Clear, step-by-step visibility from application to pre-departure briefing.",
      IconLeft: Layers,
      IconRight: TrendingUp,
      leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
      rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Proven Track Record",
      description: "Join thousands of successfully placed students in top global institutions.",
      IconLeft: Trophy,
      IconRight: Award,
      leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
      rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Lifelong Support",
      description: "Our commitment extends beyond admission, offering post-arrival support and career resources.",
      IconLeft: Sprout,
      IconRight: FileBadge,
      leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
      rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    }
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Row 1 slides from bottom to top
  // Row 2 slides from behind Row 1 down to its position
  // Variant sets for desktop (row‑based) and mobile (simple slide‑up)
  const desktopCardVariants = [
    // ROW 1
    {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    },
    {
      hidden: { opacity: 0, y: 120 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    },
    {
      hidden: { opacity: 0, y: 90 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    },
    // ROW 2 (slides from behind Row 1)
    {
      hidden: { opacity: 0, y: -160, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
    },
    {
      hidden: { opacity: 0, y: -150, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
    },
    {
      hidden: { opacity: 0, y: -170, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
    }
  ];

  const mobileCardVariants = Array.from({ length: 6 }, () => ({
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }));

  // Parent wrapper animation coordinator
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative z-30 bg-[#071320] pt-16 sm:pt-24 pb-24 sm:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#1E3A8A]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[350px] h-[350px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* ================= LEFT SIDE: SEAMLESS ACCORDION & BY THE NUMBERS ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex flex-col items-center lg:items-start"
          >
            {/* The Expandable Card Visual Deck (Now transparent-bg with staggered heights!) */}
            <div className="w-full">
              <ExpandOnHover images={images} height="24rem" />
            </div>

            {/* By the Numbers Stats Container */}
            <div className="mt-12 w-full text-center lg:text-left">
              <h4 className="text-[#D4AF37] uppercase tracking-[0.18em] font-sans font-bold text-xs sm:text-sm mb-4">
                By the Numbers
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5 backdrop-blur-md">
                
                {/* Stat 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-white text-lg sm:text-[20px] font-extrabold leading-none">10,000+</span>
                    <span className="block text-white/55 text-xs font-sans mt-1">Alumni World-wide</span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="hidden sm:block w-px h-10 bg-white/10" />

                {/* Stat 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-white text-lg sm:text-[20px] font-extrabold leading-none">50+</span>
                    <span className="block text-white/55 text-xs font-sans mt-1">Partner Universities</span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="hidden sm:block w-px h-10 bg-white/10" />

                {/* Stat 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-white text-lg sm:text-[20px] font-extrabold leading-none">98%</span>
                    <span className="block text-white/55 text-xs font-sans mt-1">Visa Success Rate</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE: HEADER & LIQUID METAL GRID ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Gold Tag */}
            <motion.span 
              variants={textVariants}
              className="text-[#D4AF37] tracking-[0.18em] font-sans font-bold text-xs sm:text-sm uppercase mb-3 block"
            >
              Why Choose Rhinny Global?
            </motion.span>

            {/* Headline */}
            <motion.h2 
              variants={textVariants}
              className="text-white font-display font-[800] text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-tight mb-5"
            >
              Premium. Trusted. Global.
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={textVariants}
              className="text-white/70 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-2xl"
            >
              We provide unmatched, end-to-end guidance to sculpt your unique academic pathway and launch your global career.
            </motion.p>

            {/* 3-Column Advantage Grid with Liquid Metal Styling & Staggered Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {featureCards.map((card, index) => (
                <motion.div 
                  key={index} 
                  variants={isMobile ? mobileCardVariants[index] : desktopCardVariants[index]}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`relative overflow-hidden bg-gradient-to-br from-[#0c1f30] via-[#14283c] to-[#07111b] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.06)] transition-colors transition-shadow duration-300 cursor-pointer group/card flex flex-col items-start text-left will-change-[transform,opacity]`}
                >
                  {/* Liquid Metal Diagonal Reflection Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                  {/* Dual Icons Container */}
                  <div className="flex items-center gap-1.5 mb-4 relative z-10">
                    {/* Left Gold Icon Badge */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover/card:scale-105 ${card.leftColor}`}>
                      <card.IconLeft strokeWidth={2} className="w-4.5 h-4.5" />
                    </div>
                    {/* Right Blue Icon Badge */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover/card:scale-105 ${card.rightColor}`}>
                      <card.IconRight strokeWidth={2} className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-white text-[15px] sm:text-[16px] font-bold font-sans tracking-tight mb-1.5 relative z-10 transition-colors duration-300 group-hover/card:text-[#D4AF37]">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-white/60 text-[12px] sm:text-[12.5px] leading-relaxed font-sans mt-0.5 relative z-10">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* View All Details Trigger */}
            <motion.div 
              variants={textVariants} 
              className="w-full flex justify-center mt-8"
            >
              <a 
                href="#services" 
                className="text-[#D4AF37] hover:text-[#e5c158] text-sm sm:text-base font-sans font-bold flex items-center gap-1.5 transition-colors duration-200 group/link"
              >
                <span>View all details</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>


    </section>
  )
}
