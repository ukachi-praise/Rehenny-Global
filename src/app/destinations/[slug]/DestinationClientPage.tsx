'use client'

import React, { useState } from 'react'
import { UniversityCard } from '@/components/ui/university-card'
import { universityDescriptionTemplates } from '@/data/university-data'

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

export default function DestinationClientPage({ universities, groupedUniversities }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
              {unis.map(uni => (
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
          </section>
        ))
      ) : (
        <section className="mb-16">
          <div className="mb-8 border-l-4 border-[#D4AF37] pl-4">
            <h2 className="text-3xl font-playfair font-bold text-white">{categoryDisplayNames[selectedCategory as keyof typeof categoryDisplayNames]}</h2>
            <p className="text-md text-[#B8C0CC] mt-2">{universityDescriptionTemplates[selectedCategory as keyof typeof universityDescriptionTemplates]}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map(uni => (
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
        </section>
      )}
    </div>
  );
}
