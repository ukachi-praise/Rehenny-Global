import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarships/ScholarshipCard';
import { scholarships } from '@/data/scholarships';

export default async function ScholarshipsPage() {
  return (
    <main className="bg-[#071320] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-white sm:text-5xl">Explore Scholarships</h1>
            <p className="mt-4 text-lg text-[#B8C0CC]">Find the perfect scholarship to fund your education.</p>
          </div>

          {scholarships.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarships.map((scholarship: any) => (
                <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 mt-16 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-[#B8C0CC] text-lg font-montserrat">No scholarships found at the moment. Please check back later.</p>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </main>
  );
}
