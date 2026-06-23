'use client';

import { Article } from '@/data/articles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, Share2, Users, FileText, MoreHorizontal, User } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import Image from 'next/image';
import 'flag-icons/css/flag-icons.min.css';

const ArticleClientPage = ({ article, relatedArticles }: { article: Article, relatedArticles: Article[] }) => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      <Navbar />

      <section className="relative min-h-[450px] md:min-h-[550px] flex items-end pb-12 md:pb-20 text-white overflow-hidden">
          <div className="absolute inset-0">
              <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" className="z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-20">
              <div className="max-w-3xl">
                  <span className="inline-block bg-accent/20 border border-accent text-accent text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
                  {article.tag}
                  </span>
                  <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
                  <p className="text-slate-300 text-base md:text-lg mb-6">{article.desc}</p>
                  <div className="flex items-center gap-6 text-slate-300 text-sm">
                      <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-accent" />
                          <span>{article.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent" />
                          <span>{article.readTime}</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        
        <main className="lg:col-span-2 space-y-8 prose prose-headings:font-display prose-a:text-accent hover:prose-a:text-accent-light prose-strong:text-slate-700 max-w-none prose-p:text-slate-600 prose-li:text-slate-600 prose-headings:text-slate-900">
          {article.content.map((block, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: block }} />
          ))}
        </main>

        <aside className="lg:sticky top-24 h-fit space-y-8">
            {relatedArticles.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="font-display font-bold text-lg text-slate-900 mb-4 flex items-center gap-3"><FileText className="text-accent" size={20}/>Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map(related => (
                      <Link href={`/blog/${related.slug}`} key={related.id} className="block group">
                          <div className="flex items-start gap-4">
                              <div className="w-24 h-20 rounded-md overflow-hidden flex-shrink-0">
                                <Image src={related.image} alt={related.title} width={96} height={80} objectFit="cover" className="group-hover:scale-105 transition-transform duration-300"/>
                              </div>
                              <div>
                                  <p className="text-sm font-semibold text-slate-800 group-hover:text-accent transition-colors duration-200 leading-tight">{related.title}</p>
                                  <p className="text-xs text-slate-500 mt-1">{related.date}</p>
                              </div>
                          </div>
                      </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                 <h3 className="font-display font-bold text-lg text-slate-900 mb-3 flex items-center gap-3"><Users className="text-accent" size={20}/>Need Help Applying?</h3>
                 <p className="text-sm text-slate-600 mb-4 leading-relaxed">Our experts guide you at every step of your scholarship application journey.</p>
                 <Link href="/contact" className='block w-full'>
                    <LiquidMetalButton label="Book Free Consultation" className="w-full" />
                 </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="font-display font-bold text-lg text-slate-900 mb-4 flex items-center gap-3"><Share2 className="text-accent" size={20}/>Share This Guide</h3>
                <div className="flex gap-3">
                    <a href="#" aria-label="Share on Facebook" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:bg-accent hover:text-white transition-colors"><FaFacebookF size={18}/></a>
                    <a href="#" aria-label="Share on Twitter" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:bg-accent hover:text-white transition-colors"><FaTwitter size={18}/></a>
                    <a href="#" aria-label="Share on LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:bg-accent hover:text-white transition-colors"><FaLinkedinIn size={18}/></a>
                    <a href="#" aria-label="More options" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:bg-accent hover:text-white transition-colors"><MoreHorizontal size={20}/></a>
                </div>
            </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleClientPage;
