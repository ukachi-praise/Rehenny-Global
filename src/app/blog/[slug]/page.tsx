import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/data/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogArticleContent from '@/components/blog/BlogArticleContent';
import BlogNewsletter from '@/components/blog/BlogNewsletter';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/sanity/lib/queries';

interface Props {
  params: { slug: string };
}

// Format date nicely
const formatDate = (dateStr?: string) => {
  if (!dateStr) return 'Recently';
  try {
    const date = new Date(dateStr);
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

// Generate Static Params for SSG if needed, though for mock data it's fine as is
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    if (posts && posts.length > 0) {
      return posts.map((post: any) => ({
        slug: post.slug,
      }));
    }
  } catch (e) {
    console.error('Error generating static params:', e);
  }
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let sanityPost: any = null;
  try {
    sanityPost = await getPostBySlug(params.slug);
  } catch (e) {
    console.error('Error fetching metadata from Sanity:', e);
  }

  // Fallback to mock post
  const mockPost = blogPosts.find((p) => p.slug === params.slug);
  
  if (!sanityPost && !mockPost) {
    return { title: 'Post Not Found | Rhinny Global' };
  }

  const post = sanityPost ? {
    title: sanityPost.title,
    excerpt: sanityPost.excerpt || '',
    coverImage: sanityPost.coverImage || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    date: formatDate(sanityPost.date),
    author: {
      name: sanityPost.author?.name || 'Rhinny Global Experts',
    },
    tags: sanityPost.tags || [],
  } : {
    title: mockPost!.title,
    excerpt: mockPost!.excerpt,
    coverImage: mockPost!.coverImage,
    date: mockPost!.date,
    author: {
      name: mockPost!.author.name,
    },
    tags: mockPost!.tags,
  };

  return {
    title: `${post.title} | Rhinny Global Education Hub`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  let sanityPost: any = null;
  try {
    sanityPost = await getPostBySlug(params.slug);
  } catch (error) {
    console.error('Error fetching post from Sanity:', error);
  }

  // Fall back to mock post if not found in Sanity
  const mockPost = blogPosts.find((p) => p.slug === params.slug);

  if (!sanityPost && !mockPost) {
    notFound();
  }

  // Mapped post data structure
  const post: BlogPost = sanityPost ? {
    id: sanityPost._id,
    title: sanityPost.title,
    slug: sanityPost.slug,
    excerpt: sanityPost.excerpt || '',
    content: '', // Rich text is in `body`
    coverImage: sanityPost.coverImage || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: sanityPost.category || 'Scholarships',
    readTime: sanityPost.readTime || '5 min read',
    date: formatDate(sanityPost.date),
    author: {
      name: sanityPost.author?.name || 'Rhinny Global Experts',
      avatar: sanityPost.author?.avatar || 'https://ui-avatars.com/api/?name=Rhinny+Global&background=D4AF37&color=fff',
    },
    tags: sanityPost.tags || [],
    country: sanityPost.country || 'Any',
    programType: sanityPost.programType || 'Any',
    scholarshipType: sanityPost.scholarshipType || 'Partial',
    intake: sanityPost.intake || 'Any',
    featured: sanityPost.featured || false,
    officialLink: sanityPost.officialLink || '',
    body: sanityPost.body,
  } : mockPost!;

  return (
    <main className="bg-[#071320] min-h-screen">
      <Navbar />

      {/* Article Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 border-b border-white/10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#071320]/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm text-[#B8C0CC] mb-8 font-medium">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{post.category}</span>
          </nav>

          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-sm font-bold tracking-wide mb-6">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#B8C0CC]">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-white/20" />
              <div className="text-left">
                <p className="font-semibold text-white text-base">{post.author.name}</p>
                <p className="text-xs">Author</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-base">{post.date}</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-base">{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Article Body */}
          <div className="lg:col-span-8">
            <BlogArticleContent post={post} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <BlogSidebar />
          </div>

        </div>
      </section>

      <BlogNewsletter />
      <Footer />
    </main>
  );
}
