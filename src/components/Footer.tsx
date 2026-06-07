'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <footer className="relative z-30 bg-[#030c14] text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image overlay with perfect opacity control to ensure text is 100% visible */}
      <div 
        className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat pointer-events-none opacity-20 mix-blend-screen"
        style={{ backgroundImage: "url('/assets/Footer_bg.png')" }}
      />
      {/* Background ambient glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[250px] bg-[#1E3A8A]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[150px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= TRUST STRIP ================= */}
        <div className="w-full border-b border-white/10 pb-8 mb-12 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/60 font-sans tracking-wide uppercase font-semibold">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Trusted by Thousands of Students Worldwide</span>
          </div>
          <div className="hidden lg:block w-px h-4 bg-white/15" />
          
          <div className="flex items-center gap-1.5">
            <span className="text-[#D4AF37]">🎓</span>
            <span>Registered Education Agency</span>
          </div>
          <div className="hidden lg:block w-px h-4 bg-white/15" />
          
          <div className="flex items-center gap-1.5">
            <span className="text-[#D4AF37]">🏛️</span>
            <span>100+ Partner Universities</span>
          </div>
          <div className="hidden lg:block w-px h-4 bg-white/15" />
          
          <div className="flex items-center gap-1.5">
            <span className="text-[#D4AF37]">🛡️</span>
            <span>Secure & Verified Information</span>
          </div>
          <div className="hidden lg:block w-px h-4 bg-white/15" />
          
          <div className="flex items-center gap-1.5">
            <span className="text-[#D4AF37]">💬</span>
            <span>24/7 Student Support</span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 pb-16"
        >
          {/* Logo & Bio Column */}
          <motion.div variants={columnVariants} className="lg:col-span-4 flex flex-col items-start justify-between">
            <div className="flex flex-col items-start mb-6">
              {/* Logo container */}
              <div className="flex flex-col items-start mb-4">
                <img
                  src="/assets/Logo.png"
                  alt="Rhinny Global Logo"
                  className="h-[60px] sm:h-[68px] w-auto object-contain drop-shadow-md"
                />
                <span className="text-[7.5px] tracking-[0.2em] text-white/40 font-bold uppercase mt-1">
                  Study Abroad. Global Futures.
                </span>
              </div>

              {/* Simple Gold Divider Line */}
              <div className="w-20 h-[1.5px] bg-[#D4AF37] mb-4" />

              {/* Texts */}
              <div className="flex flex-col">
                <h5 className="text-white font-display font-[800] text-[13px] sm:text-[14px] tracking-[0.08em] uppercase mb-1.5">
                  Premium. Trusted. Global.
                </h5>
                <p className="text-white/60 text-[12px] sm:text-[13px] leading-relaxed max-w-[320px] font-sans">
                  Empowering students to study abroad and build a global future.
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  label: 'Facebook',
                  href: '#',
                  svg: (
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  )
                },
                {
                  label: 'Instagram',
                  href: '#',
                  svg: (
                    <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )
                },
                {
                  label: 'LinkedIn',
                  href: '#',
                  svg: (
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )
                },
                {
                  label: 'YouTube',
                  href: '#',
                  svg: (
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163c-.272-1.022-1.074-1.824-2.096-2.096c-1.85-.5-9.402-.5-9.402-.5s-7.552 0-9.402.5c-1.022.272-1.824 1.074-2.096 2.096c-.5 1.85-.5 9.402-.5 9.402s0 7.552.5 9.402c.272 1.022 1.074 1.824 2.096 2.096c1.85.5 9.402.5 9.402.5s7.552 0 9.402-.5c1.022-.272 1.824-1.074 2.096-2.096c.5-1.85.5-9.402.5-9.402s0-7.552-.5-9.402zm-14.193 10.511v-9.348l8.118 4.674l-8.118 4.674z" />
                    </svg>
                  )
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300 shadow-md group"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {social.svg}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={columnVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold text-[16px] tracking-wide mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {['Home', 'About Us', 'Destinations', 'Services', 'Scholarships', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-[14px] font-medium block w-max"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={columnVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold text-[16px] tracking-wide mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              {[
                'University Admission',
                'Visa Assistance',
                'Scholarships',
                'Pre-Departure Support',
                'Career Guidance'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-[14px] font-medium block w-max"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations Column */}
          <motion.div variants={columnVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold text-[16px] tracking-wide mb-6">
              Destinations
            </h4>
            <ul className="space-y-3.5">
              {['Canada', 'UK', 'USA', 'Australia', 'China', 'Europe'].map((destination) => (
                <li key={destination}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-[14px] font-medium block w-max"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={columnVariants} className="lg:col-span-2 relative lg:pl-6 lg:border-l border-white/10">
            <h4 className="text-white font-bold text-[16px] tracking-wide mb-6">
              Contact Us
            </h4>
            <div className="space-y-5">
              <div>
                <span className="block text-white/50 text-[11px] font-[800] tracking-wider uppercase mb-1">
                  Email
                </span>
                <a
                  href="mailto:info@rhinnyglobal.com"
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300 text-[14px] font-semibold break-all"
                >
                  info@rhinnyglobal.com
                </a>
              </div>
              <div>
                <span className="block text-white/50 text-[11px] font-[800] tracking-wider uppercase mb-1">
                  Phone
                </span>
                <a
                  href="tel:+14375883585"
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300 text-[14px] font-semibold"
                >
                  +1 (437) 588-3585
                </a>
              </div>
              <div>
                <span className="block text-white/50 text-[11px] font-[800] tracking-wider uppercase mb-1">
                  Address
                </span>
                <span className="text-white text-[14px] font-semibold block leading-relaxed mb-4">
                  Toronto, Ontario, Canada
                </span>
              </div>
              
              {/* WhatsApp chat pill */}
              <div className="pt-2">
                <a
                  href="https://wa.me/14375883585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white font-bold text-[10px] uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                >
                  <span>Chat on WhatsApp</span>
                  <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-[13px] tracking-wide text-center md:text-left">
            © 2025 Rhinny Global. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-[13px]">
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
