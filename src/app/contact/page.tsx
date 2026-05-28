'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

// Custom components
const FeatureIcon = ({ children, className = "" }) => (
  <div className={`w-9 h-9 rounded-full border border-[rgba(223,178,96,0.3)] bg-[rgba(6,17,39,0.5)] flex items-center justify-center text-[#dfb260] ${className}`} style={{ fontSize: "14px" }}>
    {children}
  </div>
)

const ContactPage = () => {
  // Country code options
  const countries = [
    // Nigeria and African Countries
    { code: '+234', flag: 'ng', name: 'Nigeria' },
    { code: '+233', flag: 'gh', name: 'Ghana' },
    { code: '+254', flag: 'ke', name: 'Kenya' },
    { code: '+27', flag: 'za', name: 'South Africa' },
    { code: '+20', flag: 'eg', name: 'Egypt' },
    { code: '+251', flag: 'et', name: 'Ethiopia' },
    { code: '+256', flag: 'ug', name: 'Uganda' },
    { code: '+255', flag: 'tz', name: 'Tanzania' },
    { code: '+212', flag: 'ma', name: 'Morocco' },
    { code: '+216', flag: 'tn', name: 'Tunisia' },
    
    // European Countries
    { code: '+44', flag: 'gb', name: 'United Kingdom' },
    { code: '+49', flag: 'de', name: 'Germany' },
    { code: '+33', flag: 'fr', name: 'France' },
    { code: '+39', flag: 'it', name: 'Italy' },
    { code: '+34', flag: 'es', name: 'Spain' },
    { code: '+31', flag: 'nl', name: 'Netherlands' },
    { code: '+32', flag: 'be', name: 'Belgium' },
    { code: '+46', flag: 'se', name: 'Sweden' },
    { code: '+47', flag: 'no', name: 'Norway' },
    { code: '+41', flag: 'ch', name: 'Switzerland' },
    { code: '+43', flag: 'at', name: 'Austria' },
    { code: '+353', flag: 'ie', name: 'Ireland' },
    { code: '+351', flag: 'pt', name: 'Portugal' },
    { code: '+48', flag: 'pl', name: 'Poland' },
    { code: '+420', flag: 'cz', name: 'Czech Republic' },
    
    // North American Countries
    { code: '+1', flag: 'us', name: 'United States' },
    { code: '+1', flag: 'ca', name: 'Canada' },
    { code: '+52', flag: 'mx', name: 'Mexico' },
    
    // Asian Countries
    { code: '+90', flag: 'tr', name: 'Turkey' },
    { code: '+86', flag: 'cn', name: 'China' },
    { code: '+91', flag: 'in', name: 'India' },
    { code: '+65', flag: 'sg', name: 'Singapore' },
    { code: '+82', flag: 'kr', name: 'South Korea' },
    { code: '+81', flag: 'jp', name: 'Japan' },
    { code: '+971', flag: 'ae', name: 'United Arab Emirates' },
    { code: '+966', flag: 'sa', name: 'Saudi Arabia' },
    { code: '+92', flag: 'pk', name: 'Pakistan' },
    { code: '+880', flag: 'bd', name: 'Bangladesh' },
    { code: '+60', flag: 'my', name: 'Malaysia' },
    { code: '+63', flag: 'ph', name: 'Philippines' },
    { code: '+62', flag: 'id', name: 'Indonesia' },
    { code: '+66', flag: 'th', name: 'Thailand' },
    
    // Australasia
    { code: '+61', flag: 'au', name: 'Australia' },
    { code: '+64', flag: 'nz', name: 'New Zealand' },
    
    // South America
    { code: '+55', flag: 'br', name: 'Brazil' },
    { code: '+54', flag: 'ar', name: 'Argentina' },
    { code: '+56', flag: 'cl', name: 'Chile' },
    { code: '+57', flag: 'co', name: 'Colombia' },
  ];

  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Responsive background positioning */}
      <style>{`
        @media (min-width: 768px) {
          .contact-section {
            background-position: center center !important;
          }
        }
      `}</style>
      
      <section 
        className="contact-section relative w-full min-h-screen pt-28 px-4 md:px-[60px] py-8 flex flex-col md:flex-row justify-center items-center gap-10 overflow-hidden bg-[#020b1e] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/contact_bg.jpg')`,
          backgroundPosition: '70% center'
        }}
      >
        
        {/* Content wrapper with z-index */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[35px] items-center"
        >
          {/* LEFT TEXT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col gap-4 lg:items-start items-center text-center lg:text-left"
          >
            {/* Logo Area */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 text-2xl font-bold tracking-[1px]">
              <i className="fa-solid fa-graduation-cap text-[#dfb260]"></i>
              RHINNY<span className="text-[#dfb260]">GLOBAL</span>
            </motion.div>

            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 border border-[#dfb260] text-[#dfb260] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[1.5px] bg-[rgba(223,178,96,0.05)] self-start lg:self-start">
              <i className="fa-solid fa-headset"></i>
              Free Consultation
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-[36px] md:text-[44px] leading-[1.2] font-bold">
              Speak to a<br />Rhinny Global<span className="text-[#dfb260] block mt-1">Counsellor</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-[#8b9bb4] text-[15px] leading-[1.6] max-w-[450px]">
              Get expert guidance on universities, courses, admissions, scholarships, and everything you need to study abroad.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5 mt-2">
              {[ 
                { icon: 'fa-user-graduate', title: 'Personalized Guidance', text: 'Tailored advice based on your profile and aspirations.' },
                { icon: 'fa-globe', title: 'Global University Network', text: 'Access to 50+ top universities worldwide.' },
                { icon: 'fa-circle-check', title: 'End-to-End Support', text: 'From shortlisting to visa & post-arrival support.' }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FeatureIcon>
                    <i className={`fa-solid ${feature.icon}`}></i>
                  </FeatureIcon>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
                    <p className="text-[#8b9bb4] text-xs leading-[1.5]">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT FORM CARD SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative"
          >
            <motion.div 
              variants={itemVariants}
              className="relative bg-[rgba(6,17,39,0.75)] rounded-[24px] p-[30px] backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Luxury Gold Border */}
              <div
                className="absolute inset-0 rounded-[24px] pointer-events-none"
                style={{
                  padding: '1.5px',
                  background: 'linear-gradient(135deg, rgba(223,178,96,0.4) 0%, rgba(255,255,255,0.05) 40%, rgba(223,178,96,0.2) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              ></div>

              {/* Stepper Header */}
              <motion.div variants={itemVariants} className="flex justify-center items-center gap-8 mb-[35px]">
                <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                  <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-xs font-semibold border border-[#dfb260] text-[#dfb260]">1</div>
                  Your Details
                </div>
                <div className="h-[1px] w-[60px] bg-[rgba(255,255,255,0.15)]"></div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#8b9bb4]">
                  <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-xs font-semibold border border-[#8b9bb4] text-[#8b9bb4]">2</div>
                  Your Goals
                </div>
              </motion.div>

              {/* Form Grid */}
              <form action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Full Name Field */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-user absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm"
                    />
                  </motion.div>

                  {/* Phone Number Field */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-phone absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <div className="flex items-center w-full pl-12">
                      <div className="flex items-center gap-1.5 text-sm text-white border-r border-[rgba(255,255,255,0.1)] pr-2">
                        <img 
                          src={`https://flagcdn.com/w20/${selectedCountry.flag}.png`} 
                          alt={`${selectedCountry.name} Flag`} 
                          className="w-4.5 h-3 object-cover rounded-sm" 
                        />
                        <select 
                          value={`${selectedCountry.code}-${selectedCountry.flag}`}
                          onChange={(e) => {
                            const [code, flag] = e.target.value.split('-');
                            const country = countries.find(c => c.code === code && c.flag === flag);
                            if (country) setSelectedCountry(country);
                          }}
                          className="bg-transparent border-none outline-none text-white text-sm cursor-pointer"
                        >
                          {countries.map((country) => (
                            <option 
                              key={`${country.code}-${country.flag}`} 
                              value={`${country.code}-${country.flag}`}
                              className="bg-[#020b1e]"
                            >
                              {country.name} ({country.code})
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        className="flex-1 bg-transparent border-none outline-none text-white pl-2 py-4 text-sm"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-envelope absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm"
                    />
                  </motion.div>

                  {/* Current Location Field */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-location-dot absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      placeholder="Your Current Location *"
                      required
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm"
                    />
                  </motion.div>

                  {/* Country Selection Dropdown */}
                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-graduation-cap absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <select required className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm appearance-none cursor-pointer">
                      <option value="" disabled selected className="bg-[#020b1e]">Country You Wish To Study In *</option>
                      <option value="uk" className="bg-[#020b1e]">United Kingdom</option>
                      <option value="us" className="bg-[#020b1e]">United States</option>
                      <option value="ca" className="bg-[#020b1e]">Canada</option>
                    </select>
                    <i className="fa-solid fa-chevron-down absolute right-4 text-[#8b9bb4] pointer-events-none"></i>
                  </motion.div>

                  {/* University of Interest Field */}
                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-building-columns absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      placeholder="University of Interest"
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm"
                    />
                  </motion.div>

                  {/* Funding Dropdown */}
                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-wallet absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <select required className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm appearance-none cursor-pointer">
                      <option value="" disabled selected className="bg-[#020b1e]">How Do You Plan To Fund Your Studies? *</option>
                      <option value="self" className="bg-[#020b1e]">Self Funded</option>
                      <option value="scholarship" className="bg-[#020b1e]">Scholarship</option>
                      <option value="sponsor" className="bg-[#020b1e]">Sponsor</option>
                    </select>
                    <i className="fa-solid fa-chevron-down absolute right-4 text-[#8b9bb4] pointer-events-none"></i>
                  </motion.div>

                  {/* Questions Text Area */}
                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-start transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-comment-dots absolute left-4 top-4.5 text-[#dfb260] text-sm opacity-80"></i>
                    <textarea
                      placeholder="Do You Have Any Questions Before We Contact You?"
                      className="w-full bg-transparent border-none outline-none text-white pl-12 pt-4 pb-4 text-sm resize-none h-25"
                    ></textarea>
                  </motion.div>
                </div>

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f5d797] via-[#dfb260] to-[#b88a3b] border-none outline-none py-4 px-6 rounded-[12px] text-base font-bold text-[#0b162a] cursor-pointer flex items-center justify-center gap-2.5 mt-6 shadow-[0_4px_20px_rgba(223,178,96,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(223,178,96,0.45)] transition-transform duration-200"
                >
                  Book Free Consultation
                  <div className="bg-[#0b162a] text-[#dfb260] w-[22px] h-[22px] rounded-full flex items-center justify-center text-xs">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </motion.button>

                {/* Privacy Footer */}
                <motion.div variants={itemVariants} className="text-center text-xs text-[#8b9bb4] mt-5 flex items-center justify-center gap-1.5">
                  <i className="fa-solid fa-lock text-[11px]"></i>
                  Your information is safe with us. We respect your privacy.
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage

