'use client';

import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { blogPosts, scholarshipHighlights } from '@/data/blogData';
import Link from 'next/link';

export default function BlogSidebar() {
  const popularPosts = blogPosts.slice(1, 4); // Just mock some popular posts
  const urgentDeadlines = scholarshipHighlights.slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Consultation CTA */}
      <div className="bg-gradient-to-br from-[#1E3A8A] to-[#0a192f] rounded-2xl p-6 border border-[#1E3A8A]/50 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
        <h3 className="text-xl font-bold text-white mb-3 font-playfair">
          Need Expert Guidance?
        </h3>
        <p className="text-[#B8C0CC] text-sm mb-6">
          Book a free consultation with our admission experts to map out your global education journey.
        </p>
        <button className="w-full bg-[#D4AF37] hover:bg-[#cfa121] text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
          Book Free Consultation <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Popular Posts */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
          <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
          <h3 className="text-lg font-bold text-white font-playfair">Popular Articles</h3>
        </div>
        <div className="space-y-6">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-4 items-center">
              <img src={post.coverImage} alt={post.title} className="w-20 h-20 rounded-xl object-cover border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors" />
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-tight mb-2">
                  {post.title}
                </h4>
                <p className="text-xs text-[#B8C0CC]">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Approaching Deadlines */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
          <Calendar className="w-5 h-5 text-[#D4AF37]" />
          <h3 className="text-lg font-bold text-white font-playfair">Approaching Deadlines</h3>
        </div>
        <div className="space-y-4">
          {urgentDeadlines.map((scholarship) => (
            <div key={scholarship.id} className="p-4 rounded-xl bg-[#071320] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-white">{scholarship.country}</span>
                <span className="text-xs text-[#D4AF37] font-semibold">{new Date(scholarship.deadline).toLocaleDateString()}</span>
              </div>
              <h4 className="text-sm font-medium text-white mb-1">{scholarship.university}</h4>
              <p className="text-xs text-[#B8C0CC]">{scholarship.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
