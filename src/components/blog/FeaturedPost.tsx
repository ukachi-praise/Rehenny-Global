'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogData';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="relative bg-[#071320] py-16 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
          Featured Update
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-transparent" />
      </div>

      <Link href={`/blog/${post.slug}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer block"
        >
          {/* Background Image with Parallax-like scale */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/90 via-[#071320]/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end min-h-[500px]">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-sm font-bold tracking-wide">
                {post.category}
              </span>
              {post.scholarshipType && (
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-medium">
                  {post.scholarshipType}
                </span>
              )}
            </div>

            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300 max-w-4xl">
              {post.title}
            </h3>

            <p className="text-[#B8C0CC] text-lg mb-8 max-w-3xl line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-6 mt-auto">
              <div className="flex items-center gap-6 text-sm text-[#B8C0CC]">
                <div className="flex items-center gap-3">
                  <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white/20" />
                  <span className="font-medium text-white">{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More Button CTA */}
              <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#D4AF37] transition-colors">
                Read Full Article
                <motion.div
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/20 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
        </motion.div>
      </Link>
    </section>
  );
}
