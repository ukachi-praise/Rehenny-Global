tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { DestinationCard } from '@/components/ui/card-21';
import { Globe, MapPin, CheckCircle2 } from 'lucide-react';

const destinations = [
  {
    name: "Canada",
    flag: "🇨🇦",
    image: "/assets/destinations/canada.png",
    stats: "120+ Universities • 98% Visa Rate",
    themeColor: "0 75% 25%",
    description: "Known for high-quality education and post-graduation work permits, Canada is a top choice for international students seeking a pathway to permanent residency."
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: "/assets/destinations/uk.png",
    stats: "150+ Universities • No IELTS Options",
    themeColor: "215 60% 25%",
    description: "Home to world-renowned institutions like Oxford and Cambridge, the UK offers intensive 1-year Master's programs and a rich cultural heritage."
  },
  {
    name: "USA",
    flag: "🇺🇸",
    image: "/assets/destinations/usa.png",
    stats: "200+ Universities • STEM Extensions",
    themeColor: "210 80% 20%",
    description: "The global hub for innovation and research. US universities provide unparalleled flexibility and a wide range of OPT opportunities for STEM graduates."
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: "/assets/destinations/australia.png",
    stats: "80+ Universities • Post-Study Work",
    themeColor: "175 70% 20%",
    description: "Offering a perfect blend of high academic standards and a relaxed lifestyle, Australia provides excellent post-study work rights and research facilities."
  },
  {
    name: "China",
    flag: "🇨🇳",
    image: "/assets/destinations/china.png",
    stats: "60+ Universities • Scholarships",
    themeColor: "5 80% 22%",
    description: "Rising rapidly in global rankings, Chinese universities offer affordable tuition and numerous government scholarships for international students."
  }
];

export default function DestinationsPage() {
  return (
    <main className="bg-[#071320] min-h-screen flex flex-col font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] to-[#071320]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            <span>Global Academic Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 leading-tight">
            Choose Your <span className="text-[#D4AF37]">Academic Horizon</span>
          </h1>
          <p className="text-xl text-[#B8C0CC] max-w-3xl mx-auto leading-relaxed">
            We partner with elite institutions across the globe to bring you the best opportunities for growth, 
            research, and career advancement. Explore our top destinations below.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Grid Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {destinations.map((dest) => (
              <div key={dest.name} className="group space-y-6">
                <div className="h-[450px] transition-transform duration-500 group-hover:-translate-y-2">
                  <DestinationCard
                    imageUrl={dest.image}
                    location={dest.name}
                    flag={dest.flag}
                    stats={dest.stats}
                    href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`}
                    themeColor={dest.themeColor}
                  />
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    Study in {dest.name}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                    {dest.description}
                  </p>
                  <ul className="space-y-2">
                    {['Fast-track Visas', 'Expert Consultation', 'Admission Support'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-[#B8C0CC]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Not sure which destination is right for you?
          </h2>
          <p className="text-[#B8C0CC] mb-10 max-w-2xl mx-auto">
            Our expert consultants provide personalized guidance based on your academic background and career goals.
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#E6B84E] text-black px-10 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#D4AF37]/20">
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}