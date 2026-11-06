'use client';

import { useMemo, useState } from 'react';
import { Calculator, Coins, IndianRupee, MapPinned, RotateCcw, Tractor } from 'lucide-react';

const tabs = [
  { key: 'simple-interest', label: 'వడ్డీ లెక్క', subtitle: 'Rupee Vaddi / Simple Interest' },
  { key: 'emi', label: 'EMI', subtitle: 'Bank EMI' },
  { key: 'gold', label: 'గోల్డ్ లోన్', subtitle: 'Gold loan' },
  { key: 'tractor', label: 'ట్రాక్టర్ EMI', subtitle: 'Tractor finance' },
  { key: 'land', label: 'భూమి కొలత', subtitle: 'Unit converter' },
  { key: 'hire', label: 'యంత్రాల అద్దె', subtitle: 'Equipment finance' }
] as const;

type TabKey = (typeof tabs)[number]['key'];

export default function UtilityCalculator() {
  const [activeTab, setActiveTab] = useState<TabKey>('simple-interest');

  return (
    <section className="card-surface p-4 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">క్యాలిక్యులేటర్</p>
            <h2 className="text-xl font-bold">వడ్డీ • EMI • గోల్డ్ • ట్రాక్టర్</h2>
          </div>
        </div>
        <div className="text-right text-[11px] text-slate-500">
          <div>Hyderabad market</div>
          <div>Updated today</div>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`min-h-[44px] rounded-xl border px-3 py-2 text-left text-sm font-medium ${
              activeTab === tab.key
                ? 'border-emerald-500 bg-emerald-500 text-white shadow-md'
                : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <div>{tab.label}</div>
            <div className={`text-[10px] ${activeTab === tab.key ? 'text-emerald-100' : 'text-slate-500'}`}>{tab.subtitle}</div>
          </button>
        ))}
      </div>

      {activeTab === 'simple-interest' && <SimpleInterestTab />}
      {activeTab === 'emi' && <EmiTab />}
      {activeTab === 'gold' && <GoldLoanTab />}
      {activeTab === 'tractor' && <TractorEmiTab />}
      {activeTab === 'land' && <LandTab />}
      {activeTab === 'hire' && <HireTab />}
    </section>
  );
}

function SimpleInterestTab() {
  const [principal, setPrincipal] = useState<number | string>(100000);
  const [rate, setRate] = useState<number | string>(2);
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState('2026-12-31');
  const [rateMode, setRateMode] = useState<'percentage' | 'rupee'>('rupee');

  const clearAll = () => {
    setPrincipal('');
    setRate('');
    setStartDate('');
    setEndDate('');
  };

  const normalizeDays = () => {
    if (!startDate || !endDate) return 365;
    const from = new Date(startDate);
    const to = new Date(endDate);
    const diff = Math.max(0, Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)));
    return diff || 365;
  };

  const days = normalizeDays();
  const principalValue = Number(principal) || 0;
  const rateValue = Number(rate) || 0;

  const simpleData = useMemo(() => {
    const monthlyVaddi = rateMode === 'rupee' ? rateValue : (rateValue * 100) / 100;
    const annualRate = rateMode === 'percentage' ? rateValue : monthlyVaddi * 12;
    const interest = (principalValue * annualRate * days) / (365 * 100);
    const totalPayable = principalValue + interest;
    const monthlyEquivalent = interest / Math.max(1, Math.ceil(days / 30));

    return { interest, totalPayable, monthlyEquivalent, annualRate };
  }, [principalValue, rateValue, days, rateMode]);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="మొత్తం పెట్టుబడి (₹)" value={principal} onChange={setPrincipal} />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">వడ్డీ విధానం</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRateMode('rupee')}
              className={`min-h-[44px] rounded-xl border px-3 py-2 text-sm font-medium ${rateMode === 'rupee' ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
            >
              ₹ per ₹100 / month
            </button>
            <button
              type="button"
              onClick={() => setRateMode('percentage')}
              className={`min-h-[44px] rounded-xl border px-3 py-2 text-sm font-medium ${rateMode === 'percentage' ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
            >
              % per year
            </button>
          </div>
        </div>

        <Field label={rateMode === 'rupee' ? 'వడ్డీ రేటు (₹ per ₹100 / month)' : 'వడ్డీ రేటు (%)'} value={rate} onChange={setRate} />

        <div className="grid gap-3 sm:grid-cols-2">
          <DateField label="మొదటి తారీ" value={startDate} onChange={setStartDate} />
          <DateField label="చివరి తారీ" value={endDate} onChange={setEndDate} />
        </div>

        <button
          type="button"
          onClick={clearAll}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <RotateCcw className="h-4 w-4" />
          Clear
        </button>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
        <div className="mb-3 flex items-center justify-between gap-2 text-emerald-700 dark:text-emerald-300">
          <div className="flex items-center gap-2"><IndianRupee className="h-4 w-4" /> <span className="font-semibold">ఫలితం</span></div>
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">{days} days</span>
        </div>
        <ResultRow label="వడ్డీ" value={`₹${simpleData.interest.toFixed(2)}`} />
        <ResultRow label="మాసిక సమానం" value={`₹${simpleData.monthlyEquivalent.toFixed(2)}`} />
        <ResultRow label="మొత్తం చెల్లింపు" value={`₹${simpleData.totalPayable.toFixed(2)}`} highlight />
      </div>
    </div>
  );
}

function EmiTab() {
  const [loanAmount, setLoanAmount] = useState<number | string>(500000);
  const [annualRate, setAnnualRate] = useState<number | string>(8.5);
  const [months, setMonths] = useState<number | string>(84);

  const loan = Number(loanAmount) || 0;
  const rate = Number(annualRate) || 0;
  const tenure = Number(months) || 0;

  const emiData = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      monthlyRate === 0 || tenure === 0
        ? loan / Math.max(1, tenure)
        : (loan * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
          (Math.pow(1 + monthlyRate, tenure) - 1);

    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - loan;

    return { emi, totalPayment, totalInterest };
  }, [loan, rate, tenure]);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="లోన్ మొత్తం (₹)" value={loanAmount} onChange={setLoanAmount} />
        <Field label="వార్షిక వడ్డీ (%)" value={annualRate} onChange={setAnnualRate} />
        <Field label="వ్యవధి (నెలలు)" value={months} onChange={setMonths} />
      </div>
      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
        <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><Calculator className="h-4 w-4" /> <span className="font-semibold">EMI సారాంశం</span></div>
        <ResultRow label="మాసిక EMI" value={`₹${emiData.emi.toFixed(2)}`} />
        <ResultRow label="మొత్తం వడ్డీ" value={`₹${emiData.totalInterest.toFixed(2)}`} />
        <ResultRow label="మొత్తం చెల్లింపు" value={`₹${emiData.totalPayment.toFixed(2)}`} highlight />
      </div>
    </div>
  );
}

function GoldLoanTab() {
  const [goldGrams, setGoldGrams] = useState<number | string>(20);
  const [purity, setPurity] = useState<number | string>(22);
  const [ratePerGram, setRatePerGram] = useState<number | string>(6500);
  const [loanPercent, setLoanPercent] = useState<number | string>(75);
  const [monthlyRate, setMonthlyRate] = useState<number | string>(1.5);
  const [months, setMonths] = useState<number | string>(12);

  const data = useMemo(() => {
    const grams = Number(goldGrams) || 0;
    const purityValue = Number(purity) || 0;
    const pricePerGram = Number(ratePerGram) || 0;
    const percent = Number(loanPercent) || 0;
    const monthly = Number(monthlyRate) || 0;
    const duration = Number(months) || 0;

    const goldValue = grams * pricePerGram * (purityValue / 24);
    const loanAmount = goldValue * (percent / 100);
    const totalInterest = loanAmount * (monthly / 100) * duration;
    const totalPayable = loanAmount + totalInterest;
    const monthlyEmi = totalPayable / Math.max(1, duration);

    return { goldValue, loanAmount, totalInterest, totalPayable, monthlyEmi };
  }, [goldGrams, purity, ratePerGram, loanPercent, monthlyRate, months]);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="బంగారం (గ్రాములు)" value={goldGrams} onChange={setGoldGrams} />
        <Field label="శుభ్రమాణం (కరట్)" value={purity} onChange={setPurity} />
        <Field label="గ్రాముకి రేటు (₹)" value={ratePerGram} onChange={setRatePerGram} />
        <Field label="లోన్ శాతం (%)" value={loanPercent} onChange={setLoanPercent} />
        <Field label="మాసిక వడ్డీ (%)" value={monthlyRate} onChange={setMonthlyRate} />
        <Field label="వ్యవధి (నెలలు)" value={months} onChange={setMonths} />
      </div>
      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
        <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><Coins className="h-4 w-4" /> <span className="font-semibold">గోల్డ్ లోన్ ఫలితం</span></div>
        <ResultRow label="గోల్డ్ విలువ" value={`₹${data.goldValue.toFixed(2)}`} />
        <ResultRow label="లోన్ మొత్తం" value={`₹${data.loanAmount.toFixed(2)}`} />
        <ResultRow label="మాసిక EMI" value={`₹${data.monthlyEmi.toFixed(2)}`} />
        <ResultRow label="మొత్తం వడ్డీ" value={`₹${data.totalInterest.toFixed(2)}`} />
        <ResultRow label="మొత్తం చెల్లింపు" value={`₹${data.totalPayable.toFixed(2)}`} highlight />
      </div>
    </div>
  );
}

function TractorEmiTab() {
  const [loanAmount, setLoanAmount] = useState<number | string>(800000);
  const [annualRate, setAnnualRate] = useState<number | string>(9.5);
  const [years, setYears] = useState<number | string>(5);
  const [downPayment, setDownPayment] = useState<number | string>(150000);
  const [subsidy, setSubsidy] = useState<number | string>(20);

  const principal = Math.max(0, Number(loanAmount) || 0);
  const rate = Number(annualRate) || 0;
  const tenureYears = Number(years) || 1;
  const down = Number(downPayment) || 0;
  const subsidyValue = Number(subsidy) || 0;

  const tractorData = useMemo(() => {
    const financed = Math.max(0, principal - down);
    const subsidyAmount = financed * (subsidyValue / 100);
    const netPrincipal = Math.max(0, financed - subsidyAmount);
    const months = tenureYears * 12;
    const monthlyRate = rate / 12 / 100;
    const emi =
      monthlyRate === 0 || months === 0
        ? netPrincipal / Math.max(1, months)
        : (netPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayable = emi * months;
    const totalInterest = totalPayable - netPrincipal;

    return { financed, subsidyAmount, netPrincipal, months, emi, totalPayable, totalInterest };
  }, [principal, rate, tenureYears, down, subsidyValue]);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="ట్రాక్టర్ ధర (₹)" value={loanAmount} onChange={setLoanAmount} />
        <Field label="డౌన్ పేమెంట్ (₹)" value={downPayment} onChange={setDownPayment} />
        <Field label="సబ్సిడీ (%)" value={subsidy} onChange={setSubsidy} />
        <Field label="వార్షిక వడ్డీ (%)" value={annualRate} onChange={setAnnualRate} />
        <Field label="వ్యవధి (సంవత్సరాలు)" value={years} onChange={setYears} />
      </div>
      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
        <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><Tractor className="h-4 w-4" /> <span className="font-semibold">ట్రాక్టర్ EMI</span></div>
        <ResultRow label="ఫైనాన్స్ చేయబడిన మొత్తం" value={`₹${tractorData.financed.toFixed(2)}`} />
        <ResultRow label="సబ్సిడీ మొత్తం" value={`₹${tractorData.subsidyAmount.toFixed(2)}`} />
        <ResultRow label="నెట్లోన్" value={`₹${tractorData.netPrincipal.toFixed(2)}`} />
        <ResultRow label="మాసిక EMI" value={`₹${tractorData.emi.toFixed(2)}`} />
        <ResultRow label="మొత్తం వడ్డీ" value={`₹${tractorData.totalInterest.toFixed(2)}`} />
        <ResultRow label="మొత్తం చెల్లింపు" value={`₹${tractorData.totalPayable.toFixed(2)}`} highlight />
      </div>
    </div>
  );
}

function LandTab() {
  const [acres, setAcres] = useState<number | string>(1);

  const conversion = useMemo(() => {
    const value = Number(acres) || 0;
    const guntas = value * 40;
    const cents = value * 100;
    const sqYards = value * 4840;
    const ankanam = value * 10;
    return { guntas, cents, sqYards, ankanam };
  }, [acres]);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="ఎకరాలు" value={acres} onChange={setAcres} />
      </div>
      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
        <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><MapPinned className="h-4 w-4" /> <span className="font-semibold">భూమి మార్పిడి</span></div>
        <ResultRow label="గుంటలు" value={`${conversion.guntas.toFixed(2)}`} />
        <ResultRow label="సెంట్లు" value={`${conversion.cents.toFixed(2)}`} />
        <ResultRow label="చ. గజాలు" value={`${conversion.sqYards.toFixed(2)}`} />
        <ResultRow label="అంకనం" value={`${conversion.ankanam.toFixed(2)}`} highlight />
      </div>
    </div>
  );
}

function HireTab() {
  const [equipment, setEquipment] = useState('tractor');
  const [hours, setHours] = useState<number | string>(40);
  const [acres, setAcres] = useState<number | string>(12);
  const [subsidy, setSubsidy] = useState<number | string>(40);

  const equipmentRates: Record<string, { hourly: number; purchase: number; emiMonths: number }> = {
    tractor: { hourly: 850, purchase: 1200000, emiMonths: 60 },
    drone: { hourly: 420, purchase: 950000, emiMonths: 48 },
    harvester: { hourly: 1800, purchase: 2800000, emiMonths: 72 }
  };

  const data = useMemo(() => {
    const rate = equipmentRates[equipment];
    const hoursValue = Number(hours) || 0;
    const acresValue = Number(acres) || 1;
    const subsidyValue = Number(subsidy) || 0;

    const customRental = rate.hourly * hoursValue;
    const loanAmount = rate.purchase * (1 - subsidyValue / 100);
    const monthlyEmi = (loanAmount * 0.09) / 12 / (1 - Math.pow(1 + 0.09 / 12, -rate.emiMonths));
    const costPerAcre = customRental / acresValue;
    return { customRental, loanAmount, monthlyEmi, costPerAcre };
  }, [equipment, hours, acres, subsidy]);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">యంత్రం</label>
          <select
            value={equipment}
            onChange={(event) => setEquipment(event.target.value)}
            className="min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="tractor">50HP ట్రాక్టర్</option>
            <option value="drone">డ్రోన్ స్ప్రేయర్</option>
            <option value="harvester">కంపైన్ హార్వెస్టర్</option>
          </select>
        </div>
        <Field label="ఉపయోగించిన గంటలు" value={hours} onChange={setHours} />
        <Field label="సేవ చేసిన ఎకరాలు" value={acres} onChange={setAcres} />
        <Field label="సబ్సిడీ (%)" value={subsidy} onChange={setSubsidy} />
      </div>
      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
        <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><Tractor className="h-4 w-4" /> <span className="font-semibold">అద్దె vs కొనుగోలు</span></div>
        <ResultRow label="అద్దె మొత్తం" value={`₹${data.customRental.toFixed(0)}`} />
        <ResultRow label="కొనుగోలు తర్వాత సబ్సిడీ" value={`₹${data.loanAmount.toFixed(0)}`} />
        <ResultRow label="మాసిక EMI" value={`₹${data.monthlyEmi.toFixed(0)}`} />
        <ResultRow label="ఎకరాకు అద్దె" value={`₹${data.costPerAcre.toFixed(0)}`} highlight />
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange
}: {
  label: string;
  value: number | string;
  onChange: (value: number | string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</label>
      <input
        type="number"
        inputMode="decimal"
        min={0}
        value={value}
        onChange={(event) => {
          const raw = event.target.value;
          if (raw === '') {
            onChange('');
            return;
          }
          const nextValue = Number(raw);
          onChange(Number.isFinite(nextValue) ? nextValue : 0);
        }}
        className="min-h-[46px] w-full rounded-xl border border-slate-200 bg-white px-3 text-base dark:border-slate-700 dark:bg-slate-900"
      />
    </div>
  );
}

function DateField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</label>
      <input
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-[46px] w-full rounded-xl border border-slate-200 bg-white px-3 text-base dark:border-slate-700 dark:bg-slate-900"
      />
    </div>
  );
}

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center justify-between border-b border-slate-200 py-3 last:border-b-0 dark:border-slate-700 ${highlight ? 'text-lg font-semibold text-emerald-700 dark:text-emerald-300' : 'text-sm text-slate-700 dark:text-slate-200'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
