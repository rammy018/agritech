import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/about-page-content';

export const metadata: Metadata = {
  title: 'About AgriTech',
  description: 'Learn about AgriTech and its mission for rural productivity, land planning, and finance.'
};

export default function AboutPage() {
  return <AboutPageContent />;
}
