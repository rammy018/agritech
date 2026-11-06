import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Farming Techniques in Andhra Pradesh & Telangana | AgriTech',
  description: 'Best farming techniques, crop planning, pest management, soil health, and region-based guidance for Andhra Pradesh and Telangana farmers.'
};

const cropTechniques = [
  {
    crop: 'Paddy',
    region: 'Godavari • Krishna • Telangana plains',
    season: 'Kharif and Rabi',
    yield: '5–8 t/ha',
    techniques: [
      'Adopt SRI or line transplanting with 2–3 seedlings per hill to save seed and improve tillering.',
      'Use soil test-based nitrogen, phosphorus and potassium dosing with basal application before puddling.',
      'Apply alternate wetting and drying (AWD) during vegetative stage to reduce water use without yield loss.',
      'Use weed management through puddling + pre-emergence herbicides and hand weeding at 20–25 days.'
    ]
  },
  {
    crop: 'Cotton',
    region: 'Telangana • Rayalaseema • Warangal belt',
    season: 'Kharif',
    yield: '2.5–4.5 q/ha',
    techniques: [
      'Choose pest-tolerant hybrids and sow in well-prepared, deep, friable soils with timely monsoon onset.',
      'Follow square planting and maintain plant population to support boll development and better sunlight.',
      'Schedule drip or furrow irrigation during flowering and boll formation to reduce stress.',
      'Use integrated pest management with pheromone traps, neem spray and threshold-based insecticide use.'
    ]
  },
  {
    crop: 'Maize',
    region: 'Telangana • Coastal Andhra',
    season: 'Kharif and Rabi',
    yield: '5–7 t/ha',
    techniques: [
      'Use early maturing hybrids with precision spacing for better cob set and reduced lodging risk.',
      'Apply basal FYM and balanced NPK, with split nitrogen in 3 applications during vegetative stages.',
      'Keep fields weed-free in first 30–45 days using pre-emergence herbicide + intercultivation.',
      'Protect against fall armyworm using scouting and timely biocontrol or recommended insecticides.'
    ]
  },
  {
    crop: 'Turmeric',
    region: 'Nizamabad • Khammam • Kadapa',
    season: 'Kharif',
    yield: '20–30 t/ha',
    techniques: [
      'Select good rhizome seed and do solarization or treatment with Trichoderma before planting.',
      'Use raised beds and mulching with straw or green biomass to retain soil moisture and reduce heat stress.',
      'Apply organic manure + micronutrient support, especially magnesium and boron, for rhizome bulking.',
      'Use drip irrigation and frequent earthing up to support healthy root development and reduce disease.'
    ]
  },
  {
    crop: 'Chilli',
    region: 'Guntur • Khammam • Telangana red gram belts',
    season: 'Kharif and irrigated plots',
    yield: '1.5–3 t/ha',
    techniques: [
      'Use healthy seedlings and raised beds with wider spacing to improve aeration and reduce disease pressure.',
      'Provide regular nutrient supply with potash support during flowering and fruit set to improve size and color.',
      'Control thrips and mites with sticky traps, border crops and conservative chemical sprays at economic threshold.',
      'Drip irrigation and mulching help maintain steady moisture and reduce blossom drop during dry spells.'
    ]
  },
  {
    crop: 'Groundnut',
    region: 'Anantapur • Kadapa • Telangana rainfed belts',
    season: 'Kharif',
    yield: '1.8–3.5 t/ha',
    techniques: [
      'Use gypsum and lime depending on pH and calcium deficiency, especially in light-textured soils.',
      'Treat seed with Rhizobium and maintain timely sowing with optimum plant population.',
      'Use moisture conservation through contour bunding, inter-row mulching and field furrows.',
      'Prevent leaf spot and rust with resistant seed, proper spacing, and timely fungicide spray under wet conditions.'
    ]
  },
  {
    crop: 'Red gram (Tur)',
    region: 'Telangana • Rayalaseema • dryland belts',
    season: 'Kharif',
    yield: '0.8–1.8 t/ha',
    techniques: [
      'Sow on the first effective monsoon with short-duration, wilt-resistant varieties for resilience.',
      'Use seed treatment with Rhizobium and Trichoderma for root health and disease suppression.',
      'Keep inter-row spacing balanced to reduce competition and improve pod setting in rainfed conditions.',
      'Use pulse-friendly crop rotation to improve soil fertility and break pest cycles.'
    ]
  },
  {
    crop: 'Sugarcane',
    region: 'West Godavari • East Godavari • Nizamabad',
    season: 'Annual crop',
    yield: '80–120 t/ha',
    techniques: [
      'Select healthy setts and use paired-row planting with proper drainage to reduce waterlogging stress.',
      'Apply recommended nitrogen in split doses with sufficient phosphorus and potassium during tillering.',
      'Use trash mulching and drip irrigation to stabilize moisture and improve ratoon performance.',
      'Control borers and mealy bugs through field sanitation and selective pest management.'
    ]
  },
  {
    crop: 'Mango',
    region: 'Krishna • Chittoor • Telangana orchards',
    season: 'Perennial',
    yield: '8–20 t/ha based on age and management',
    techniques: [
      'Use high-density planting with proper canopy management to improve light penetration and yield.',
      'Apply micronutrient and organic manure schedules to maintain flowering and fruit retention.',
      'Use mulch, pruning and irrigation scheduling to avoid alternate bearing and fruit drop.',
      'Adopt fruit fly and hopper management with orchard sanitation and timely sprays.'
    ]
  },
  {
    crop: 'Banana',
    region: 'Vizag • East Godavari • Telangana irrigated belts',
    season: 'Perennial',
    yield: '30–50 t/ha',
    techniques: [
      'Use tissue-cultured plantlets and proper spacing to improve bunch weight and disease-free growth.',
      'Follow balanced nutrition with potassium-rich feeding during bunch emergence for quality fruit.',
      'Maintain systematic irrigation and drainage to avoid rhizome rot and water stress.',
      'Remove old leaves and monitor for sigatoka and wilt for timely intervention.'
    ]
  },
  {
    crop: 'Coconut',
    region: 'Coastal Andhra • Telangana dryland fringe',
    season: 'Perennial',
    yield: '8–15 nuts/tree/year after orchard maturity',
    techniques: [
      'Plant in deep soils with ring trenches and basin mulching for better moisture retention.',
      'Use drip irrigation during dry months and provide potash support for nut quality and yield.',
      'Protect from root wilt and rhinoceros beetle with sanitation, trunk management and monitoring.',
      'Use intercropping with green manure and pulses to improve soil health under the canopy.'
    ]
  },
  {
    crop: 'Vegetables',
    region: 'All districts with irrigation support',
    season: 'Kharif, Rabi and protected cultivation',
    yield: 'Varies by crop—leafy, fruiting and root vegetables',
    techniques: [
      'Use raised beds, drip fertigation and mulching for efficient water and nutrient use.',
      'Practice crop rotation to avoid soil-borne disease accumulation and fertility fatigue.',
      'Adopt nursery management and trellis systems for brinjal, tomato, chilli and cucurbits.',
      'Use integrated pest management and Sanitation in greenhouses and open plots to reduce losses.'
    ]
  }
];

