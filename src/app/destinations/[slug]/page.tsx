'use client'

import React, { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { UniversityCard } from '@/components/ui/university-card'
import { destinations } from '@/data/destinations'
import { allUniversities, universityDescriptionTemplates } from '@/data/university-data'

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

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.name.toLowerCase().replace(/ /g, '-'),
  }))
}

export default function DestinationDetailPage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  if (!slug) {
    return null; // Or a loading spinner
  }

  const countryName = slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const destination = destinations.find(d => d.name.toLowerCase() === countryName.toLowerCase());

  if (!destination) {
    notFound();
  }

  const universities = allUniversities.filter(uni => uni.country.toLowerCase() === countryName.toLowerCase());
  const FlagComponent = destination?.flag;

  const [selectedCategory, setSelectedCategory] = useState('All');

  const groupedUniversities = universities.reduce((acc, uni) => {
    const category = uni.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(uni);
    return acc;
  }, {} as Record<string, typeof universities>);

  const filteredUniversities = selectedCategory === 'All' 
    ? universities 
    : groupedUniversities[selectedCategory] || [];

  return (
    <main className="bg-[#071320] min-h-screen flex flex-col font-montserrat">
      <Navbar />

      <header className="relative pt-40 pb-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${destination?.image})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight">
              Discover universities in {countryName}
            </h1>
            {FlagComponent && <FlagComponent className="w-12 h-12 ml-4" />}
          </div>
          <p className="text-lg text-[#B8C0CC] max-w-3xl mx-auto">
            Explore {universities.length} partner institutions in {countryName}, from world-renowned research universities to career-focused colleges.
          </p>
        </div>
      </header>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
      </div>

      <Footer />
    </main>
  );
}
