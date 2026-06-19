'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface UniversityCardProps {
  universityName: string;
  location: string;
  valueProposition: string;
  popularPrograms: string[];
  tags: string[];
}

export function UniversityCard({ universityName, location, valueProposition, popularPrograms, tags }: UniversityCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#0c1f30] via-[#14283c] to-[#07111b] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.06)] transition-all duration-300 cursor-pointer group/card flex flex-col text-left h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      
      <div className="relative z-10 mb-4">
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/card:text-[#D4AF37]">{universityName}</h3>
        <p className="text-[#B8C0CC] text-sm">{location}</p>
      </div>
      
      <p className="relative z-10 text-white/70 text-sm mb-4 flex-grow">{valueProposition}</p>
      
      <div className="relative z-10">
        <h4 className="text-white font-semibold mb-2">Popular Programs</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {popularPrograms.map(program => (
            <span key={program} className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full">{program}</span>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[#D4AF37] text-xs font-semibold">{tag}</span>
        ))}
      </div>
      
      <Link href="/contact" passHref>
        <div className="relative z-10 mt-auto bg-[#D4AF37] hover:bg-[#E6B84E] text-black px-6 py-2 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Apply Now
        </div>
      </Link>
    </motion.div>
  );
}
