import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LatestUpdates from '@/components/blog/LatestUpdates';
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

      <Features />

      <WhyChoose />

      <Destinations />

      <TestimonialsSection />

      <LatestUpdates />

      <Footer />
    </main>
  )
}