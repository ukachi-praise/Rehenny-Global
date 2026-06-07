'use client';
import { useState } from 'react';
import {
  Globe,
  Menu,
  X,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Plus,
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
  Compass,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

const articles = [
  {
    id: 1,
    image: '/assets/article_canada.jpg',
    tag: 'DESTINATIONS',
    title: 'Top 7 Reasons to Study in Canada in 2024',
    desc: "From world-class education to work opportunities, here's why Canada continues to be a top choice for international students.",
    date: 'May 20, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    image: '/assets/article_sop.jpg',
    tag: 'STUDY TIPS',
    title: 'How to Write a Strong SOP (Statement of Purpose)',
    desc: 'A compelling SOP can make or break your application. Learn the key tips to make yours stand out.',
    date: 'May 15, 2024',
    readTime: '6 min read',
  },
  {
    id: 3,
    image: '/assets/article_uk_visa.jpg',
    tag: 'DESTINATIONS',
    title: 'UK Student Visa Guide 2024: A Step-by-Step Process',
    desc: 'Navigate the UK student visa process with ease. Check out our latest guide for all the essential steps.',
    date: 'May 10, 2024',
    readTime: '7 min read',
  },
  {
    id: 4,
    image: '/assets/article_checklist.jpg',
    tag: 'PRE-DEPARTURE',
    title: 'Pre-Departure Checklist: 10 Things You Must Do Before You Fly',
    desc: "Don't leave home without checking these essential items off your list!",
    date: 'May 5, 2024',
    readTime: '4 min read',
  },
  {
    id: 5,
    image: '/assets/article_germany.jpg',
    tag: 'STUDENT LIFE',
    title: 'Student Life in Germany: What to Expect',
    desc: "From accommodation to part-time jobs, here's everything you need to know about student life in Germany.",
    date: 'Apr 28, 2024',
    readTime: '6 min read',
  },
  {
    id: 6,
    image: '/assets/article_courses.jpg',
    tag: 'CAREER GUIDES',
    title: 'Top In-Demand Courses Abroad in 2024',
    desc: 'Explore the most in-demand courses that can shape your future and boost your career.',
    date: 'Apr 20, 2024',
    readTime: '5 min read',
  },
  {
    id: 7,
    image: '/assets/article_scholarships.jpg',
    tag: 'SCHOLARSHIPS',
    title: 'Top Scholarships for International Students in 2024',
    desc: "List of fully funded and partial scholarships you shouldn't miss!",
    date: 'Apr 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 8,
    image: '/assets/article_post_study.jpg',
    tag: 'POST-STUDY',
    title: 'What After Graduation? Your Options Explained',
    desc: 'Work permits, PR pathways, and career options – plan your next steps smartly.',
    date: 'Apr 10, 2024',
    readTime: '6 min read',
  },
  {
    id: 9,
    image: '/assets/article_budget.jpg',
    tag: 'DESTINATIONS',
    title: 'Affordable Study Abroad Destinations for Budget-Conscious Students',
    desc: "Quality education doesn't have to break the bank. Check out these student-friendly destinations.",
    date: 'Apr 5, 2024',
    readTime: '4 min read',
  },
];

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

const popularArticles = [
  { title: 'Top 7 Reasons to Study in Canada in 2024', date: 'May 20, 2024', image: '/assets/article_canada.jpg' },
  { title: 'How to Write a Strong SOP (Statement of Purpose)', date: 'May 15, 2024', image: '/assets/article_sop.jpg' },
  { title: 'UK Student Visa Guide 2024: A Step-by-Step Process', date: 'May 10, 2024', image: '/assets/article_uk_visa.jpg' },
];

const footerSections = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Our Services', 'Destinations', 'Events', 'Blog', 'Contact Us'],
  },
  {
    title: 'Our Services',
    links: ['University Admissions', 'Visa Assistance', 'Scholarship Guidance', 'Education Loans', 'Pre-Departure Support', 'Post-Arrival Support'],
  },
  {
    title: 'Popular Destinations',
    links: ['Canada', 'UK', 'USA', 'Australia', 'Germany', 'New Zealand'],
  },
];

