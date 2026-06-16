import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarships/ScholarshipCard';
import { scholarships } from '@/data/scholarships';
import SectionDivider from '@/components/SectionDivider';

export default async function ScholarshipsPage() {
  return (
    <main className="bg-[#071320] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] to-[#071320]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Unlock Your <span className="text-[#D4AF37]">Global Future</span>
            </h1>
            <p className="text-xl text-[#B8C0CC] font-montserrat leading-relaxed max-w-2xl">
              Discover fully-funded opportunities and financial aid packages from top-tier universities worldwide. Your journey to academic excellence starts here.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              {['All', 'Full Funding', 'USA', 'UK', 'Canada', 'Australia'].map((cat) => (
                <button
                  key={cat}
                  className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white font-montserrat text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Main Content */}
      <div className="flex-grow py-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarships.map((scholarship: any) => (
                <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-sm">
              <p className="text-[#B8C0CC] text-xl font-montserrat">
                We're currently updating our database with new opportunities.
              </p>
              <button className="mt-6 text-[#D4AF37] font-semibold hover:underline">
                Notify me of new updates
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}