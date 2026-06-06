
import { articles } from '@/data/articles';
import ScholarshipCard from '@/components/scholarships/ScholarshipCard';

export default function ScholarshipHighlights() {
  const scholarships = articles.filter(article => article.tag === 'SCHOLARSHIPS');

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-white sm:text-4xl">Featured Scholarships</h2>
          <p className="mt-4 text-lg text-[#B8C0CC]">Explore our curated list of top scholarships from around the world.</p>
        </div>

        {scholarships.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship: any) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 mt-16 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-[#B8C0CC] text-lg font-montserrat">Scholarship opportunities are not available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
