'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface UniversityCardProps {
  logoUrl: string;
  universityName: string;
  ranking: string;
}

export function UniversityCard({ logoUrl, universityName, ranking }: UniversityCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-[#0E1A2A] rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 h-full"
    >
      <div className="flex-grow flex flex-col items-center">
        <img src={logoUrl} alt={`${universityName} Logo`} className="h-20 w-20 mb-4 object-contain" />
        <h3 className="text-xl font-bold text-white mb-2">{universityName}</h3>
        <p className="text-[#B8C0CC] text-sm mb-6">{ranking}</p>
      </div>
      <Link
        href="/contact"
        className="bg-[#D4AF37] hover:bg-[#E6B84E] text-black px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md shadow-[#D4AF37]/20 mt-auto"
      >
        Apply Now
      </Link>
    </motion.div>
  );
}
