'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"

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
  const featureCards = [
    { title: "Personalized Guidance", description: "Tailored university shortlists based on your profile and aspirations.", IconLeft: Compass, IconRight: User, leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20", rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { title: "Expert Counsellors", description: "Receive direct mentoring from experienced international education specialists.", IconLeft: Users, IconRight: GraduationCap, leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20", rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { title: "Global Network", description: "Access a vast, supportive network of university partners and student alumni.", IconLeft: Globe, IconRight: Building2, leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20", rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { title: "Transparent Process", description: "Clear, step-by-step visibility from application to pre-departure briefing.", IconLeft: Layers, IconRight: TrendingUp, leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20", rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { title: "Proven Track Record", description: "Join thousands of successfully placed students in top global institutions.", IconLeft: Trophy, IconRight: Award, leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20", rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { title: "Lifelong Support", description: "Our commitment extends beyond admission, offering post-arrival support and career resources.", IconLeft: Sprout, IconRight: FileBadge, leftColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20", rightColor: "text-blue-400 bg-blue-500/10 border-blue-500/20" }
  ]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="relative z-20 bg-[#071320] pt-16 sm:pt-24 pb-24 sm:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#1E3A8A]/10 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start"
      >

        {/* ================= LEFT CONTENT COLUMN (Desktop) ================= */}
        <motion.div 
          variants={textVariants}
          className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-[#D4AF37] tracking-[0.18em] font-sans font-bold text-sm uppercase mb-4 block">
            Why Choose Rhinny Global?
          </span>
          <h2 className="text-white font-display font-extrabold text-4xl sm:text-5xl lg:text-[52px] leading-tight tracking-tight mb-6">
            Premium. Trusted. Global.
          </h2>
          <p className="text-white/60 font-sans text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
            We provide unmatched, end-to-end guidance to sculpt your unique academic pathway and launch your global career.
          </p>
          
          <div className="w-full max-w-md mb-12">
            <h4 className="text-[#D4AF37] uppercase tracking-widest font-sans font-bold text-xs mb-4">
              By the Numbers
            </h4>
            <div className="flex flex-row items-center justify-center gap-6 bg-white/[0.02] border border-white/10 rounded-2xl p-5 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Building2 className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <span className="block text-white text-xl font-bold leading-none">50+</span>
                  <span className="block text-white/50 text-sm font-sans mt-1">Partner Universities</span>
                </div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <FileBadge className="w-6 h-6" strokeWidth={2}/>
                </div>
                <div className="text-left">
                  <span className="block text-white text-xl font-bold leading-none">98%</span>
                  <span className="block text-white/50 text-sm font-sans mt-1">Visa Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-4">
            <Link href="/services">
              <LiquidMetalButton label="Explore our services" />
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT CARD GRID (Desktop) ================= */}
        <div className="lg:col-span-7 mt-16 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {featureCards.map((card, index) => (
                <motion.div 
                  key={index} 
                  variants={cardVariants}
                  whileHover={{ y: -7, scale: 1.025 }}
                  className={`relative overflow-hidden bg-gradient-to-br from-[#0e2335] via-[#14283c] to-[#0c1f30] border border-white/10 hover:border-[#D4AF37]/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 cursor-pointer group/card flex flex-col items-start text-left will-change-transform`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <div className="flex items-center gap-2 mb-5 z-10">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover/card:scale-110 ${card.leftColor}`}>
                      <card.IconLeft strokeWidth={2} className="w-5 h-5" />
                    </div>
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover/card:scale-110 ${card.rightColor}`}>
                      <card.IconRight strokeWidth={2} className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-bold font-sans tracking-tight mb-2 z-10 transition-colors duration-300 group-hover/card:text-white">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-sans z-10">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
        </div>

      </motion.div>
    </section>
  )
}
