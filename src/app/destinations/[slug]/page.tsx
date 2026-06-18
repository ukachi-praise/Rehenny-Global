'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { UniversityCard } from '@/components/ui/university-card'
import { destinations } from '@/data/destinations' // Centralized data

// Mock data for universities
const allUniversities = [
  // Canada
  { name: 'University of Toronto', country: 'Canada', logo: '/assets/universities/toronto.png', programs: 'Engineering, Medicine, Business', ranking: '#1 in Canada' },
  { name: 'McGill University', country: 'Canada', logo: '/assets/universities/mcgill.png', programs: 'Arts, Science, Law', ranking: '#2 in Canada' },
  { name: 'University of British Columbia', country: 'Canada', logo: '/assets/universities/ubc.png', programs: 'Forestry, Marine Biology, Kinesiology', ranking: '#3 in Canada' },

  // UK
  { name: 'University of Oxford', country: 'United Kingdom', logo: '/assets/universities/oxford.png', programs: 'Philosophy, History, Economics', ranking: '#1 in UK' },
  { name: 'University of Cambridge', country: 'United Kingdom', logo: '/assets/universities/cambridge.png', programs: 'Mathematics, Physics, Computer Science', ranking: '#2 in UK' },

  // USA
  { name: 'Harvard University', country: 'USA', logo: '/assets/universities/harvard.png', programs: 'Law, Business, Government', ranking: '#1 in USA' },
  { name: 'Stanford University', country: 'USA', logo: '/assets/universities/stanford.png', programs: 'Engineering, Computer Science, Design', ranking: '#2 in USA' },

  // Australia
  { name: 'Australian National University', country: 'Australia', logo: '/assets/universities/anu.png', programs: 'Politics, International Relations, Arts', ranking: '#1 in Australia' },

  // China
  { name: 'Tsinghua University', country: 'China', logo: '/assets/universities/tsinghua.png', programs: 'Engineering, Architecture, Journalism', ranking: '#1 in China' },
];

export default function DestinationDetailPage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const countryName = slug ? slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

  const destination = destinations.find(d => d.name.toLowerCase() === countryName.toLowerCase());
  const universities = allUniversities.filter(uni => uni.country.toLowerCase() === countryName.toLowerCase());

  return (
    <main className="bg-[#071320] min-h-screen flex flex-col font-montserrat">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 leading-tight flex items-center">
            {destination?.flag && <span className="mr-4 text-5xl md:text-7xl">{destination.flag}</span>}
            Universities in <span className="text-[#D4AF37] ml-3">{countryName}</span>
          </h1>
          <p className="text-lg text-[#B8C0CC] max-w-3xl mb-12">
            Explore top-tier universities and programs available in {countryName}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map(uni => (
              <UniversityCard 
                key={uni.name} 
                logoUrl={uni.logo} 
                universityName={uni.name} 
                ranking={uni.ranking} 
                description={`Explore programs in ${uni.programs}.`} 
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
