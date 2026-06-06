
'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/client';

interface BlogCardProps {
  post: any;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const coverImageUrl = post.coverImage ? urlFor(post.coverImage).url() : '/placeholder.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
    >
      <Link href={`/blog/${post.slug?.current}`}>
        <div className="relative">
          <div className="h-56 w-full overflow-hidden">
            <img
              src={coverImageUrl}
              alt={post.title || 'Blog Post'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-bold tracking-wide">
              {post.category || 'General'}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-playfair font-bold text-white mb-4 h-16 group-hover:text-[#D4AF37] transition-colors">
            {post.title}
          </h3>

          <p className="text-[#B8C0CC] text-sm mb-6 h-20 overflow-hidden">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-[#B8C0CC]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
