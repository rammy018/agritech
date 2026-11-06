import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Land & Property Calculator',
  description: 'Convert acres, guntas, cents, sq yards, and ankanam with real-time land measurement tools.'
};

export default function LandPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="card-surface p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">Land</p>
        <h1 className="mt-3 text-3xl font-bold">Land & property tools</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Use unit conversion and area estimation for land assessment, property valuation, and agriculture planning.
        </p>
      </section>
    </main>
  );
}
