'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticleBySlug } from '@/data/articles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Globe,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Bookmark,
  ChevronRight,
  MapPin,
  BookOpen,
  GraduationCap,
  Users,
  FileText,
  Plane,
  Briefcase,
  ArrowUpRight,
  Phone,
  Mail,
  MapPinned,
  Clock3,
  Plus,
  Instagram,
  Youtube,
  Printer,
  Link2,
  Check,
  Compass,
} from 'lucide-react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

const categories = [
  { name: 'Destinations', count: 12, icon: MapPin },
  { name: 'Study Tips', count: 15, icon: BookOpen },
  { name: 'Scholarships', count: 8, icon: GraduationCap },
  { name: 'Student Life', count: 10, icon: Users },
  { name: 'Visa Guides', count: 9, icon: FileText },
  { name: 'Pre-Departure', count: 6, icon: Plane },
  { name: 'Career Guides', count: 7, icon: Briefcase },
  { name: 'Post-Study', count: 5, icon: ArrowUpRight },
];

export default function BlogArticlePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const article = getArticleBySlug(slug || '');
  const [activeToc, setActiveToc] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-500 mb-4">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="bg-[#1E3A8A] text-white px-5 py-2.5 rounded-lg text-sm font-medium">
              Go Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.tag === article.tag)
    .slice(0, 3);

  if (relatedArticles.length < 3) {
    const others = articles
      .filter((a) => a.id !== article.id && !relatedArticles.find((r) => r.id === a.id))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...others);
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <Navbar />

      <section className="bg-white">
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
              <Link href="/blog" className="flex items-center gap-1.5 text-white/70 text-sm mb-3 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Articles
              </Link>
              <span className="inline-block bg-[#DBEAFE] text-[#1D4ED8] text-[10px] font-bold px-3 py-1 rounded-md mb-3">
                {article.tag}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 lg:w-2/3">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img src={article.author.avatar} alt={article.author.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm text-gray-900">{article.author.name}</div>
                  <div className="text-xs text-gray-500">{article.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pb-6 mb-6 border-b border-gray-100">
              <span className="text-xs text-gray-500 mr-2">Share:</span>
              <button className="w-8 h-8 bg-[#1877F2]/10 rounded-full flex items-center justify-center hover:bg-[#1877F2]/20 transition-colors">
                <FaFacebookF className="w-4 h-4 text-[#1877F2]" />
              </button>
              <button className="w-8 h-8 bg-[#0A66C2]/10 rounded-full flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors">
                <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
              </button>
              <button onClick={handleCopyLink} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors relative">
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4 text-gray-600" />}
              </button>
              <button onClick={handlePrint} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Printer className="w-4 h-4 text-gray-600" />
              </button>
              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors ml-auto">
                <Bookmark className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="mb-10">
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0D1B2A]
                  p-6
                  overflow-hidden
                  relative
                "
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 blur-[80px] rounded-full" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                        Article Guide
                      </p>

                      <h3 className="text-white font-semibold">
                        Contents
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {article.tableOfContents.map((toc, index) => (
                      <button
                        key={toc.id}
                        onClick={() => scrollToSection(toc.id)}
                        className={`
                          group
                          w-full
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          px-4
                          py-3
                          transition-all
                          duration-300
                          text-slate-300 hover:bg-white/5
                        `}
                      >
                        <span
                          className={`
                            text-xs
                            font-bold
                            text-[#D4AF37]
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm text-left">
                          {toc.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">
                        Reading Time
                      </span>

                      <span className="text-[#D4AF37] font-medium">
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
                rounded-[32px]
                bg-white
                p-6
                md:p-10
                shadow-sm
                border
                border-slate-100
              "
            >
              <div
                className="
                  mb-10
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#071320]
                  to-[#0D1B2A]
                  p-8
                "
              >
                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[#D4AF37]
                    text-xs
                    mb-4
                  "
                >
                  Featured Guide
                </p>

                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-white
                    mb-4
                  "
                >
                  {article.title}
                </h2>

                <p className="text-slate-300 leading-relaxed">
                  {article.desc}
                </p>
              </div>

              <div className="space-y-8">
                {article.content.map((paragraph, idx) => {
                  const headingMatch = paragraph.match(
                    /<h2 id="([^"]+)">(.+)<\/h2>/
                  );

                  if (headingMatch) {
                    const [, id, title] = headingMatch;

                    return (
                      <div
                        key={idx}
                        id={id}
                        className="scroll-mt-32 pt-8"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <span
                            className="
                              text-[#D4AF37]
                              text-5xl
                              font-bold
                              leading-none
                            "
                          >
                            {String(
                              article.tableOfContents.findIndex(
                                (toc) => toc.id === id
                              ) + 1
                            ).padStart(2, "0")}
                          </span>

                          <div>
                            <h2
                              className="
                                text-3xl
                                font-bold
                                text-[#071320]
                              "
                            >
                              {title}
                            </h2>

                            <div className="w-20 h-1 bg-[#D4AF37] rounded-full mt-3" />
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p
                      key={idx}
                      className="
                        text-slate-700
                        leading-8
                        text-lg
                        first-letter:text-5xl
                        first-letter:font-bold
                        first-letter:text-[#D4AF37]
                        first-letter:mr-2
                        first-letter:float-left
                      "
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div
                className="
                  mt-14
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#071320]
                  to-[#0D1B2A]
                  p-8
                  text-center
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-4
                  "
                >
                  Need Help Applying?
                </h3>

                <p
                  className="
                    text-slate-300
                    max-w-2xl
                    mx-auto
                    mb-6
                  "
                >
                  Our education advisors can help you choose the
                  right university, prepare strong applications,
                  and maximize your scholarship opportunities.
                </p>

                <LiquidMetalButton>
                  Book a consultation
                </LiquidMetalButton>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-6 mt-8 border-t border-gray-100">
              <span className="text-xs text-gray-500 mr-2">Tags:</span>
              <span className="bg-blue-50 text-[#1D4ED8] text-xs font-medium px-3 py-1.5 rounded-full">{article.tag}</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">Study Abroad</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">2024</span>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 mt-8 flex flex-col sm:flex-row items-start gap-4">
              <img src={article.author.avatar} alt={article.author.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">{article.author.name}</h4>
                <p className="text-xs text-[#1E3A8A] font-medium mb-2">{article.author.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Experienced education professional passionate about helping students achieve their academic dreams abroad.
                  Dedicated to providing expert guidance and trusted insights for international education.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3 space-y-6">
            <NewsletterCard />

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <a key={cat.name} href="#" className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-[#1E3A8A] transition-colors" />
                      <span className="text-sm text-gray-600 group-hover:text-[#1E3A8A] transition-colors">{cat.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{cat.count}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.map((ra) => (
                  <Link key={ra.id} href={`/blog/${ra.slug}`} className="flex items-start gap-3 group text-left w-full">
                      <img src={ra.image} alt={ra.title} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-semibold text-gray-800 leading-snug group-hover:text-[#1E3A8A] transition-colors line-clamp-2">
                          {ra.title}
                        </h4>
                        <span className="flex items-center gap-1 text-gray-400 text-[11px] mt-1">
                          <Calendar className="w-3 h-3" />
                          {ra.date}
                        </span>
                      </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl p-6 text-white relative overflow-hidden">
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="absolute top-3 right-3 opacity-30">
                <path d="M0 15H45" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M45 15L55 10V20L45 15Z" fill="white" />
              </svg>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Need Help With Your Application?</h3>
              <p className="text-white/80 text-xs mb-5 leading-relaxed">
                Our experts are here to guide you through every step of your study abroad journey.
              </p>
              <LiquidMetalButton className="w-full text-xs py-3">
                Book a consultation
              </LiquidMetalButton>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#1E3A8A] rounded-full"></span>
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((ra) => (
              <Link key={ra.id} href={`/blog/${ra.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group text-left border border-gray-100">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={ra.image} alt={ra.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-[#DBEAFE] text-[#1D4ED8] text-[10px] font-semibold px-2.5 py-1 rounded-md mb-2">
                      {ra.tag}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">{ra.title}</h3>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Compass className="w-7 h-7 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Ready to Start Your Study Abroad Journey?</h3>
                <p className="text-sm text-gray-500 mt-0.5">Get personalized guidance from our experts and take the first step towards your global future.</p>
              </div>
            </div>
            <LiquidMetalButton className="text-sm font-medium px-6 py-3 rounded-lg whitespace-nowrap">
                <span className="flex items-center gap-2">
                    Book a consultation
                    <ArrowRight className="w-4 h-4" />
                </span>
            </LiquidMetalButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function NewsletterCard() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl p-5 text-white relative overflow-hidden">
      <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="absolute top-3 right-3 opacity-30">
        <path d="M0 15H45" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M45 15L55 10V20L45 15Z" fill="white" />
      </svg>
      <h3 className="text-lg font-bold mb-1">Stay Updated!</h3>
      <p className="text-white/80 text-xs mb-4 leading-relaxed">Subscribe to our newsletter and never miss an update.</p>
      <div className="space-y-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-800 placeholder-gray-400 outline-none"
        />
        <button className="w-full bg-[#1E3A8A] border border-white/30 text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-white/10 transition-colors">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
