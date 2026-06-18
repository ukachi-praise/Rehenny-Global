'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ScholarshipsPage = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="bg-[#071320] min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden font-heading">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-right z-0"
            style={{ backgroundImage: "url('/assets/scholarship_img.png')" }}
        />
        
        {/* Gradient Overlay for text readability */}
        <div
            className="absolute top-0 left-0 w-3/5 h-full z-10"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)' }}
        />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-[640px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Overline */}
            <motion.p variants={itemVariants} className="font-sans text-sm font-medium tracking-[3px] uppercase text-[#1a2a4a] mb-3 leading-relaxed">
                INVESTING IN TODAY.
                <br />
                EMPOWERING TOMORROW.
            </motion.p>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl xl:text-[72px] font-normal text-[#1a2a4a] mb-6 tracking-[-0.5px] leading-[1.1]">
                Scholarships
                <br />
                That Change Lives
            </motion.h1>

            {/* Gold underline accent */}
            <motion.div
              className="w-[120px] h-1 bg-[#c9a84c] rounded-sm mb-7"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              style={{ originX: 0 }}
            />

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="font-sans text-xl font-normal text-[#3a4a6a] mb-10 max-w-[540px] leading-relaxed">
                At Rhinny Global, we believe in the power of education to transform lives. Our scholarships are designed to support ambitious students, remove financial barriers, and help you build a brighter future—one opportunity at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div id="available-scholarships" className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center py-20 mt-8 bg-white/5 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-heading font-bold text-white">New Opportunities Coming Soon</h2>
                <div className="flex justify-center my-4">
                    <div className="w-20 h-1 bg-[#D4AF37]" />
                </div>
                <p className="text-[#B8C0CC] text-lg font-sans mt-4">We are currently curating a new list of exclusive scholarship opportunities. <br/> Stay tuned for updates!</p>
            </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default ScholarshipsPage;
