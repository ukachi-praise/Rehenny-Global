import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import "./globals.css";
import Destinations from "@/components/Destinations";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Destinations />
      </main>
      <Footer />
    </>
  );
}
