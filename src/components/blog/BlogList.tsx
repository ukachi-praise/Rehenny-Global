'use client';

import { Component } from "@/components/ui/blog-posts";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Define the shape of the BlogPost prop for the component
interface BlogPost {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  views: number;
  readTime?: number;
  rating?: number;
  className?: string;
}

// Define the props for our new Client Component
interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const router = useRouter();
  const [visible, setVisible] = useState(6);

  const displayedPosts = posts.slice(0, visible);

  const handlePostClick = (post: BlogPost) => {
    router.push(post.href);
  };

  return (
    <div>
      <Component
        title="Our Most Popular Articles"
        description="Discover the most engaging content from our amazing community."
        backgroundLabel="BLOG"
        backgroundPosition="left"
        posts={displayedPosts}
        onPostClick={handlePostClick}
        className="mb-16"
      />
      {visible < posts.length && (
        <div className="text-center">
          <button 
            onClick={() => setVisible(prev => prev + 6)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            View More Articles
          </button>
        </div>
      )}
    </div>
  );
}
