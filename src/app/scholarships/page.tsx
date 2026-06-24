'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { scholarships } from "@/data/scholarships";
import ScholarshipCard from "@/components/ui/ScholarshipCard";
import Link from 'next/link';

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
        <Image
            src="/assets/scholarship_img.png"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            alt="Scholarship background"
            priority
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

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="mt-12 p-8 bg-white/70 backdrop-blur-lg border border-gray-200/80 rounded-3xl max-w-3xl text-left shadow-xl"
            >
                <h3 className="text-2xl font-bold font-playfair text-[#1a1a24] mb-3">Student Loans & Financing</h3>
                <p className="text-gray-700 mb-5 leading-relaxed">
                    Worried about tuition fees and living costs? You don't have to pay everything upfront. Through our trusted financial partners, Rhinny Global students can now access student loans to fund their education abroad.
                </p>
                <div className="mb-6">
                    <p className="font-semibold text-gray-800 mb-3">Eligible Destinations:</p>
                    <div className="flex flex-wrap items-center gap-4 text-base">
                        <span className="flex items-center gap-2 bg-gray-50 py-2 px-4 rounded-full font-medium border border-gray-200"><span className="fi fi-gb"></span>UK</span>
                        <span className="flex items-center gap-2 bg-gray-50 py-2 px-4 rounded-full font-medium border border-gray-200"><span className="fi fi-ca"></span>Canada</span>
                        <span className="flex items-center gap-2 bg-gray-50 py-2 px-4 rounded-full font-medium border border-gray-200"><span className="fi fi-us"></span>US</span>
                    </div>
                </div>
                <Link href="/contact" className="inline-block bg-[#c4a35a] text-[#0a0a0f] font-bold py-3 px-8 rounded-xl hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md">
                    Check Your Eligibility
                </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
       <div className="bg-gray-100 text-gray-800 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold font-display text-gray-900 mb-4">Available Scholarships</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our curated list of scholarships to find the right opportunity for your study abroad journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scholarships.map(scholarship => (
                        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                    ))}
                </div>
            </div>
        </div>
      
      <Footer />
    </main>
  );
};

export default ScholarshipsPage;