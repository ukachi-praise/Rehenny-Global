'use client';

import BlogCard from './BlogCard';
import { blogPosts, BlogPost } from '@/data/blogData';

interface BlogGridProps {
  posts?: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  // Use dynamically passed posts from Sanity, or fall back to mock data
  const activePosts = posts || blogPosts;
  
  // Filter out the featured post from the grid if one exists
  const gridPosts = activePosts.filter(post => !post.featured);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">
          Latest Opportunities & Guides
        </h2>
      </div>
      
      {gridPosts.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-[#B8C0CC] text-lg font-montserrat">No articles found matching the current opportunities.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post, index) => (
            <BlogCard key={post.slug || post.id} post={post} index={index} />
          ))}
        </div>
      )}
      
      <div className="mt-16 text-center">
        <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all">
          Load More Articles
        </button>
      </div>
    </section>
  );
}
