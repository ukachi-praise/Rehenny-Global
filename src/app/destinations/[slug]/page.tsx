import React from 'react'
import { notFound } from 'next/navigation'
import { destinations } from '@/data/destinations'
import { allUniversities } from '@/data/university-data'
import DestinationClientPage from './DestinationClientPage'
import MainLayout from '@/components/MainLayout'

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.name.toLowerCase().replace(/ /g, '-'),
  }))
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) {
    return null;
  }

  const countryName = slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const destination = destinations.find(d => d.name.toLowerCase() === countryName.toLowerCase());

  if (!destination) {
    notFound();
  }

  const universities = allUniversities.filter(uni => uni.country.toLowerCase() === countryName.toLowerCase());
  const FlagComponent = destination?.flag;

  const groupedUniversities = universities.reduce((acc, uni) => {
    const category = uni.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(uni);
    return acc;
  }, {} as Record<string, typeof universities>);

  return (
    <MainLayout>
      <header className="relative pt-40 pb-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${destination?.image})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight">
              Discover universities in {countryName}
            </h1>
            {FlagComponent && <span className="text-4xl ml-4">{FlagComponent}</span>}
          </div>
          <p className="text-lg text-[#B8C0CC] max-w-3xl mx-auto">
            Explore {universities.length} partner institutions in {countryName}, from world-renowned research universities to career-focused colleges.
          </p>
        </div>
      </header>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <DestinationClientPage universities={universities} groupedUniversities={groupedUniversities} />
        </div>
      </div>
    </MainLayout>
  );
}
