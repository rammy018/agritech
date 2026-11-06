import Link from 'next/link';
import type { Metadata } from 'next';
import { farmingGuides } from '@/lib/data/farming-guides';
import { buildMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  return farmingGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = farmingGuides.find((item) => item.slug === slug);

  if (!guide) {
    return buildMetadata({ title: 'Farming Guide', description: 'AgriTech farming guide not found.', path: '/farming' });
  }

  return buildMetadata({
    title: `${guide.title} | AgriTech`,
    description: guide.summary,
    path: `/farming/${guide.slug}`,
    image: '/og-image.png'
  });
}

export default async function FarmingGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = farmingGuides.find((item) => item.slug === slug);

  if (!guide) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="card-surface p-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">Farming guide</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Guide not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">This farming technique is not available yet. Explore the main farming hub for regional practices.</p>
          <Link href="/farming" className="mt-6 inline-flex rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white">View farming hub</Link>
        </div>
      </main>
    );
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.summary,
    tool: ['Bio-inoculants', 'Green manure', 'Soil testing'],
    step: guide.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step
    }))
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
        <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-300">Home</Link>
        <span>/</span>
        <Link href="/farming" className="hover:text-emerald-700 dark:hover:text-emerald-300">Farming</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white">{guide.title}</span>
      </nav>

      <article className="card-surface p-5 sm:p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-emerald-600">{guide.cropCategory}</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{guide.title}</h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{guide.teluguTitle}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <InfoPill label="Soil" value={guide.soilType} />
          <InfoPill label="Water" value={guide.waterRequirement} />
          <InfoPill label="Duration" value={guide.duration} />
        </div>

        <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-200">{guide.summary}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
            <h2 className="text-lg font-semibold">Implementation steps</h2>
            <ol className="mt-4 space-y-3">
              {guide.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
            <h2 className="text-lg font-semibold text-emerald-900 dark:text-emerald-200">ROI economics</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <li><span className="font-medium">Cost:</span> {guide.roiEconomics.cost}</li>
              <li><span className="font-medium">Yield uplift:</span> {guide.roiEconomics.yield}</li>
              <li><span className="font-medium">Margin:</span> {guide.roiEconomics.margin}</li>
              <li><span className="font-medium">Payback:</span> {guide.roiEconomics.payback}</li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">{value}</p>
    </div>
  );
}
