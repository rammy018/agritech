import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">404</p>
      <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">The farming guide or page you were looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white"
      >
        Return home
      </Link>
    </main>
  );
}
