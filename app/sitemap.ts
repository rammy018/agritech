import type { MetadataRoute } from 'next';
import { farmingGuides } from '@/lib/data/farming-guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const guideRoutes = farmingGuides.map((guide) => ({
    url: `${baseUrl}/farming/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...guideRoutes
  ];
}
