'use client';

import React from 'react';
import { scholarships } from "@/data/scholarships";
import ScholarshipCard from "@/components/ui/ScholarshipCard";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TopScholarships = () => {
  const topThreeScholarships = scholarships.slice(0, 3);

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold font-display text-gray-900 mb-4">Explore Top Scholarships</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our curated list of scholarships to find the right opportunity for your study abroad journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topThreeScholarships.map(scholarship => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/scholarships" className="inline-flex items-center text-lg font-semibold text-[#c4a35a] hover:text-opacity-80 transition-colors">
            Explore More Scholarships
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopScholarships;