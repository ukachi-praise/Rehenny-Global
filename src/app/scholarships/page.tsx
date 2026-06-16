
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { ScholarshipCard } from '@/components/blog/ScholarshipHighlights';
import { scholarships } from '@/data/scholarships';
import { GraduationCap } from 'lucide-react';

const ScholarshipsPage = () => {
  return (
    <main className="bg-[#071320] min-h-screen flex flex-col font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20 md:py-0 md:pl-[7%]">
        <div className="max-w-[650px] mx-auto md:mx-0 px-4 md:px-0">
          <p className="font-montserrat text-lg font-medium tracking-[0.28em] leading-[1.8] uppercase text-slate-400 mb-10">
            INVESTING IN TODAY.<br />
            EMPOWERING TOMORROW.
          </p>

          <h1 className="relative font-playfair text-[clamp(4rem,10vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white mb-8">
            Scholarships<br />
            That Change Lives
            <span className="block w-[280px] h-[10px] bg-[#D4AF37] rounded-full mt-6 ml-auto mr-0 md:ml-[60%]"></span>
          </h1>

          <p className="max-w-[480px] font-montserrat text-[1.55rem] leading-[1.7] text-slate-300 mb-12">
            Supporting ambitious students and
            building a brighter future—one
            opportunity at a time.
          </p>

          <a 
            href="#available-scholarships" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#0f2c66] text-white rounded-[14px] font-montserrat text-lg font-semibold tracking-[0.08em] uppercase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M12 3L2 8L12 13L22 8L12 3Z" />
              <path d="M5 10V16L12 20L19 16V10" />
            </svg>
            Explore Scholarships
          </a>
        </div>
      </section>

      <SectionDivider />

      {/* Main Content */}
      <div id="available-scholarships" className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-white">Available Scholarships</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mt-4" />
            </div>
            <p className="text-[#94A3B8] font-montserrat">
              Showing <span className="text-white font-semibold">{scholarships.length}</span> curated opportunities
            </p>
          </div>

          {scholarships.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {scholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 mt-8 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-[#B8C0CC] text-lg font-montserrat">Scholarship opportunities are not available at the moment.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default ScholarshipsPage;
