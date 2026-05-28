'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Bookmark, Facebook, Twitter, Linkedin, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogData';
import PortableTextRenderer from './PortableTextRenderer';

interface BlogArticleContentProps {
  post: BlogPost;
}

export default function BlogArticleContent({ post }: BlogArticleContentProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="relative">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Share / Save Floating Bar (Desktop) */}
      <div className="hidden lg:flex flex-col gap-4 absolute -left-20 top-0 sticky top-32">
        <button onClick={() => setIsSaved(!isSaved)} className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#D4AF37]/50 transition-colors text-white group">
          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-[#D4AF37] text-[#D4AF37]' : 'group-hover:text-[#D4AF37]'}`} />
        </button>
        <div className="w-12 h-[1px] bg-white/10 my-2 mx-auto" />
        <button className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#D4AF37]/50 transition-colors text-white group">
          <Facebook className="w-5 h-5 group-hover:text-[#1877F2]" />
        </button>
        <button className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#D4AF37]/50 transition-colors text-white group">
          <Twitter className="w-5 h-5 group-hover:text-[#1DA1F2]" />
        </button>
        <button className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#D4AF37]/50 transition-colors text-white group">
          <Linkedin className="w-5 h-5 group-hover:text-[#0A66C2]" />
        </button>
        <button className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#D4AF37]/50 transition-colors text-white group">
          <LinkIcon className="w-5 h-5 group-hover:text-[#D4AF37]" />
        </button>
      </div>

      <article className="prose prose-lg prose-invert max-w-none font-montserrat">
        {post.body ? (
          /* Render Sanity Rich Text Content dynamically */
          <div className="text-[#B8C0CC]">
            <PortableTextRenderer value={post.body} />
          </div>
        ) : (
          /* Fallback for Mock Content */
          <>
            <div 
              className="text-[#B8C0CC] leading-relaxed [&>p]:mb-6 [&>h2]:text-white [&>h2]:font-playfair [&>h2]:text-3xl [&>h2]:mt-10 [&>h2]:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            <h2 className="text-white font-playfair text-3xl mt-10 mb-4">Understanding the Requirements</h2>
            <p className="text-[#B8C0CC] mb-6 leading-relaxed">
              Before applying, it is crucial to understand the eligibility criteria. Most programs require a strong academic background, proof of English proficiency (like IELTS or TOEFL), and a compelling statement of purpose. Ensure all your documents are translated and notarized if necessary.
            </p>

            <h2 className="text-white font-playfair text-3xl mt-10 mb-4">Step-by-Step Application Process</h2>
            <p className="text-[#B8C0CC] mb-6 leading-relaxed">
              1. Research target universities and programs.<br/>
              2. Prepare required documents (transcripts, letters of recommendation).<br/>
              3. Submit online applications before the deadline.<br/>
              4. Prepare for potential interviews.<br/>
              5. Await the admission decision and apply for your student visa.
            </p>
            
            <div className="my-10 p-8 bg-[#1E3A8A]/10 border-l-4 border-[#D4AF37] rounded-r-2xl">
              <p className="text-xl text-white font-playfair italic mb-0">
                "The journey of a thousand miles begins with a single application. Don't let deadlines pass you by while waiting for the 'perfect' time."
              </p>
            </div>

            <p className="text-[#B8C0CC] mb-6 leading-relaxed">
              If you need assistance with your application, our experts at Rhinny Global are here to help you navigate the complexities of international admissions.
            </p>
          </>
        )}

        {/* 6. Display officialLink (as requested by User) */}
        {post.officialLink && (
          <div className="my-10 p-6 bg-white/5 border border-[#D4AF37]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37]/60 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <h4 className="text-white font-playfair font-bold text-lg mb-1">Official Opportunity Link</h4>
              <p className="text-[#B8C0CC] text-sm">Apply directly through the official scholarship portal.</p>
            </div>
            <a
              href={post.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F3CD4E] text-[#071320] font-bold rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </article>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-3">
        <span className="text-white font-semibold mr-2">Tags:</span>
        {post.tags.map(tag => (
          <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#B8C0CC] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors cursor-pointer">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
