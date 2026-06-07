
'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Plane,
  ShieldCheck,
  Building2,
  Briefcase,
  ArrowRight,
  Home,
  Users,
  MapPin,
  Clock
} from 'lucide-react'
import { Button } from '@/components/button'
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'

// Hero content
const heroServices = [
  { title: "University Admissions", icon: GraduationCap },
  { title: "Visa Support", icon: Plane },
  { title: "Scholarship Assistance", icon: ShieldCheck },
  { title: "Accommodation Support", icon: Home },
  { title: "Career Guidance", icon: Briefcase }
]

// Services list for the detailed section
const detailedServices = [
  {
    id: "01",
    title: "University Admissions",
    description: "We help students secure admission into top universities and programs that align with their academic goals and aspirations.",
    points: ["University Shortlisting", "Application Guidance", "SOP & LOR Guidance", "Offer Consultation"],
  },
  {
    id: "02",
    title: "Scholarship Assistance",
    description: "Unlock global scholarships with our expert guidance and support to secure your dream education.",
    points: ["Scholarship Search", "Application Support", "Eligibility Assessment", "Deadline Tracking"],
  },
  {
    id: "03",
    title: "Visa Support",
    description: "Get expert guidance for a smooth and hassle-free visa application process for your dream destination.",
    points: ["Visa Consultation", "Document Checklist", "Interview Preparation", "Visa Success Support"],
  },
  {
    id: "04",
    title: "Accommodation Assistance",
    description: "We help you find comfortable, safe, and affordable accommodation near your campus or university.",
    points: ["On-Campus / Off-Campus Options", "Pre-Vetted Accommodations", "24/7 Support", "Safety Guarantee"],
  },
  {
    id: "05",
    title: "Career Pathway Guidance",
    description: "We guide you to build a successful global career with the right skills and opportunities.",
    points: ["Career Counselling", "Resume Building", "Job Search Guidance", "Post-Study Guidance"],
  },
  {
    id: "06",
    title: "Consultation Services",
    description: "Get personalized advice from our expert education consultants to kickstart your study abroad journey.",
    points: ["1-on-1 Expert Session", "Personalized Roadmap", "Profile Evaluation", "Free Consultation"],
  }
]

// Stats data
const stats = [
  { number: "5000+", label: "Successful Students", icon: Users },
  { number: "98%", label: "Visa Success Rate", icon: ShieldCheck },
  { number: "15+", label: "Countries Covered", icon: MapPin },
  { number: "800+", label: "University Partners", icon: Building2 },
  { number: "24/7", label: "Expert Support", icon: Clock }
]

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
}

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={textVariants}>
              <span className="text-[#C89F2E] tracking-[0.2em] font-sans font-bold text-xs sm:text-sm uppercase mb-5 block">
                OUR SERVICES
              </span>
              <h1 className="text-gray-900 font-display font-[800] text-4xl sm:text-5xl lg:text-[56px] leading-tight tracking-tight mb-6">
                Guiding You Every Step <br />
                Towards <span className="text-[#C89F2E]">Global Success</span>
              </h1>
              <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed mb-8">
                From choosing the right university to finding your dream career, we provide end-to-end expert support for a smooth and successful journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <LiquidMetalButton label="Book Free Consultation" />
                <Button variant="secondary" className="px-8 py-4">Explore Destinations</Button>
              </div>

              {/* Small stats row */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-500 text-xs font-bold">
                      S{i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-gray-900 font-bold">5000+ Students</p>
                  <p className="text-gray-500 text-sm">Trust us every year</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={imageVariants} className="relative">
              {/* Hero Image */}
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/service_hero.png" 
                  alt="Our Services" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating service badges */}
              {heroServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="absolute bg-white shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100"
                  style={{
                    top: index === 0 ? '10%' : index === 1 ? '20%' : index === 2 ? '70%' : index === 3 ? '60%' : '30%',
                    right: index === 0 ? '-5%' : index === 1 ? '10%' : index === 2 ? '-10%' : index === 3 ? '5%' : 'auto',
                    left: index === 4 ? '-10%' : 'auto'
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#C89F2E]/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-[#C89F2E]" />
                  </div>
                  <span className="text-gray-900 font-semibold text-sm">{service.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Offer Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={textVariants} className="text-center mb-16">
            <span className="text-[#C89F2E] tracking-[0.2em] font-sans font-bold text-xs sm:text-sm uppercase mb-4 block">
              WHAT WE OFFER
            </span>
            <h2 className="text-gray-900 font-display font-[800] text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Our Services
            </h2>
          </motion.div>

          <div className="space-y-16">
            {detailedServices.map((service, index) => {
              // Map service titles to their images
              const imageMap: Record<string, string> = {
                "University Admissions": "/assets/university_admission.avif",
                "Scholarship Assistance": "/assets/Schloarship_assistance.jfif",
                "Visa Support": "/assets/visa support.jfif",
                "Accommodation Assistance": "/assets/accomodation.jpg",
                "Career Pathway Guidance": "/assets/Career_pathway.png",
                "Consultation Services": "/assets/Consultation.jpeg",
              };
              
              return (
              <motion.div
                key={service.id}
                variants={sectionVariants}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div variants={imageVariants} className="lg:w-1/2">
                  <div className="relative">
                    <div className="w-full aspect-[4/3] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                      <img 
                        src={imageMap[service.title] || "/assets/Logo.png"} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {index % 2 === 0 ? (
                      <div className="absolute -right-6 -bottom-6 w-32 h-40 bg-[#1E3A8A]/15 rounded-3xl -z-10" />
                    ) : (
                      <div className="absolute -left-6 -bottom-6 w-32 h-40 bg-[#C89F2E]/15 rounded-3xl -z-10" />
                    )}
                  </div>
                </motion.div>
                <motion.div variants={textVariants} className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#C89F2E]/10 flex items-center justify-center">
                      <span className="text-[#C89F2E] font-bold text-xl">{service.id}</span>
                    </div>
                  </div>
                  <h3 className="text-gray-900 font-display font-[800] text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-6">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.points.map((point, idx) => (
                      <motion.li key={idx} variants={textVariants} transition={{ delay: idx * 0.08 }} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#C89F2E]/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#C89F2E]" />
                        </div>
                        <span className="text-gray-700 font-sans text-base leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={textVariants} className="text-center mb-12">
            <span className="text-[#C89F2E] tracking-[0.2em] font-sans font-bold text-xs sm:text-sm uppercase mb-4 block">
              WHY CHOOSE RHINNY GLOBAL
            </span>
            <h2 className="text-gray-900 font-display font-[800] text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Your Dream. Our Commitment.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                transition={{ delay: index * 0.12 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C89F2E]/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#C89F2E]" />
                </div>
                <div className="text-gray-900 font-bold text-2xl mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071320] to-[#0c1f30] p-8 lg:p-16"
          >
            {/* Background map placeholder */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-white font-display font-[800] text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
                  Let's Start Your<br />Global Journey
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  Book a free consultation today and take your first step towards studying abroad.
                </p>
              </div>
              <LiquidMetalButton label="Book Free Consultation" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
