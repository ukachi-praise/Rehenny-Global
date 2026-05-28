import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedPost from '@/components/blog/FeaturedPost';
import FilterSystem from '@/components/blog/FilterSystem';
import BlogGrid from '@/components/blog/BlogGrid';
import ScholarshipHighlights from '@/components/blog/ScholarshipHighlights';
import LatestUpdates from '@/components/blog/LatestUpdates';
import BlogNewsletter from '@/components/blog/BlogNewsletter';
import { blogPosts, BlogPost } from '@/data/blogData';
import { getAllPosts } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Global Education Hub | Scholarships, Visas & Admissions | Rhinny Global',
  description: 'Your premium gateway to the latest international scholarships, student visa updates, university admission guides, and global education insights.',
  openGraph: {
    title: 'Global Education Hub | Rhinny Global',
    description: 'Discover the latest fully-funded scholarships, study abroad tips, and visa policies.',
    type: 'website',
  }
};

const formatDate = (dateStr?: string) => {
  if (!dateStr) return 'Recently';
  try {
    const date = new Date(dateStr);
    // If it's an invalid date, return the original string
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (e) {
    return dateStr || 'Recently';
  }
};

export default async function BlogHubPage() {
  let sanityPosts: any[] = [];
  try {
    sanityPosts = await getAllPosts();
  } catch (error) {
    console.error('Error fetching posts from Sanity:', error);
  }

  // Format Sanity posts to match the frontend shape exactly
  const mappedSanityPosts: BlogPost[] = (sanityPosts || []).map((post) => ({
    id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: '', // Rich text is handled by portable text on details page
    coverImage: post.coverImage || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: post.category || 'Scholarships',
    readTime: post.readTime || '5 min read',
    date: formatDate(post.date),
    author: {
      name: post.author?.name || 'Rhinny Global Experts',
      avatar: post.author?.avatar || 'https://ui-avatars.com/api/?name=Rhinny+Global&background=D4AF37&color=fff',
    },
    tags: post.tags || [],
    country: post.country || 'Any',
    programType: post.programType || 'Any',
    scholarshipType: post.scholarshipType || 'Partial',
    intake: post.intake || 'Any',
    featured: post.featured || false,
    officialLink: post.officialLink || '',
  }));

  // Fall back to pre-populated mock posts if Sanity has no articles yet
  const activePosts = mappedSanityPosts.length > 0 ? mappedSanityPosts : blogPosts;

  // Assuming the first featured post in our data is the main featured one
  const featuredPost = activePosts.find(post => post.featured) || activePosts[0];

  return (
    <main className="min-h-screen bg-[#071320]">
      <Navbar />
      <BlogHero />
      <div className="bg-[#071320]">
        <div className="relative z-10 -mt-10 mb-10">
          <FeaturedPost post={featuredPost} />
        </div>

        <FilterSystem />

        <BlogGrid posts={activePosts} />

        <ScholarshipHighlights />

        <LatestUpdates />

        <BlogNewsletter />

        <Footer />
      </div>
    </main>
  );
}
