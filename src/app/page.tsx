import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LatestUpdates from '@/components/blog/LatestUpdates';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Destinations from '@/components/Destinations';
import WhyChoose from '@/components/WhyChoose';
import ReferralCTA from '@/components/ReferralCTA';

export default async function HomePage() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Features />

      <WhyChoose />

      <Destinations />

      <ReferralCTA />

      <TestimonialsSection />

      <LatestUpdates />

      <Footer />
    </main>
  )
}