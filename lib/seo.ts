import type { Metadata } from 'next';

export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/og-image.png'
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'AgriTech Rural Portal',
      images: [{ url: `${baseUrl}${image}`, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${image}`]
    }
  };
}
