import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { LanguageProvider } from '@/components/language-provider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'AgriTech Rural Portal',
  description: 'Bilingual agricultural, real estate, and rural finance portal for India.',
  keywords: ['agriculture', 'real estate', 'rural finance', 'agri loans', 'Telugu', 'EMI'],
  openGraph: {
    title: 'AgriTech Rural Portal',
    description: 'Smart agri tools, finance calculators, and farming guidance.',
    type: 'website',
    locale: 'en_IN'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteHeader />
          <div className="min-h-screen">{children}</div>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
