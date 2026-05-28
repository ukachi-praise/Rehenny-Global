'use client';

import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const filterCategories = [
  {
    name: 'Country',
    options: ['All', 'Canada', 'UK', 'USA', 'Australia', 'China'],
  },
  {
    name: 'Program Type',
    options: ['All', 'Undergraduate', 'Masters', 'PhD'],
  },
  {
    name: 'Scholarship Type',
    options: ['All', 'Fully Funded', 'Partial', 'Merit Based'],
  },
  {
    name: 'Intake',
    options: ['All', 'Fall', 'Spring', 'Summer'],
  },
];

export default function FilterSystem() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({
    Country: 'All',
    'Program Type': 'All',
    'Scholarship Type': 'All',
    Intake: 'All',
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleFilterSelect = (category: string, option: string) => {
    setActiveFilters((prev) => ({ ...prev, [category]: option }));
    setOpenDropdown(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto px-6 lg:px-8 py-8 border-t border-b border-white/10 my-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/30 flex items-center justify-center border border-[#1E3A8A]">
            <Filter className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <span className="font-playfair font-bold text-xl">Filter Opportunities</span>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 w-full md:w-auto">
          {filterCategories.map((category) => (
            <div key={category.name} className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === category.name ? null : category.name)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-sm font-medium text-white transition-all backdrop-blur-md"
              >
                <span className="text-[#B8C0CC]">{category.name}:</span>
                <span className="text-[#D4AF37]">{activeFilters[category.name]}</span>
                <ChevronDown className={'w-4 h-4 transition-transform ' + (openDropdown === category.name ? 'rotate-180' : '')} />
              </button>

              {/* Dropdown */}
              {openDropdown === category.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-[#0a192f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
                >
                  {category.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterSelect(category.name, option)}
                      className={'w-full text-left px-5 py-3 text-sm transition-colors hover:bg-white/5 ' + (activeFilters[category.name] === option ? 'text-[#D4AF37] bg-white/5' : 'text-white')}
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
