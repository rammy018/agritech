'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { ArrowRight, BanknoteArrowUp, Coins, Landmark, Tractor } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

const financeCards = {
  en: [
    {
      icon: BanknoteArrowUp,
      title: 'Farm credit support',
      description: 'Compare crop loans, working capital, and seasonal borrowing plans for sowing, harvesting, and storage.'
    },
    {
      icon: Tractor,
      title: 'Tractor & equipment finance',
      description: 'Estimate tractor EMI, government subsidy impact, and repayment planning for harvest and field operations.'
    },
    {
      icon: Coins,
      title: 'Gold and pledge loans',
      description: 'Calculate gold loan values, against purity, pricing, and monthly interest before pledging jewellery or assets.'
    },
    {
      icon: Landmark,
      title: 'Land and property finance',
      description: 'Understand land conversion, valuation inputs, and realistic budget planning for rural property investments.'
    }
  ],
  te: [
    {
      icon: BanknoteArrowUp,
      title: 'రైతు క్రెడిట్ సహాయం',
      description: 'పంట రుణాలు, పని ద్రవ్యం మరియు sowing, harvest, storage కోసం సీజన్ బోరువీలను పోల్చండి.'
    },
    {
      icon: Tractor,
      title: 'ట్రాక్టర్ & పరికరాల ఫైనాన్స్',
      description: 'ట్రాక్టర్ EMI, ప్రభుత్వ సబ్సిడీ ప్రభావం మరియు తిరిగి చెల్లించే ప్రణాళికను అంచనా వేయండి.'
    },
    {
      icon: Coins,
      title: 'బంగారం మరియు గడుగు రుణాలు',
      description: 'బంగారం గడువు, శుభ్రత, రేటు మరియు నెలవారీ వడ్డీ ఆధారంగా రుణాన్ని లెక్కించండి.'
    },
    {
      icon: Landmark,
      title: 'భూమి మరియు ఎస్టేట్ ఫైనాన్స్',
      description: 'భూమి మార్పిడి, విలువ, మరియు గ్రామీణ ప్రాపర్టీ పెట్టుబడి ప్రణాళికలను అర్థం చేసుకోండి.'
    }
  ]
};

export function FinancePageContent() {
  const { language } = useLanguage();
  const cards = financeCards[language];

  const copy = {
    en: {
      eyebrow: 'Rural finance',
      title: 'Financing tools built for farmers, landowners, and rural businesses.',
      subtitle: 'Compare EMI, simple interest, tractor loans, gold loans, and rural business funding with quick estimates in Telugu and English.',
      primary: 'Back to home',
      secondary: 'Talk to us',
      why: 'Why farmers use this',
      whyTitle: 'Transparent rural finance decisions',
      list1: 'Compare simple-interest, EMI, and informal lending cost in one place.',
      list2: 'Understand tractor, crop, and gold-loan monthly burden before signing documents.',
      list3: 'Use Telangana and Andhra-style rate inputs in Telugu and English for faster planning.',
      summary: 'Quick summary',
      farm: 'Farm loans',
      tractor: 'Tractor EMI',
      gold: 'Gold loan'
    },
    te: {
      eyebrow: 'గ్రామీణ ఆర్థికం',
      title: 'రైతులు, భూమిదారులు మరియు గ్రామీణ వ్యాపారాల కోసం రూపొందించిన ఫైనాన్స్ టూల్స్.',
      subtitle: 'EMI, సింపుల్ ఇంటరెస్ట్, ట్రాక్టర్ లోన్, బంగారం లోన్ మరియు గ్రామీణ వ్యాపార నిధులను తెలుగులో మరియు ఇంగ్లీష్లో పోల్చండి.',
      primary: 'హోమ్కి తిరిగి వెళ్లండి',
      secondary: 'మాతో మాట్లాడండి',
      why: 'రైతులు దీనిని ఎందుకు ఉపయోగిస్తారు',
      whyTitle: 'స్పష్టమైన గ్రామీణ ఆర్థిక నిర్ణయాలు',
      list1: 'సింపుల్ ఇంటరెస్ట్, EMI మరియు అనధికారిక వడ్డీ ఖర్చులను ఒకే చోట పోల్చండి.',
      list2: 'పత్రాలు కట్టడానికి ముందు ట్రాక్టర్, పంట మరియు బంగారం లోన్ నెలవారీ భారాన్ని అర్థం చేసుకోండి.',
      list3: 'తెలంగాణ మరియు ఆంధ్రప్రదేశ్ విధానాలు ఆధారంగా తెలుగులో మరియు ఇంగ్లీష్లో త్వరిత ప్రణాళిక చేయండి.',
      summary: 'త్వరిత సారాంశం',
      farm: 'పంట రుణాలు',
      tractor: 'ట్రాక్టర్ EMI',
      gold: 'బంగారం లోన్'
    }
  };

  const text = copy[language];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500 p-6 text-white shadow-soft sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">{text.eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">{text.title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-emerald-50 sm:text-base">{text.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-emerald-700">
            {text.primary}
          </Link>
          <Link href={'/contact' as Route} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 text-sm font-semibold text-white">
            {text.secondary}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ icon: Icon, title, description }) => (
          <article key={title} className="card-surface p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-600">{text.why}</p>
          <h2 className="mt-3 text-2xl font-bold">{text.whyTitle}</h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-700 dark:text-slate-200">
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" /> {text.list1}</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" /> {text.list2}</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" /> {text.list3}</li>
          </ul>
        </div>

        <div className="card-surface p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-600">{text.summary}</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
              <div className="text-xs uppercase tracking-[0.12em] text-slate-500">{text.farm}</div>
              <div className="mt-2 text-2xl font-black">₹ 1L – ₹ 50L</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
              <div className="text-xs uppercase tracking-[0.12em] text-slate-500">{text.tractor}</div>
              <div className="mt-2 text-2xl font-black">5–7 year plans</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
              <div className="text-xs uppercase tracking-[0.12em] text-slate-500">{text.gold}</div>
              <div className="mt-2 text-2xl font-black">18–24 carat range</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