const quickTips = [
  'Start with soil test and pH correction before sowing high-value crops.',
  'Use drip or furrow irrigation wherever possible to save water and raise efficiency.',
  'Apply FYM, compost, and green manure to improve microbial life and organic carbon.',
  'Use crop rotation and intercropping to break pest cycles and improve resilience.',
  'Schedule sprays only after pest threshold checks to reduce cost and resistance risk.'
];

export default function FarmingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[28px] bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500 p-6 text-white shadow-soft sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">AgriTech Farming</p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">Best farming techniques for Andhra Pradesh and Telangana</h1>
        <p className="mt-4 max-w-3xl text-sm text-emerald-50 sm:text-base">
          Region-wise crop guidance for paddy, cotton, maize, chilli, turmeric, groundnut, pulses, sugarcane, fruit crops, and vegetables.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <StatCard label="Kharif focus" value="Monsoon-ready farming" />
        <StatCard label="Irrigation" value="Drip + AWD + mulch" />
        <StatCard label="Soil care" value="FYM + green manure" />
      </section>

      <section className="mt-8 card-surface p-6">
        <h2 className="text-2xl font-bold">Core farming practices for the region</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {quickTips.map((tip) => (
            <div key={tip} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
              {tip}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">Crop-wise techniques</h2>
          <Link href="/" className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Back home</Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {cropTechniques.map((item) => (
            <article key={item.crop} className="card-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-600">{item.region}</p>
                  <h3 className="mt-2 text-xl font-bold">{item.crop}</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                  {item.season}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
                <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">Yield: {item.yield}</span>
                <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">Region: {item.region}</span>
              </div>

              <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {item.techniques.map((technique) => (
                  <li key={technique} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>{technique}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-surface p-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{label}</div>
      <div className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100">{value}</div>
    </div>
  );
}
