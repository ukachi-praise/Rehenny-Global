'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface UniversityCardProps {
  universityName: string;
  ranking: string;
  description: string;
}

export function UniversityCard({ universityName, ranking, description }: UniversityCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-[#0E1A2A] rounded-lg shadow-lg p-6 flex flex-col text-left transition-all duration-300 hover:shadow-xl hover:scale-105 h-full"
    >
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{universityName}</h3>
        <p className="text-[#B8C0CC] text-sm mb-4">{ranking}</p>
        <p className="text-white/80 text-sm mb-6">{description}</p>
      </div>
      <Link href="/contact" passHref>
        <div className="mt-auto bg-[#D4AF37] hover:bg-[#E6B84E] text-black px-6 py-2 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Apply Now
        </div>
      </Link>
    </motion.div>
  );
}
