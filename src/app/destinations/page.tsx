'use client'
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DestinationCard } from '@/components/ui/card-21';
import { motion } from 'framer-motion';
import { destinations } from '@/data/destinations';
import dynamic from 'next/dynamic';

const LiquidMetalButton = dynamic(() => import('@/components/ui/liquid-metal-button').then(mod => mod.LiquidMetalButton), {
  ssr: false,
});

export default function DestinationsPage() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <main className="bg-white min-h-screen flex flex-col font-montserrat">
      <Navbar />

      <header className="relative pt-40 pb-20 overflow-hidden bg-cover bg-center">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-playfair font-bold text-[#1a1a24] leading-tight mb-4"
          >
            Explore Your Global Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-lg text-[#555566] max-w-3xl mx-auto"
          >
            Discover world-class universities in the most sought-after study destinations. Each country offers a unique blend of culture, innovation, and academic excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-12 p-8 bg-white/70 backdrop-blur-lg border border-gray-200/80 rounded-3xl max-w-3xl mx-auto text-left shadow-xl"
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
        </div>
      </header>

      {/* Grid Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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
                  flagIcon={dest.flag}
                  stats={dest.stats}
                  href={`/destinations/${dest.name.toLowerCase().replace(/ /g, '-')}`}
                  themeColor={dest.themeColor}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f9f9f9] border-y border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a1a24] mb-6">
            Not sure which destination is right for you?
          </h2>
          <p className="text-[#555566] mb-10 max-w-2xl mx-auto">
            Our expert consultants provide personalized guidance based on your academic background and career goals.
          </p>
          <Link href="/contact">
            <LiquidMetalButton label="Get Free Consultation" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
