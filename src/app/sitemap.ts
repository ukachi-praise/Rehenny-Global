import { MetadataRoute } from 'next'
import { articles } from '@/data/articles';
import { destinations } from '@/data/destinations';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rhinnyglobal.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/destinations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/scholarships`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/referral`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const articleRoutes = articles.map(article => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const destinationRoutes = destinations.map(destination => ({
    url: `${baseUrl}/destinations/${destination.name.toLowerCase().replace(/ /g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...destinationRoutes,
  ];
}