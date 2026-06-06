'use client'

import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';

export default function FeaturedArticle() {
  const featuredArticle =
    articles.find(article => article.featured) ||
    articles[0];

  if (!featuredArticle) {
    return null;
  }

  return (
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
                <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
                    Latest Insight
                </span>
                <h2 className="text-4xl font-bold text-white mt-3">
                    Featured Article
                </h2>
            </div>
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    min-h-[500px]
                    group
                "
            >
                <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    width={1200}
                    height={500}
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                <div className="relative z-10 max-w-2xl p-10 md:p-16">
                    <span
                        className="
                            inline-flex
                            px-4
                            py-2
                            rounded-full
                            bg-[#D4AF37]
                            text-black
                            font-semibold
                            mb-6
                        "
                    >
                        {featuredArticle.tag}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {featuredArticle.title}
                    </h3>
                    <p className="text-slate-300 text-lg mb-8">
                        {featuredArticle.desc}
                    </p>
                    <Link
                        href={`/blog/${featuredArticle.slug}`}
                        className="
                            inline-flex
                            items-center
                            gap-3
                            bg-[#D4AF37]
                            text-black
                            px-8
                            py-4
                            rounded-full
                            font-semibold
                        "
                    >
                        Read Full Article →
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
