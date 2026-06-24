import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChoose from "@/components/WhyChoose";
import "./globals.css";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import LatestUpdates from "@/components/blog/LatestUpdates";
import TopScholarships from "@/components/TopScholarships";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <TopScholarships />
        <WhyChoose />
        <TestimonialsSection />
        <LatestUpdates />
        <Destinations />
      </main>
      <Footer />
    </>
  );
}
