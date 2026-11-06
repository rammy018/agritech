import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/contact-page-content';

export const metadata: Metadata = {
  title: 'Contact AgriTech',
  description: 'Get in touch with AgriTech for rural finance, farming guidance, and land planning support.'
};

export default function ContactPage() {
  return <ContactPageContent />;
}
