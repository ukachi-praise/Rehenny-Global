'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="relative h-full flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-300">
          
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-transparent to-transparent opacity-80" />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#1E3A8A]/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase border border-white/10">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10 bg-gradient-to-b from-transparent to-[#071320]/50">
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-[#B8C0CC] mb-4 font-medium uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#B8C0CC] text-sm mb-6 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>

            {/* Footer / Author */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full border border-white/20" />
                <span className="text-sm font-medium text-white">{post.author.name}</span>
              </div>
              <div className="text-[#D4AF37] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Hover Glow Border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
        </article>
      </Link>
    </motion.div>
  );
}
