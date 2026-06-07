'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { countries } from '@/lib/countries'
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'

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
const FeatureIcon = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-9 h-9 rounded-full border border-[rgba(223,178,96,0.3)] bg-[rgba(6,17,39,0.5)] flex items-center justify-center text-[#dfb260] ${className}`} style={{ fontSize: "14px" }}>
    {children}
  </div>
)

const ContactPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.name === 'Nigeria') || countries[0]);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const phoneDropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    residence: '',
    source: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setStatusMessage('Booking...');

    const submissionData = {
        ...formData,
        phone: `${selectedCountry?.code} ${formData.phone}`,
      };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setStatusMessage('Thank you! Your consultation has been booked successfully.');
        setFormData({ // Reset form
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            nationality: '',
            residence: '',
            source: '',
            message: '',
        });
      } else {
        setFormStatus('error');
        setStatusMessage(responseData.message || 'An error occurred.');
      }
    } catch (error) {
      setFormStatus('error');
      setStatusMessage('There was a problem connecting to the server. Please try again.');
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
      
      <style>{`
        @media (min-width: 768px) {
          .contact-section {
            background-position: center center !important;
          }
        }
      `}</style>
      
      <section 
        className="contact-section relative w-full min-h-screen pt-28 px-4 py-8 flex flex-col md:flex-row justify-center items-center gap-10 overflow-hidden bg-[#020b1e] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/contact_bg.jpg')`,
          backgroundPosition: '70% center'
        }}
      >
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-[40px] items-center mx-auto"
        >
          {/* LEFT TEXT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col gap-4 lg:items-start items-center text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 text-2xl font-bold tracking-[1px] text-white">
              <i className="fa-solid fa-graduation-cap text-[#dfb260]"></i>
              RHINNY<span className="text-[#dfb260]">GLOBAL</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-2 border border-[#dfb260] text-[#dfb260] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[1.5px] bg-[rgba(223,178,96,0.05)] self-center lg:self-start">
              <i className="fa-solid fa-headset"></i>
              Free Consultation
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-[36px] md:text-[44px] leading-[1.2] font-bold text-white">
              Speak to a<br />Rhinny Global<span className="text-[#dfb260] block mt-1">Counsellor</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-white/90 text-[15px] leading-[1.6] max-w-[450px]">
              Get expert guidance on universities, courses, admissions, scholarships, and everything you need to study abroad.
            </motion.p>

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
                  className="flex items-start gap-3 text-left"
                >
                  <FeatureIcon>
                    <i className={`fa-solid ${feature.icon}`}></i>
                  </FeatureIcon>
                  <div className="text-white">
                    <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
                    <p className="text-white/80 text-xs leading-[1.5]">{feature.text}</p>
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
            className="relative w-full"
          >
            <div className="relative bg-[rgba(13,27,42,0.6)] rounded-[24px] p-6 sm:p-[30px] backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full">
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

              <motion.div variants={itemVariants} className="flex justify-center items-center gap-8 mb-[35px]">
                <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                  <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-xs font-semibold border border-[#dfb260] text-[#dfb260]">1</div>
                  Your Details
                </div>
                <div className="h-[1px] w-[60px] bg-[rgba(255,255,255,0.15)]"></div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-white/70">
                  <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-xs font-semibold border border-white/50 text-white/50">2</div>
                  Your Goals
                </div>
              </motion.div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <motion.div 
                    variants={itemVariants}
                    className="relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-user absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm placeholder-white/60"
                    />
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-user absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm placeholder-white/60"
                    />
                  </motion.div>

                  <motion.div
                    ref={phoneDropdownRef}
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
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
                        name="phone"
                        placeholder="Phone Number *"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 w-full bg-transparent border-none outline-none text-white px-3 py-4 text-sm placeholder-white/60"
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-envelope absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm placeholder-white/60"
                    />
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-flag absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="Nationality *"
                      required
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm placeholder-white/60"
                    />
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-location-dot absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <input
                      type="text"
                      name="residence"
                      placeholder="Country of Residence *"
                      required
                      value={formData.residence}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm placeholder-white/60"
                    />
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-solid fa-bullhorn absolute left-4 text-[#dfb260] text-sm opacity-80"></i>
                    <select 
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 py-4 text-sm appearance-none cursor-pointer placeholder-white/60"
                    >
                      <option value="" disabled className="bg-[#020b1e]">How did you hear about us?</option>
                      <option value="google" className="bg-[#020b1e]">Google</option>
                      <option value="facebook" className="bg-[#020b1e]">Facebook</option>
                      <option value="instagram" className="bg-[#020b1e]">Instagram</option>
                      <option value="referral" className="bg-[#020b1e]">Referral</option>
                      <option value="other" className="bg-[#020b1e]">Other</option>
                    </select>
                    <i className="fa-solid fa-chevron-down absolute right-4 text-[#8b9bb4] pointer-events-none"></i>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2 relative bg-[rgba(27,38,59,0.4)] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-start transition-all duration-300 focus-within:border-[rgba(223,178,96,0.5)] focus-within:shadow-[0_0_10px_rgba(223,178,96,0.15)]"
                  >
                    <i className="fa-regular fa-comment-dots absolute left-4 top-4.5 text-[#dfb260] text-sm opacity-80"></i>
                    <textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-white pl-12 pt-4 pb-4 text-sm resize-none h-25 placeholder-white/60"
                    ></textarea>
                  </motion.div>
                </div>
                
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <LiquidMetalButton 
                    label={formStatus === 'sending' ? 'Booking...' : "Book Free Consultation"} 
                    className="w-full"
                    onClick={() => {}} // Form submission is handled by the onSubmit handler
                  />
                </motion.div>


                {/* Status Messages */}
                {(formStatus === 'success' || formStatus === 'error') && (
                  <motion.div 
                    variants={itemVariants} 
                    className={`text-center text-sm mt-4 ${formStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {statusMessage}
                  </motion.div>
                )}

                <motion.div variants={itemVariants} className="text-center text-xs text-white/70 mt-5 flex items-center justify-center gap-1.5">
                  <i className="fa-solid fa-lock text-[11px]"></i>
                  Your information is safe with us. We respect your privacy.
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage