'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { Menu, Sprout, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/components/language-provider';

const navItems = [
	{ label: { en: 'Home', te: 'హోమ్' }, href: '/' },
  { label: { en: 'Farming', te: 'వ్యవసాయం' }, href: '/farming' },
  { label: { en: 'Finance', te: 'ఫైనాన్స్' }, href: '/finance' },
  { label: { en: 'Land', te: 'భూమి' }, href: '/land' },
  { label: { en: 'Contact', te: 'సంప్రదించండి' }, href: '/contact' },
  { label: { en: 'About', te: 'మా గురించి' }, href: '/about' }
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <Sprout className="h-4 w-4" />
          </span>
          <span className="text-base sm:text-lg">AgriTech</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href as Route}
                className={`text-sm font-medium transition ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-300'
                    : 'text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-300'
                }`}
              >
                {item.label[language]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle language"
            onClick={toggleLanguage}
            className="hidden min-h-[40px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 md:inline-flex"
          >
            {language === 'en' ? 'తెలుగు' : 'EN'}
          </button>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 md:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              aria-label="Toggle language"
              onClick={toggleLanguage}
              className="inline-flex min-h-[40px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {language === 'en' ? 'తెలుగు' : 'EN'}
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href as Route}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {item.label[language]}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
