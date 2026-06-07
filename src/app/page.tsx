import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScholarshipHighlights from '@/components/blog/ScholarshipHighlights';
import LatestUpdates from '@/components/blog/LatestUpdates';
import Sponsors from '@/components/Sponsors';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Destinations from '@/components/Destinations';
import WhyChoose from '@/components/WhyChoose';

export default async function HomePage() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Sponsors />

      <Features />

      <WhyChoose />

      <ScholarshipHighlights />

      <Destinations />

      <TestimonialsSection />

      <LatestUpdates />

      <Footer />
    </main>
  )
}
