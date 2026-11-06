import type { Metadata } from 'next';
import { FinancePageContent } from '@/components/finance-page-content';

export const metadata: Metadata = {
  title: 'Rural Finance Tools | AgriTech',
  description: 'Agriculture loans, tractor financing, gold loans, EMI calculators, and land finance guidance for farmers and rural families.'
};

export default function FinancePage() {
  return <FinancePageContent />;
}
