'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, ArrowRight, Bell, Calendar, Lightbulb, Gift } from 'lucide-react';

export default function BlogNewsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-[#0a192f] border-t border-white/5 w-full min-h-[440px] z-20"
    >
      
      {/* Elegant Curved Top Gold Border Sweep */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50 z-10" />
      
      {/* Decorative Background Glows */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#1E3A8A]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />

      <div className="w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
          
          {/* 1. Left Block: Student Graphic Framed with Exact Double Gold Arches */}
          <div className="lg:col-span-4 relative overflow-hidden min-h-[320px] lg:min-h-full">
            <img
              src="/assets/newsletter_students.png"
              alt="Rhinny Global Scholars studying together"
              className="w-full h-full object-cover scale-[1.08] translate-x-[-12px] object-center"
            />
            {/* Subtle overlay shading */}
            <div className="absolute inset-0 bg-[#071320]/15 pointer-events-none" />
            
            {/* Exact Double Gold Arches Overlays */}
            <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
              <svg className="w-full h-full text-[#0a192f] fill-current" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Left Side cover and gold slash */}
                <path d="M 0,0 L 15,0 C 12,40 6,70 0,100 Z" />
                <path d="M 15,0 C 12,40 6,70 0,100" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
                
                {/* Right Side cover and gold slash */}
                <path d="M 100,0 C 78,32 78,68 100,100 Z" />
                <path d="M 100,0 C 78,32 78,68 100,100" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

          {/* 2. Middle Block: Content Block */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left p-8 sm:p-10 lg:p-12 lg:pl-16">
            {/* Capsule Badge */}
            <div className="inline-block px-4 py-2 border border-[#D4AF37]/45 bg-[#050f19]/90 rounded-full text-[10px] font-bold text-[#D4AF37] tracking-[0.18em] uppercase mb-5 w-max font-sans shadow-inner">
              Join the Global Scholars Insider
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight font-display leading-tight">
              Get <span className="text-gold-glow text-[#D4AF37]">Exclusive</span> Updates <br />
              Delivered to You
            </h2>
            
            <p className="text-white/60 text-sm leading-relaxed font-sans max-w-[460px]">
              Join 12,000+ students receiving weekly scholarship alerts, visa updates, admission deadlines and expert tips.
            </p>
          </div>

          {/* 3. Right Block: Horizontal Badges and Unified Subscription Bar */}
          <div className="lg:col-span-4 flex flex-col justify-center p-8 sm:p-10 lg:p-12 lg:pl-0 lg:pr-16">
            
            {/* Horizontal Badges list with gold border squares and labels */}
            <div className="grid grid-cols-2 xl:flex xl:flex-wrap xl:items-center gap-4 mb-7">
              {[
                { Icon: Bell, label: 'Scholarship', sub: 'Alerts' },
                { Icon: Globe, label: 'Visa', sub: 'Updates' },
                { Icon: Calendar, label: 'Admission', sub: 'Deadlines' },
                { Icon: Lightbulb, label: 'Expert', sub: 'Tips' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 cursor-default group">
                  <div className="w-10 h-10 rounded-xl border border-[#D4AF37]/35 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <item.Icon className="w-4.5 h-4.5 text-[#D4AF37]" />
                  </div>
                  <div className="text-left font-sans leading-[1.1]">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">{item.label}</p>
                    <p className="text-[10px] text-white/55">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Combined dark subscription box */}
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#050f19]/80 border border-white/10 rounded-2xl p-2.5 gap-2.5 relative z-20 w-full shadow-2xl mb-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center flex-1 px-3 py-1">
                <Mail className="h-5 w-5 text-[#B8C0CC] mr-2 shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-none text-white placeholder-white/35 focus:outline-none py-3 text-sm font-sans"
                />
              </div>
              
              <div className="hidden sm:block h-6 w-px bg-white/15 shrink-0" />
              
              <div className="flex items-center px-3 py-1 relative">
                <select defaultValue="" className="bg-transparent border-none text-[#B8C0CC] focus:outline-none text-sm font-sans pr-7 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%20fill%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5H7z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.15rem_center] bg-no-repeat w-full sm:w-32 [&>option]:bg-[#071320] [&>option]:text-white">
                  <option value="" disabled>Select Country</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="australia">Australia</option>
                  <option value="china">China</option>
                </select>
              </div>
              
              <button type="submit" className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:from-[#c5a12d] hover:to-[#ebd68d] text-black font-extrabold px-6 py-3.5 rounded-xl transition-all shrink-0 font-sans text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.15)] flex items-center justify-center gap-2">
                <span>Subscribe Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Gift capsule details */}
            <div className="flex items-center gap-2 text-sm font-sans text-white/80 pl-1">
              <Gift className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <p>
                Get our <span className="font-bold text-[#D4AF37]">FREE 2026 Scholarship Guide</span> instantly!
              </p>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}
