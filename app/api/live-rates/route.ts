import { NextResponse } from 'next/server';

export const revalidate = 3600;

export type LiveRateApiResponse = {
  updatedAt: string;
  rates: Array<{
    commodity: string;
    price: number;
    change: number;
    unit: string;
    source: string;
  }>;
};

const mockRates = [
  { commodity: 'Chilli', price: 8125, change: 2.4, unit: 'quintal', source: 'Agmarknet' },
  { commodity: 'Cotton', price: 6940, change: -1.1, unit: 'quintal', source: 'Agmarknet' },
  { commodity: 'Paddy', price: 2150, change: 0.8, unit: 'quintal', source: 'Agmarknet' },
  { commodity: 'Turmeric', price: 9725, change: 1.6, unit: 'quintal', source: 'Agmarknet' },
  { commodity: 'Gold', price: 7520, change: 0.9, unit: '10g', source: 'MCX / Bullion' },
  { commodity: 'Silver', price: 91400, change: -0.5, unit: 'kg', source: 'MCX / Bullion' }
] as const;

export async function GET(): Promise<NextResponse<LiveRateApiResponse>> {
  const updatedAt = new Date().toISOString();

  return NextResponse.json(
    {
      updatedAt,
      rates: mockRates.map((item) => ({ ...item }))
    },
    { status: 200 }
  );
}