const navLinks = ['HOME', 'ABOUT US', 'DESTINATIONS', 'SERVICES', 'BLOG', 'EVENTS', 'CONTACT US'];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFooterSection, setExpandedFooterSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFooterSection = (title: string) => {
    setExpandedFooterSection(expandedFooterSection === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-soft-white font-sans">
      <Navbar />
      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full">
        <div className="relative h-[480px] sm:h-[520px] md:h-[580px] lg:h-[600px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/assets/blog_hero.png"
            alt="Study Abroad"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(7, 19, 32, 0.88) 0%, rgba(7, 19, 32, 0.60) 55%, rgba(7, 19, 32, 0.10) 100%)',
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                {/* Subtitle with plane trail */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-300 italic text-sm sm:text-base font-medium">
                    Your Journey Starts Here
                  </span>
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" className="hidden sm:block">
                    <path d="M0 8H30" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.6"/>
                    <path d="M30 8L38 4V12L30 8Z" fill="white" opacity="0.8"/>
                  </svg>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Study Abroad<br />
                  Insights & Stories
                </h1>

                {/* Description */}
                <p className="text-white/80 text-sm sm:text-base mb-6 max-w-md leading-relaxed">
                  Expert advice, student stories, destination guides and everything you need to make your study abroad dream a reality.
                </p>

                {/* Search Bar */}
                <div className="flex bg-white rounded-lg overflow-hidden shadow-lg max-w-md">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none"
                  />
                  <button className="bg-royal-blue hover:bg-navy px-5 py-3 transition-colors">
                    <Search className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="mt-4">
                  <LiquidMetalButton label="Book a Free Consultation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: Articles */}
          <div className="flex-1 lg:w-3/4">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-5 bg-royal-blue rounded-full"></span>
                Latest Articles
              </h2>
              <a href="#" className="hidden md:flex items-center gap-1 text-sm text-royal-blue font-medium hover:underline">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Desktop: 3-column grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} layout="grid" />
              ))}
            </div>

            {/* Mobile: horizontal card list */}
            <div className="md:hidden space-y-4">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} layout="list" />
              ))}
            </div>

            {/* Desktop Pagination */}
            <div className="hidden md:flex items-center justify-center gap-2 mt-8">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                    num === 1
                      ? 'bg-royal-blue text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-royal-blue hover:text-royal-blue'
                  }`}
                >
                  {num}
                </button>
              ))}
              <span className="text-gray-400 px-1">...</span>
              <button className="w-9 h-9 rounded-lg text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-royal-blue hover:text-royal-blue transition-colors">
                10
              </button>
              <button className="w-9 h-9 rounded-lg text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-royal-blue hover:text-royal-blue transition-colors flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile: Load More */}
            <div className="md:hidden mt-6">
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-3 rounded-lg text-sm font-medium hover:border-royal-blue hover:text-royal-blue transition-colors">
                Load More Articles
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:w-1/4 space-y-6">
            <SidebarContent />
          </aside>
        </div>

        {/* Mobile: Sidebar content appears below articles */}
        <div className="lg:hidden mt-10 space-y-8">
          <SidebarContent />
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Compass className="w-7 h-7 text-royal-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Ready to Start Your Study Abroad Journey?</h3>
                <p className="text-sm text-gray-500 mt-0.5">Get personalized guidance from our experts and take the first step towards your global future.</p>
              </div>
            </div>
            <LiquidMetalButton label="Book a Free Consultation" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ========== ARTICLE CARD ========== */
function ArticleCard({ article, layout }: { article: typeof articles[0]; layout: 'grid' | 'list' }) {
  if (layout === 'list') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex">
        <div className="w-[140px] sm:w-[160px] flex-shrink-0">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 p-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-semibold px-2.5 py-1 rounded-md mb-2">
            {article.tag}
          </span>
          <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 mb-2">{article.title}</h3>
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-semibold px-2.5 py-1 rounded-md mb-2">
          {article.tag}
        </span>
        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{article.desc}</p>
        <div className="flex items-center gap-3 text-gray-400 text-xs">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {article.date}
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ========== SIDEBAR CONTENT ========== */
function SidebarContent() {
  const [email, setEmail] = useState('');

  return (
    <>
      {/* About the Blog */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="text-base font-bold text-gray-900 mb-3">About the Blog</h3>
        <div className="flex items-start gap-2 mb-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0 mt-0.5">
            <circle cx="16" cy="16" r="14" stroke="#1E3A8A" strokeWidth="1.5" fill="none"/>
            <path d="M8 12C8 12 11 8 16 8C21 8 24 12 24 12" stroke="#1E3A8A" strokeWidth="1.5" fill="none"/>
            <path d="M8 20C8 20 11 24 16 24C21 24 24 20 24 20" stroke="#1E3A8A" strokeWidth="1.5" fill="none"/>
            <line x1="16" y1="8" x2="16" y2="24" stroke="#1E3A8A" strokeWidth="1.5"/>
            <path d="M10 16H22" stroke="#1E3A8A" strokeWidth="1.5"/>
          </svg>
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none" className="mt-1">
            <path d="M0 8H30" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
            <path d="M30 8L38 4V12L30 8Z" fill="#1E3A8A" opacity="0.6"/>
          </svg>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          At GlobalPathways, we believe information empowers decisions. Our blog is your go-to resource for trusted insights, real stories, and expert tips on studying abroad.
        </p>
        <button className="border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg hover:border-royal-blue hover:text-royal-blue transition-colors">
          ABOUT US
        </button>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="text-base font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="flex items-center justify-between group"
            >
              <div className="flex items-.center gap-3">
                <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-royal-blue transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-royal-blue transition-colors">{cat.name}</span>
              </div>
              <span className="text-xs text-gray-400">{cat.count}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="text-base font-bold text-gray-900 mb-4">Popular Articles</h3>
        <div className="space-y-4">
          {popularArticles.map((article, idx) => (
            <a key={idx} href="#" className="flex items-start gap-3 group">
              <img
                src={article.image}
                alt={article.title}
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-xs font-semibold text-gray-800 leading-snug group-hover:text-royal-blue transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <span className="flex items-center gap-1 text-gray-400 text-[11px] mt-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div
        className="rounded-xl p-5 text-white relative overflow-hidden"
        style={{
          background:
            'linear-gradient(100deg, rgba(7, 19, 32, 0.88) 0%, rgba(7, 19, 32, 0.60) 55%, rgba(7, 19, 32, 0.10) 100%)',
        }}
      >
        {/* Decorative plane trail */}
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="absolute top-3 right-3 opacity-40">
          <path d="M0 15H45" stroke="white" strokeWidth="1" strokeDasharray="3 3"/>
          <path d="M45 15L55 10V20L45 15Z" fill="white"/>
        </svg>
        <h3 className="text-lg font-bold mb-1">Stay Updated!</h3>
        <p className="text-white/80 text-xs mb-4 leading-relaxed">
          Subscribe to our newsletter and never miss an update.
        </p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-800 placeholder-gray-400 outline-none"
          />
          <LiquidMetalButton label="Subscribe" />
        </div>
      </div>
    </>
  );
}
