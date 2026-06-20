"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from '@/components/SectionDivider';
import { motion, AnimatePresence, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────
   TESTIMONIAL DATA
   Replace image paths with actual uploads later.
─────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    image: "/assets/Testimonials/African_female1.jpg",
    avatarInitials: "AO",
    origin: "Lagos, Nigeria",
    originFlag: "🇳🇬",
    destination: "University of Toronto, Canada",
    destinationFlag: "🇨🇦",
    programme: "MSc Computer Science",
    fullProgramme: "Master of Science in Computer Science",
    intake: "September 2024",
    quote: "I had no idea where to start with Canadian applications. Rhinny Global gave me a shortlist of 5 universities within 48 hours and walked me through every single document. I got my offer letter in 6 weeks.",
    bio: "Adaeze came to us overwhelmed with visa concerns and confusing requirements. Our team guided her through every step — from document preparation to interview coaching. Today, she's pursuing her MSc in Canada and building the future she dreamed of.",
    rating: 5,
    visaStatus: "Canadian Study Permit - 2024",
    duration: "6 Weeks from Application to Offer",
    badgeIcon: "cap",
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    image: "/assets/Testimonials/African_male1.jpg",
    avatarInitials: "EN",
    origin: "Abuja, Nigeria",
    originFlag: "🇳🇬",
    destination: "The University of Manchester, UK",
    destinationFlag: "🇬🇧",
    programme: "MBA",
    fullProgramme: "Master of Business Administration (MBA)",
    intake: "January 2024",
    quote: "The visa process was what scared me most. My counsellor at Rhinny prepared me for every question, reviewed my documents three times, and I got my UK visa approved on the first try!",
    bio: "Emeka came to us overwhelmed with visa concerns and confusing requirements. Our team guided him through every step — from document preparation to interview coaching. Today, he's pursuing his MBA in the UK and building the future he dreamed of.",
    rating: 5,
    visaStatus: "UK Student Visa - 2024",
    duration: "3 Months from Consultation to Visa Approval",
    badgeIcon: "check",
  },
  {
    id: 3,
    name: "Wei Chen",
    image: "/assets/Testimonials/asian.jpg",
    avatarInitials: "WC",
    origin: "Shanghai, China",
    originFlag: "🇨🇳",
    destination: "Australian National University, Australia",
    destinationFlag: "🇦🇺",
    programme: "BSc Engineering",
    fullProgramme: "Bachelor of Science in Engineering",
    intake: "February 2024",
    quote: "I applied to Australia because Rhinny showed me the post-study work visa pathway. They handled my application, scholarship search, and pre-departure briefing. I'm now in Melbourne and loving it!",
    bio: "Wei was looking for a destination with strong post-study opportunities. We mapped out an Australian pathway, secured partial funding, and handled the complex visa application seamlessly. He is now thriving in his engineering program.",
    rating: 5,
    visaStatus: "Australian Student Visa - 2024",
    duration: "4 Months from Application to Arrival",
    badgeIcon: "plane",
  },
  {
    id: 4,
    name: "Fatima Al-Hassan",
    image: "/assets/Testimonials/african_female2.avif",
    avatarInitials: "FA",
    origin: "Kano, Nigeria",
    originFlag: "🇳🇬",
    destination: "George Mason University, USA",
    destinationFlag: "🇺🇸",
    programme: "MPH Public Health",
    fullProgramme: "Master of Public Health (MPH)",
    intake: "August 2023",
    quote: "From my first free consultation to landing in Virginia, Rhinny Global was with me every step. They even helped me find partial scholarship funding I didn't know existed.",
    bio: "Fatima had strong academic credentials but needed guidance on funding. We matched her with a program offering a 40% tuition scholarship and prepared her extensively for her F-1 visa interview.",
    rating: 5,
    visaStatus: "US F-1 Student Visa - 2023",
    duration: "5 Months from Consultation to Arrival",
    badgeIcon: "cap",
  },
  {
    id: 5,
    name: "Ayesha Tariq",
    image: "/assets/Testimonials/pakisten.jpg",
    avatarInitials: "AT",
    origin: "Lahore, Pakistan",
    originFlag: "🇵🇰",
    destination: "University of Toronto, Canada",
    destinationFlag: "🇨🇦",
    programme: "MSc Data Science",
    fullProgramme: "Master of Science in Data Science",
    intake: "September 2023",
    quote: "Rhinny counselled me on the best programs for my profile. They found a course that perfectly matched my career goals. I've been studying here and the support was incredible.",
    bio: "Ayesha was looking for top-tier Data Science programs. We helped her apply to leading universities in Canada, resulting in multiple offers and a smooth visa process.",
    rating: 5,
    visaStatus: "Canadian Study Permit - 2023",
    duration: "6 Months from Application to Arrival",
    badgeIcon: "check",
  },
  {
    id: 6,
    name: "Chisom Eze",
    image: "/assets/Testimonials/african%20male2.jpg",
    avatarInitials: "CE",
    origin: "Port Harcourt, Nigeria",
    originFlag: "🇳🇬",
    destination: "University of Edinburgh, UK",
    destinationFlag: "🇬🇧",
    programme: "LLM International Law",
    fullProgramme: "Master of Laws (LLM) in International Law",
    intake: "September 2024",
    quote: "I was rejected twice before finding Rhinny. They reviewed my personal statement, matched me to the right universities for my profile, and I got into Edinburgh. Exceptional service.",
    bio: "Chisom had faced previous rejections. We completely overhauled his application strategy, refined his personal statement, and he secured admission to a prestigious Russell Group university.",
    rating: 5,
    visaStatus: "UK Student Visa - 2024",
    duration: "4 Months from Consultation to Visa Approval",
    badgeIcon: "cap",
  },
  {
    id: 7,
    name: "Blessing Okafor",
    image: "/assets/Testimonials/african_female3.jpg",
    avatarInitials: "BO",
    origin: "Enugu, Nigeria",
    originFlag: "🇳🇬",
    destination: "Beijing Language & Culture University, China",
    destinationFlag: "🇨🇳",
    programme: "BA Chinese Studies",
    fullProgramme: "Bachelor of Arts in Chinese Language and Culture",
    intake: "September 2023",
    quote: "China wasn't even on my radar until Rhinny counselled me on the full government scholarship options. They found a programme that was 100% funded. I've been studying here debt-free.",
    bio: "Blessing was looking for fully funded opportunities abroad. We helped her apply for the Chinese Government Scholarship (CSC), resulting in a full ride covering tuition, accommodation, and a monthly stipend.",
    rating: 5,
    visaStatus: "Chinese X1 Student Visa - 2023",
    duration: "6 Months from Application to Scholarship Award",
    badgeIcon: "plane",
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function BadgeIcon({ type }: { type: string }) {
  switch (type) {
    case 'cap':
      return (
        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      );
    case 'plane':
      return (
        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case 'check':
    default:
      return (
        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
  }
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;

  const prev = () => setActiveIndex((p) => (p - 1 + total) % total);
  const next = () => setActiveIndex((p) => (p + 1) % total);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.nextElementSibling?.classList.remove('hidden');
    e.currentTarget.nextElementSibling?.classList.add('flex');
  };

  const activeStudent = TESTIMONIALS[activeIndex];

  // Modified to spread the inactive cards side-by-side using larger translate-x values
  const getCardPositionClass = (index: number) => {
    if (index === activeIndex) {
      return "opacity-100 z-20 scale-100 bg-white border-blue-500 shadow-[0_15px_40px_rgba(59,130,246,0.15)]";
    }
    
    const diff = (index - activeIndex + total) % total;
    
    if (diff === 1 || diff === -(total - 1)) {
      // Next item - position entirely to the right
      return "opacity-60 z-10 scale-[0.85] translate-x-[115%] bg-slate-100 border-slate-200 hidden md:block";
    }
    
    if (diff === total - 1 || diff === -1) {
      // Prev item - position entirely to the left
      return "opacity-60 z-10 scale-[0.85] -translate-x-[115%] bg-slate-100 border-slate-200 hidden md:block";
    }

    return "opacity-0 z-0 scale-75 hidden absolute";
  };

  return (
    <section ref={sectionRef} id="testimonials" className="relative w-full min-h-[100vh] pb-24 overflow-visible font-sans">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/Testimonials/bg.png" 
          alt="Testimonials background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#f1f5f9]/65 backdrop-blur-sm" />
      </div>

      {/* Top Divider — dark flows in from WhyChoose */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <SectionDivider
          fromColor="transparent"
          toColor="#071320"
          flip={true}
          variant="gentle"
          animated={true}
        />
      </div>

      {/* Bottom gradient fade — cleanly merges into Destinations dark bg */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #071320 100%)" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-blue-600">Student Stories</span>
          </motion.div>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight"
          >
            Trusted by Students, Proven Around the World.
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            From your first free consultation to landing at your dream university — we guide every student through a seamless, end-to-end study abroad journey.
          </motion.p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative flex items-center justify-center mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Nav Prev */}
          <motion.button
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="hidden md:flex absolute left-0 z-30 w-12 h-12 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
            aria-label="Previous story"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Cards Container */}
                    <div className="relative flex justify-center items-center h-[300px] w-full max-w-5xl perspective-1000 will-change">
            {TESTIMONIALS.map((t, index) => (
              <div
                key={t.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute transition-all duration-700 ease-in-out cursor-pointer border rounded-[2rem] p-8 pt-12 w-full max-w-[340px] md:max-w-[380px] ${getCardPositionClass(index)}`}
              >
                {/* Avatar Overlap */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="relative w-20 h-20 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center shadow-lg">
                    <img
                      src={t.image}
                      alt={t.name}
                      onError={handleImageError}
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="hidden w-full h-full items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-gray-200">
                      <span className="text-xl text-gray-700 font-bold">{t.avatarInitials}</span>
                    </div>
                    {/* Tiny Icon Badge */}
                    <div className="absolute bottom-0 -right-1 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center border-[3px] border-white">
                      <BadgeIcon type={t.badgeIcon} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col items-center text-center mt-2 h-full">
                  <div className="mb-4">
                    <StarRating count={t.rating} />
                  </div>
                  <p className="text-gray-700 text-sm italic mb-6 leading-relaxed flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <strong className="text-gray-900 font-bold text-[15px] tracking-wide mb-1">{t.name}</strong>
                  <p className="text-gray-500 text-xs mb-2">{t.programme}</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium tracking-wide">
                    <span>{t.destinationFlag}</span> <span>{t.destination}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav Next */}
          <motion.button
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="hidden md:flex absolute right-0 z-30 w-12 h-12 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
            aria-label="Next story"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-2 mb-16"
        >
          {TESTIMONIALS.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.4 }}
              animate={idx === activeIndex ? { width: 24, backgroundColor: "#2563eb" } : { width: 6, backgroundColor: "#d1d5db" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`h-1.5 rounded-full`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>

        {/* Expanded Active Student Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="max-w-5xl mx-auto rounded-3xl bg-white border border-gray-100 p-6 md:p-8 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            
            {/* Left: Large Photo */}
            <div className="w-full lg:w-56 shrink-0 aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 relative shadow-md">
              <img 
                src={activeStudent.image} 
                alt={activeStudent.name} 
                onError={handleImageError}
                className="w-full h-full object-cover transition-opacity duration-500" 
              />
              <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-5xl text-gray-400 font-bold">{activeStudent.avatarInitials}</span>
              </div>
            </div>

            {/* Middle: Bio/Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <strong className="text-2xl md:text-3xl font-bold text-gray-900">{activeStudent.name}</strong>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.441A1.5 1.5 0 017.65 2.5h4.7a1.5 1.5 0 011.383.941l.983 2.559h1.784A2.5 2.5 0 0119 8.5v6a2.5 2.5 0 01-2.5 2.5H3.5A2.5 2.5 0 011 14.5v-6a2.5 2.5 0 012.5-2.5h1.784l.983-2.559zM8.5 11.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clipRule="evenodd" /></svg>
                  Verified Student
                </span>
              </div>
              
              <div className="mb-6 flex flex-col gap-1">
                <p className="text-gray-700 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                  {activeStudent.programme}
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>{activeStudent.destinationFlag}</span> {activeStudent.destination}
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed pr-0 lg:pr-8">
                {activeStudent.bio}
              </p>
            </div>

            {/* Right: Stats Grid */}
            <div className="w-full lg:w-[320px] shrink-0 lg:border-l border-gray-100 lg:pl-8 flex flex-col gap-6 pt-6 lg:pt-0 border-t lg:border-t-0">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <strong className="text-gray-900 font-medium text-sm mb-0.5">Visa Approved</strong>
                  <p className="text-gray-500 text-[13px]">{activeStudent.visaStatus}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                </div>
                <div>
                  <strong className="text-gray-900 font-medium text-sm mb-0.5">Program</strong>
                  <p className="text-gray-500 text-[13px]">{activeStudent.fullProgramme}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <strong className="text-gray-900 font-medium text-sm mb-0.5">Hometown</strong>
                  <p className="text-gray-500 text-[13px]">{activeStudent.origin}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <strong className="text-gray-900 font-medium text-sm mb-0.5">Journey Duration</strong>
                  <p className="text-gray-500 text-[13px]">{activeStudent.duration}</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
