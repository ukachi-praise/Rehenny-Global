'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface UniversityCardProps {
  logoUrl: string;
  universityName: string;
  ranking: string;
  description: string;
}

export function UniversityCard({ logoUrl, universityName, ranking, description }: UniversityCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/5 rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img src={logoUrl} alt={`${universityName} logo`} className="w-16 h-16 mr-4 object-contain"/>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{universityName}</h3>
            <p className="text-sm text-[#D4AF37]">{ranking}</p>
          </div>
        </div>
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
        <a href="#" className="flex items-center text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
          View Details
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
