'use client';

import type { Route } from 'next';
import { ArrowRight, Gauge, Landmark, Leaf, MapPinned, PiggyBank, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import LiveRatesWidget from '@/components/live-rates-widget';
import UtilityCalculator from '@/components/utility-calculator';
import { useLanguage } from '@/components/language-provider';

export default function HomePage() {
  const { language } = useLanguage();

  const text = {
    en: {
      eyebrow: 'AgriTech Rural Portal',
      title: 'Rural finance, land value, and market intelligence in one place.',
      subtitle:
        'Track mandi prices, estimate loan EMI, convert acres, and compare farm equipment costs with tools built for Telangana and Andhra farmers.',
      primary: 'Explore finance tools',
      secondary: 'Land rates',
      stat1: 'Rural finance',
      stat1Value: 'EMI tools',
      stat2: 'Live market',
      stat2Value: 'Mandi + metals',
      stat3: 'Farm guidance',
      stat3Value: 'Smart insights',
      featureTitle: 'Farming Guides',
      featureText: 'Field-tested techniques to improve soil, crop mix, and long-term rural profitability.',
      featureTitle2: 'Land & Property',
      featureText2: 'Real estate valuations, land conversion tools, and local-ready measurement support.',
      featureTitle3: 'Rural Finance',
      featureText3: 'Simple-interest, EMI, and equipment financing models built for growers and landowners.'
    },
    te: {
      eyebrow: 'అగ్రిటెక్ గ్రామీణ పోర్టల్',
      title: 'ఒకే ప్లాట్ఫార్మ్లో గ్రామీణ ఆర్థికం, భూమి విలువ మరియు మార్కెట్ సమాచారం.',
      subtitle:
        'మండి ధరలు, లోన్ EMI, ఎకరాల మార్పిడి మరియు పేలవంగా ఉన్న వ్యవసాయ యంత్రాల ఖర్చులను తెలంగాణ మరియు ఆంధ్రప్రదేశ్ రైతులకు అనుగుణంగా చూడండి.',
      primary: 'ఫైనాన్స్ టూల్స్ చూడండి',
      secondary: 'భూమి రేట్లు',
      stat1: 'గ్రామీణ ఆర్థికం',
      stat1Value: 'EMI టూల్స్',
      stat2: 'ప్రస్తుత మార్కెట్',
      stat2Value: 'మండి + మల్టీ మెటల్స్',
      stat3: 'వ్యవసాయ మార్గదర్శకత్వం',
      stat3Value: 'స్మార్ట్ ఇన్సైట్ల్',
      featureTitle: 'వ్యవసాయ మార్గదర్శనలు',
      featureText: 'మట్టి, పంట మిశ్రమం మరియు దీర్ఘకాలిక లాభాలకు సంబంధించిన విధానాలను తెలుసుకోండి.',
      featureTitle2: 'భూమి మరియు Propery',
      featureText2: 'రియల్ ఎస్టేట్ విలువలు, భూమి మార్పిడి మరియు స్థానిక కొలత సహాయం.',
      featureTitle3: 'గ్రామీణ ఆర్థికం',
      featureText3: 'రైతులు మరియు భూమి గలవారు ఉపయోగించే సింపుల్ ఇంటరెస్ట్, EMI మరియు యంత్రాల ఫైనాన్స్ మోడల్స్.'
    }
  };

  const copy = text[language];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500 p-5 text-white shadow-soft sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%)]" />
        <div className="relative">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
            <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">Telugu + English</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">{language === 'en' ? 'Real-time rates' : 'ప్రస్తుత ధరలు'}</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-100">{copy.eyebrow}</p>
              <h1 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-[3.2rem]">
                {copy.title}
              </h1>
              <p className="mt-4 max-w-xl text-sm text-emerald-50 sm:text-base">{copy.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/finance" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-emerald-700 shadow-md hover:bg-emerald-50">
                  {copy.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/land" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15">
                  {copy.secondary}
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <StatCard icon={<Landmark className="h-5 w-5" />} label={copy.stat1} value={copy.stat1Value} />
              <StatCard icon={<TrendingUp className="h-5 w-5" />} label={copy.stat2} value={copy.stat2Value} />
              <StatCard icon={<Leaf className="h-5 w-5" />} label={copy.stat3} value={copy.stat3Value} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <MiniMetricCard icon={<Gauge className="h-4 w-4" />} label={language === 'en' ? 'Gold' : 'బంగారం'} value={language === 'en' ? '₹7,180/10g' : '₹7,180/10గ్రా'} tone="amber" />
        <MiniMetricCard icon={<PiggyBank className="h-4 w-4" />} label={language === 'en' ? 'Fixed deposit' : 'ఫిక్స్డ్ డిపాజిట్'} value={language === 'en' ? '7.10% p.a' : '7.10% p.a'} tone="emerald" />
        <MiniMetricCard icon={<MapPinned className="h-4 w-4" />} label={language === 'en' ? 'Land value' : 'భూమి విలువ'} value={language === 'en' ? '₹3,200/sq yd' : '₹3,200/చ. గజం'} tone="sky" />
      </section>

      <div className="mt-8">
        <UtilityCalculator />
      </div>
      <LiveRatesWidget />

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <FeatureCard
          title={copy.featureTitle}
          description={copy.featureText}
          href="/farming"
        />
        <FeatureCard
          title={copy.featureTitle2}
          description={copy.featureText2}
          href="/land"
        />
        <FeatureCard
          title={copy.featureTitle3}
          description={copy.featureText3}
          href="/finance"
        />
      </section>
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
      <div className="mb-2 flex items-center gap-2 text-emerald-100"><span>{icon}</span><span className="text-[10px] uppercase tracking-[0.15em]">{label}</span></div>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}

function MiniMetricCard({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: 'amber' | 'emerald' | 'sky' }) {
  const toneClasses = {
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
    emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300',
    sky: 'bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-300'
  };

  return (
    <div className="card-surface flex items-center gap-3 p-4">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${toneClasses[tone]}`}>{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">{label}</div>
        <div className="text-base font-bold text-slate-800 dark:text-slate-100">{value}</div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href as Route} className="card-surface block p-5 hover:border-emerald-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 text-emerald-600" />
      </div>
    </Link>
  );
}
