'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { countries } from '@/lib/countries'

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
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.name === 'Nigeria'));
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const phoneDropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    currentLocation: '',
    studyDestination: '',
    universityOfInterest: '',
    fundingSource: '',
    questions: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: `${selectedCountry?.code} ${formData.phoneNumber}`
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          currentLocation: '',
          studyDestination: '',
          universityOfInterest: '',
          fundingSource: '',
          questions: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (phoneDropdownRef.current && !(phoneDropdownRef.current as any).contains(event.target)) {
        setIsPhoneDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [phoneDropdownRef]);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );


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
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Full Name Field */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-user absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm"
                    />
                  </motion.div>

                  {/* Phone Number Field */}
                  <motion.div
                    ref={phoneDropdownRef}
                    variants={itemVariants}
                    className="relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-phone absolute left-4 text-[#dfb260] text-sm opacity-80 z-10"></i>
                    <div className="flex items-center w-full pl-12">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsPhoneDropdownOpen(prev => !prev)}
                          className="flex items-center gap-2 text-sm text-white border-r border-[rgba(255,255,255,0.1)] pr-3 py-4 h-full"
                        >
                          <img
                            src={`https://flagcdn.com/w20/${selectedCountry?.flag}.png`}
                            alt={`${selectedCountry?.name} Flag`}
                            className="w-5 h-auto object-cover rounded-sm"
                          />
                          <span className="text-sm">{selectedCountry?.code}</span>
                          <i className={`fa-solid fa-chevron-down text-[10px] text-[#8b9bb4] transition-transform duration-200 ${isPhoneDropdownOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                        {isPhoneDropdownOpen && (
                          <div className="absolute top-full mt-2 -left-4 sm:-left-8 z-20 w-64 sm:w-72 bg-[#061127] border border-[rgba(255,255,255,0.1)] rounded-[10px] shadow-lg overflow-hidden">
                            <div className="p-2">
                              <input
                                type="text"
                                placeholder="Search country..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-[rgba(10,25,54,0.8)] border border-[rgba(255,255,255,0.1)] rounded-md px-3 py-2 text-sm text-white outline-none focus:border-[rgba(223,178,96,0.5)]"
                              />
                            </div>
                            <ul className="max-h-48 overflow-y-auto">
                              {filteredCountries.length > 0 ? filteredCountries.map((country) => (
                                <li
                                  key={`${country.code}-${country.flag}`}
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setIsPhoneDropdownOpen(false);
                                    setSearchTerm('');
                                  }}
                                  className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-[rgba(223,178,96,0.1)]"
                                >
                                  <img
                                    src={`https://flagcdn.com/w20/${country.flag}.png`}
                                    alt={`${country.name} Flag`}
                                    className="w-5 h-auto object-cover rounded-sm"
                                  />
                                  <span className="text-white text-sm flex-1">{country.name}</span>
                                  <span className="text-[#8b9bb4] text-sm">{country.code}</span>
                                </li>
                              )) : <li className="text-center text-sm text-[#8b9bb4] py-3">No country found.</li>}
                            </ul>
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number *"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="flex-1 w-full bg-transparent border-none outline-none text-white px-3 py-4 text-sm"
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
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
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
                      name="currentLocation"
                      placeholder="Your Current Location *"
                      required
                      value={formData.currentLocation}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm"
                    />
                  </motion.div>

                  {/* Country Selection Dropdown */}
                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-graduation-cap absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <select 
                      name="studyDestination"
                      required 
                      value={formData.studyDestination}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#020b1e]">Country You Wish To Study In *</option>
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
                      name="universityOfInterest"
                      placeholder="University of Interest"
                      value={formData.universityOfInterest}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm"
                    />
                  </motion.div>

                  {/* Funding Dropdown */}
                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(10,25,54,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-wallet absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <select 
                      name="fundingSource"
                      required 
                      value={formData.fundingSource}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#020b1e]">How Do You Plan To Fund Your Studies? *</option>
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
                      name="questions"
                      placeholder="Do You Have Any Questions Before We Contact You?"
                      value={formData.questions}
                      onChange={handleChange}
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
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-[#f5d797] via-[#dfb260] to-[#b88a3b] border-none outline-none py-4 px-6 rounded-[12px] text-base font-bold text-[#0b162a] cursor-pointer flex items-center justify-center gap-2.5 mt-6 shadow-[0_4px_20px_rgba(223,178,96,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(223,178,96,0.45)] transition-transform duration-200"
                >
                  {formStatus === 'sending' ? 'Booking...' : 'Book Free Consultation'}
                  <div className="bg-[#0b162a] text-[#dfb260] w-[22px] h-[22px] rounded-full flex items-center justify-center text-xs">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </motion.button>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div variants={itemVariants} className="text-center text-sm text-green-400 mt-4">
                    Thank you! Your consultation has been booked successfully.
                  </motion.div>
                )}
                {formStatus === 'error' && (
                  <motion.div variants={itemVariants} className="text-center text-sm text-red-400 mt-4">
                    Something went wrong. Please try again later.
                  </motion.div>
                )}

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
