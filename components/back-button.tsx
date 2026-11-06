'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
          return;
        }
        router.push('/');
      }}
      className={className}
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}
