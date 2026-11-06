'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

export function AboutPageContent() {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: 'About us',
      title: 'A rural-first platform for finance, land, and farm growth.',
      subtitle: 'AgriTech helps farmers, landowners, and rural families compare loans, estimate costs, and make better decisions with simple tools in Telugu and English.',
      mission: 'Our mission',
      missionText: 'We build practical digital tools that simplify agricultural planning, rural finance, and land analysis. Our goal is to make critical decisions easier, more transparent, and more accessible for households and businesses working in the countryside.',
      cover: 'What we cover',
      list1: 'Farm and crop guidance',
      list2: 'Tractor loan and equipment finance estimation',
      list3: 'Gold loan and simple-interest comparisons',
      list4: 'Land conversion and property valuation support',
      why: 'Why it matters',
      whyTitle: 'Better decisions, stronger rural livelihoods.',
      whyText: 'From crop loans to land purchases, we want farmers and rural households to understand cost, risk, and repayment burden before making a move. Clarity leads to smarter growth.',
      primary: 'Explore finance tools',
      secondary: 'Contact us'
    },
    te: {
      eyebrow: 'మా గురించి',
      title: 'ఫైనాన్స్, భూమి మరియు వ్యవసాయ వృద్ధికి గ్రామీణ-ముందు వేదిక.',
      subtitle: 'అగ్రిటెక్ రైతులు, భూమి యజమానులు మరియు గ్రామీణ కుటుంబాలకు లోన్ పోలిక, ఖర్చు అంచనా మరియు వివిధ నిర్ణయాలు తీసుకోవడంలో సహాయపడుతుంది.',
      mission: 'మా లక్ష్యం',
      missionText: 'వ్యవసాయ ప్రణాళిక, గ్రామీణ ఆర్థికం మరియు భూమి విశ్లేషణను సులభతరం చేసే ప్రాక్టికల్ డిజిటల్ టూల్స్‌ను మేము నిర్మిస్తాము. గ్రామీణంగా పనిచేసే కుటుంబాలు మరియు వ్యాపారాలకు కీలక నిర్ణయాలు ఎక్కువ స్పష్టంగా మరియు సులభంగా ఉండేలా చేయడం మా లక్ష్యం.',
      cover: 'మేము ఏమి కవరు చేస్తాము',
      list1: 'పంట మరియు వ్యవసాయ మార్గదర్శకత్వం',
      list2: 'ట్రాక్టర్ లోన్ మరియు పరికరాల ఫైనాన్స్ అంచనా',
      list3: 'బంగారం లోన్ మరియు సింపుల్ ఇంటరెస్ట్ పోలికలు',
      list4: 'భూమి మార్పిడి మరియు అంచనా సహాయం',
      why: 'ఇది ఎందుకు ముఖ్యమైనది',
      whyTitle: 'మంచి నిర్ణయాలు, బలమైన గ్రామీణ జీవనోపాధి.',
      whyText: 'పంట రుణం నుంచి భూమి కొనుగోలు వరకు, రైతులు మరియు గ్రామీణ కుటుంబాలు ముందుగా ఖర్చు, ప్రమాదం మరియు తిరిగి చెల్లించే భారాన్ని అర్థం చేసుకోవాలి. స్పష్టతనే చురుకైన వృద్ధిని తీసుకువస్తుంది.',
      primary: 'ఫైనాన్స్ టూల్స్ చూడండి',
      secondary: 'మాతో సంప్రదించండి'
    }
  };

  const text = copy[language];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500 p-6 text-white shadow-soft sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">{text.eyebrow}</p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">{text.title}</h1>
        <p className="mt-4 max-w-3xl text-sm text-emerald-50 sm:text-base">{text.subtitle}</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6">
          <h2 className="text-2xl font-bold">{text.mission}</h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{text.missionText}</p>
        </div>

        <div className="card-surface p-6">
          <h2 className="text-2xl font-bold">{text.cover}</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li>• {text.list1}</li>
            <li>• {text.list2}</li>
            <li>• {text.list3}</li>
            <li>• {text.list4}</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 card-surface p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-emerald-600">{text.why}</p>
        <h2 className="mt-3 text-2xl font-bold">{text.whyTitle}</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{text.whyText}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/finance" className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white">
            {text.primary}
          </Link>
          <Link href="/contact" className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            {text.secondary}
          </Link>
        </div>
      </section>
    </main>
  );
}
