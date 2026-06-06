'use client'

import { motion } from 'framer-motion'
import React from 'react'
import 'flag-icons/css/flag-icons.min.css'
import { Users, Building2, Globe, ShieldCheck } from "lucide-react"
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"


export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen md:min-h-0 md:h-screen flex items-center overflow-hidden bg-[#071320]">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.png"
          alt="Background"
          className="w-full h-full object-cover object-left md:object-top"
        />
        {/* Dark overlay specifically layered with the original gradient */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(100deg, rgba(7, 19, 32, 0.88) 0%, rgba(7, 19, 32, 0.60) 55%, rgba(7, 19, 32, 0.10) 100%)' }} 
        />
      </div>

      {/* ================= STUDENT IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}

        className="absolute bottom-0 right-[2%] md:right-[6%] lg:right-[10%] h-[55%] md:h-[92%] w-auto z-10 pointer-events-none flex justify-end will-change-[transform,opacity]"
      >
        <img
          src="/assets/Hero_image.png"
          alt="Student"
          className="h-full w-auto max-w-[320px] md:max-w-[440px] lg:max-w-[540px] xl:max-w-[620px] object-contain object-bottom opacity-95 md:opacity-100"
        />
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 max-w-[1100px] w-full px-6 md:pl-[8%] lg:pl-[14%] xl:pl-[18%] pt-[130px] md:pt-[100px] pb-[140px] md:pb-0">
        {/* Top Label */}
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
           className="will-change-transform inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#0A4EB5]/30 bg-[#0A4EB5]/10 backdrop-blur-md mb-[18px] w-max"
        >
           <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A4EB5] to-[#3b82f6] uppercase tracking-[0.15em] text-[13px] font-bold leading-none font-sans pt-0.5">
             STRUCTURED. TRANSPARENT. GUIDED.
           </p>
        </motion.div>

        {/* Heading */}
        <div className="text-[28px] md:text-[42px] lg:text-[52px] font-display font-[800] leading-[1.15] mb-[28px] flex flex-col items-start">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.015}
            staggerFrom="first"
            transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.1 }}
            containerClassName="block text-white"
          >
            {`Your Dream University.`}
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.015}
            staggerFrom="first"
            transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.3 }}
            containerClassName="block text-white"
          >
            {`Our Global Expertise.`}
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.015}
            staggerFrom="first"
            transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.5 }}
            containerClassName="block pb-2 text-[#D4AF37]"
          >
            {`Future Without Borders.`}
          </VerticalCutReveal>
        </div>

        {/* Sub Text */}
        <motion.p
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.4, delay: 0.4 }}
           className="text-white/80 text-[17px] md:text-[19px] lg:text-[20px] font-sans font-normal leading-[1.6] max-w-[580px] mb-[40px]"
        >
          We simplify your study abroad journey with free expert counseling, a tailored 5-university shortlist within 48 hours, and end-to-end visa compliance support.
        </motion.p>

        {/* Buttons */}
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.52 }}
           className="flex flex-wrap gap-[14px] mb-[30px]"
        >
          <a href="/scholarships"><LiquidMetalButton>Book a consultation</LiquidMetalButton></a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.65 }}
           className="flex bg-white/5 border border-white/10 rounded-xl backdrop-blur-md py-2 md:py-2.5 w-full max-w-[680px] justify-between relative"
        >
          {[
            { Icon: Users, number: '5,000+', label: 'Students Placed' },
            { Icon: Building2, number: '150+', label: 'Top Universities' },
            { Icon: Globe, number: '13+', label: 'Countries' },
            { Icon: ShieldCheck, number: '99%', label: 'Success Rate' },
          ].map((item, index) => (
            <div key={index} className="flex-1 text-center px-1 sm:px-4 relative group">
              {/* Glassmorphism stat cards cleanly lit with white gradients and boundaries */}
              <div className="w-6 h-6 md:w-7 md:h-7 mx-auto mb-1 rounded-full bg-gradient-to-br from-white/10 to-[#071320] flex items-center justify-center border border-white/15 shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300">
                <item.Icon strokeWidth={1.5} className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/90 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform duration-300" />
              </div>
              <span className="block text-[15px] sm:text-[20px] md:text-[22px] font-sans font-bold text-[#D4AF37] tracking-[-0.02em] leading-[1.1]">
                {item.number}
              </span>
              <span className="block mt-0.5 text-[8.5px] sm:text-[11px] text-white/80 font-sans font-semibold tracking-wide leading-tight">
                {item.label}
              </span>
              {/* Divider */}
              {index < 3 && (
                <div className="absolute right-0 top-[12%] h-[76%] w-px bg-white/15" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trusted Bar */}
      <div className="absolute bottom-[38px] md:bottom-[46px] left-0 right-0 z-20 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[24px] text-[0.8rem] text-white/55 px-4 text-center">
        <span>Trusted by students worldwide</span>
        <div className="hidden md:block w-px h-[18px] bg-white/25" />
        <div className="flex flex-wrap gap-4 md:gap-[28px] justify-center items-center text-[1.4rem] opacity-90 drop-shadow-md">
          <span className="fi fi-gb !rounded-[2px]" title="United Kingdom" />
          <span className="fi fi-ie !rounded-[2px]" title="Ireland" />
          <span className="fi fi-ca !rounded-[2px]" title="Canada" />
          <span className="fi fi-de !rounded-[2px]" title="Germany" />
          <span className="fi fi-mt !rounded-[2px]" title="Malta" />
          <span className="fi fi-pl !rounded-[2px]" title="Poland" />
          <span className="fi fi-us !rounded-[2px]" title="United States" />
        </div>
      </div>


    </section>
  )
}
