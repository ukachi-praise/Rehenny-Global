'use client'

import React, { useState, useEffect } from 'react'
import { UniversityCard } from '@/components/ui/university-card'
import { universityDescriptionTemplates } from '@/data/university-data'

interface University {
  name: string;
  country: string;
  category: string;
  location: string;
  popularPrograms: string[];
  tags: string[];
}

interface DestinationClientPageProps {
  universities: University[];
  groupedUniversities: Record<string, University[]>;
}

const categoryDisplayNames = {
  All: 'All Categories',
  Research: 'Top Research Universities',
  CareerFocused: 'Career-Focused Universities',
  Polytechnic: 'Polytechnic & Applied Learning Institutions',
  Affordable: 'Affordable Study Options',
  Creative: 'Creative Arts Institutions',
  Business: 'Specialized Business Schools',
  General: 'Reputable Universities',
};

const UNIVERSITIES_PER_LOAD = 3;

export default function DestinationClientPage({ universities, groupedUniversities }: DestinationClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});
  const [visibleSingleCategoryCount, setVisibleSingleCategoryCount] = useState(UNIVERSITIES_PER_LOAD);

  useEffect(() => {
    const initialCounts: Record<string, number> = {};
    if (groupedUniversities) {
      Object.keys(groupedUniversities).forEach(category => {
        initialCounts[category] = UNIVERSITIES_PER_LOAD;
      });
    }
    setVisibleCounts(initialCounts);
  }, [groupedUniversities]);

  useEffect(() => {
    setVisibleSingleCategoryCount(UNIVERSITIES_PER_LOAD);
  }, [selectedCategory]);

  const handleLoadMore = (category: string) => {
    setVisibleCounts(prev => ({
      ...prev,
      [category]: (prev[category] || 0) + UNIVERSITIES_PER_LOAD
    }));
  };

  const handleSingleCategoryLoadMore = () => {
    setVisibleSingleCategoryCount(prev => prev + UNIVERSITIES_PER_LOAD);
  };

  const filteredUniversities = selectedCategory === 'All' 
    ? universities 
    : groupedUniversities[selectedCategory] || [];

  return (
    <div>
      <div className="mb-12 flex justify-end">
        <select 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          value={selectedCategory}
          className="bg-[#0c1f30] border border-white/20 rounded-lg text-white px-4 py-2"
        >
          {Object.keys(categoryDisplayNames).map(key => (
            <option key={key} value={key}>{categoryDisplayNames[key as keyof typeof categoryDisplayNames]}</option>
          ))}
        </select>
      </div>

      {selectedCategory === 'All' ? (
        Object.entries(groupedUniversities).map(([category, unis]) => (
          <section key={category} className="mb-16">
            <div className="mb-8 border-l-4 border-[#D4AF37] pl-4">
              <h2 className="text-3xl font-playfair font-bold text-white">{categoryDisplayNames[category as keyof typeof categoryDisplayNames]}</h2>
              <p className="text-md text-[#B8C0CC] mt-2">{universityDescriptionTemplates[category as keyof typeof universityDescriptionTemplates]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {unis.slice(0, visibleCounts[category]).map((uni:University) => (
                <UniversityCard
                  key={uni.name}
                  universityName={uni.name}
                  location={uni.location}
                  valueProposition={universityDescriptionTemplates[uni.category as keyof typeof universityDescriptionTemplates]}
                  popularPrograms={uni.popularPrograms}
                  tags={uni.tags}
                />
              ))}
            </div>
            {unis.length > visibleCounts[category] && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => handleLoadMore(category)}
                  className="bg-transparent border border-white/30 text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </section>
        ))
      ) : (
        <section className="mb-16">
          <div className="mb-8 border-l-4 border-[#D4AF37] pl-4">
            <h2 className="text-3xl font-playfair font-bold text-white">{categoryDisplayNames[selectedCategory as keyof typeof categoryDisplayNames]}</h2>
            <p className="text-md text-[#B8C0CC] mt-2">{universityDescriptionTemplates[selectedCategory as keyof typeof universityDescriptionTemplates]}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.slice(0, visibleSingleCategoryCount).map((uni: University) => (
              <UniversityCard
                key={uni.name}
                universityName={uni.name}
                location={uni.location}
                valueProposition={universityDescriptionTemplates[uni.category as keyof typeof universityDescriptionTemplates]}
                popularPrograms={uni.popularPrograms}
                tags={uni.tags}
              />
            ))}
          </div>
          {filteredUniversities.length > visibleSingleCategoryCount && (
            <div className="mt-8 text-center">
                <button
                    onClick={handleSingleCategoryLoadMore}
                    className="bg-transparent border border-white/30 text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-colors"
                >
                    Load More
                </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
