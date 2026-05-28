'use client'

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import Destinations from '@/components/Destinations';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <main className="bg-[#071320] min-h-screen">
      <Navbar />
      <Hero />
      {/* Hero (dark) → Features (white) */}

      <Features />
      {/* Features (white) → WhyChoose (dark) */}
      <SectionDivider
        fromColor="#ffffff"
        toColor="#071320"
        variant="deep"
        animated={true}
      />
      <WhyChoose />
      
      <TestimonialsSection />
      <Destinations />

      {/* Destinations (dark) → Newsletter (darker) */}
      <SectionDivider
        fromColor="#071320"
        toColor="#030c14"
        variant="sharp"
        animated={true}
      />
      <Newsletter />
      <Footer />
    </main>
  );
}
