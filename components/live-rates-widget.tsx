'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, RefreshCcw, Share2, TrendingUp } from 'lucide-react';

export type LiveRate = {
  commodity: string;
  price: number;
  change: number;
  unit: string;
  source: string;
};

function getChangeTone(change: number) {
  if (change > 0) return 'text-emerald-600';
  if (change < 0) return 'text-red-600';
  return 'text-slate-500';
}

export default function LiveRatesWidget() {
  const [rates, setRates] = useState<LiveRate[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const fetchRates = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/live-rates', { cache: 'no-store' });
      const data = (await response.json()) as { updatedAt: string; rates: LiveRate[] };
      setRates(data.rates);
      setUpdatedAt(data.updatedAt);
    } catch (error) {
      console.error('Failed to load live rates', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const shareMessage = () => {
    const text = rates.map((item) => `${item.commodity}: ₹${item.price}/${item.unit} (${item.change >= 0 ? '+' : ''}${item.change}%)`).join('\n');
    const sharedUrl = `https://wa.me/?text=${encodeURIComponent(`${text}\n\nUpdated: ${updatedAt}`)}`;
    window.open(sharedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="mt-8 card-surface p-4 sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-amber-100 p-2 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Market Pulse</p>
            <h2 className="text-xl font-bold">Live rates</h2>
          </div>
        </div>

        <div className="flex gap-2">
          <button type="button" onClick={fetchRates} className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button type="button" onClick={shareMessage} className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-emerald-600 px-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
            <Share2 className="h-4 w-4" />
            WhatsApp
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-28 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800" />
          ))}
        </div>
      ) : (
        <>
          <div className="mb-3 flex items-center justify-between gap-2 text-[11px] text-slate-500">
            <span>Updated: {updatedAt}</span>
            <span className="rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">Market snapshot</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {rates.map((rate) => (
              <article key={rate.commodity} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">{rate.commodity}</h3>
                  <span className={`inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold dark:bg-slate-700 ${getChangeTone(rate.change)}`}>
                    {rate.change > 0 ? <ArrowUpRight className="h-3.5 w-3.5" /> : rate.change < 0 ? <ArrowDownRight className="h-3.5 w-3.5" /> : null}
                    {rate.change >= 0 ? '+' : ''}{rate.change}%
                  </span>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">₹{rate.price}</p>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-500">per {rate.unit}</div>
                  </div>
                  <div className="rounded-lg bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                    {rate.source}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
