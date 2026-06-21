import { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { destinations } from '@/data/destinations';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: 'https://rhinnyglobal.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://rhinnyglobal.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://rhinnyglobal.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://rhinnyglobal.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://rhinnyglobal.com/scholarships',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
        url: 'https://rhinnyglobal.com/destinations',
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: 'https://rhinnyglobal.com/referral',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    },
  ];

  const blogPages = articles.map((article) => ({
    url: `https://rhinnyglobal.com/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const destinationPages = destinations.map((destination) => ({
    url: `https://rhinnyglobal.com/destinations/${destination.name.toLowerCase().replace(/ /g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...destinationPages];
}
