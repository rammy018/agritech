'use client';

import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

export function ContactPageContent() {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: 'Contact',
      title: 'Talk to the AgriTech team',
      subtitle: 'Need guidance on rural loans, tractor finance, gold loan planning, or land and crop decisions? Our team is ready to help.',
      formName: 'Name',
      formPhone: 'Phone',
      formMessage: 'Message',
      send: 'Send enquiry',
      contactInfo: 'Contact info',
      help: 'Need help fast?',
      helpText: 'We support quick finance planning for farm loans, gold pledges, tractor purchases, and land-related decisions across Telugu-speaking regions.',
      explore: 'Explore finance tools'
    },
    te: {
      eyebrow: 'సంప్రదింపు',
      title: 'అగ్రిటెక్ టీంతో మాట్లాడండి',
      subtitle: 'గ్రామీణ రుణాలు, ట్రాక్టర్ ఫైనాన్స్, బంగారం లోన్ ప్లానింగ్ లేదా భూమి మరియు పంట నిర్ణయాల ఎలాంటి సహాయం కావాలా? మా టీం ముందుకు ఉంది.',
      formName: 'పేరు',
      formPhone: 'ఫోన్',
      formMessage: 'సందేశం',
      send: 'వివరణ పంపండి',
      contactInfo: 'సంప్రదింపు సమాచారం',
      help: 'త్వరగా సహాయం కావాలా?',
      helpText: 'రైతు రుణాలు, బంగారం లోన్, ట్రాక్టర్ కొనుగోలు మరియు భూమి సంబంధిత నిర్ణయాల కోసం త్వరిత ఫైనాన్స్ ప్లానింగ్ అందిస్తాము.',
      explore: 'ఫైనాన్స్ టూల్స్ చూడండి'
    }
  };

  const text = copy[language];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-6 text-white shadow-soft sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">{text.eyebrow}</p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">{text.title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200">{text.subtitle}</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface p-6">
          <h2 className="text-2xl font-bold">{text.eyebrow}</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{text.formName}</label>
              <input placeholder={language === 'en' ? 'Your name' : 'మీ పేరు'} className="min-h-[46px] w-full rounded-xl border border-slate-200 bg-white px-3 text-base dark:border-slate-700 dark:bg-slate-900" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{text.formPhone}</label>
              <input placeholder={language === 'en' ? '+91 98765 43210' : '+91 98765 43210'} className="min-h-[46px] w-full rounded-xl border border-slate-200 bg-white px-3 text-base dark:border-slate-700 dark:bg-slate-900" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{text.formMessage}</label>
              <textarea rows={5} placeholder={language === 'en' ? 'Tell us about your financing requirement' : 'మీ ఫైనాన్స్ అవసరాన్ని వివరించండి'} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base dark:border-slate-700 dark:bg-slate-900" />
            </div>
            <button type="button" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white">
              {text.send}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-surface p-6">
            <h2 className="text-xl font-bold">{text.contactInfo}</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>hello@agritechportal.in</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>{language === 'en' ? 'Hyderabad, Telangana • Serving rural India' : 'హైదరాబాదు, తెలంగాణ • గ్రామీణ భారతానికి సేవ'}</span>
              </div>
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="text-xl font-bold">{text.help}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{text.helpText}</p>
            <Link href="/finance" className="mt-5 inline-flex min-h-[44px] items-center rounded-xl bg-emerald-50 px-3 text-sm font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
              {text.explore}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
