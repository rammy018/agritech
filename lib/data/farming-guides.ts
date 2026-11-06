import type { FarmingGuide } from '@/types/farming';

export const farmingGuides: FarmingGuide[] = [
  {
    slug: 'soil-rejuvenation-bio-inoculants-green-manure',
    title: 'Soil Rejuvenation using Bio-Inoculants and Green Manure',
    teluguTitle: 'బయో-ఇనోక్యులెంట్లు మరియు గ్రీన్ మ్యాన్యూర్‌తో మట్టి పునరుత్పత్తి',
    cropCategory: 'Soil Health',
    soilType: 'Red loam, black cotton soils, low-organic fields',
    waterRequirement: 'Moderate irrigation with moisture retention practices',
    duration: '90-120 days for full soil regeneration cycle',
    summary:
      'Improve soil fertility, microbial activity, microbial balance and water-holding capacity using bio-inoculants and green manure.',
    steps: [
      'Test soil pH and EC before application to identify nutrient gaps and salinity risks.',
      'Sow Dhaincha or sunhemp as green manure in 25-30 day windows before main crop planting.',
      'Apply registered bio-inoculants like Azospirillum, PSB, and Trichoderma at seed or field stage.',
      'Mulch with crop residue to reduce evaporation, improve moisture retention and suppress weeds.',
      'Incorporate green matter after flowering and before monsoon or irrigation cycles for faster decomposition.',
      'Rotate with pulses or legumes to maintain living roots and nitrogen balance during off-seasons.'
    ],
    roiEconomics: {
      cost: '₹12,000 to ₹18,000 per acre',
      yield: '10-18% increase in productivity over 1-2 seasons',
      margin: '₹18,000 to ₹35,000 additional gross margin per acre',
      payback: '1 season to 18 months depending on crop' 
    }
  },
  {
    slug: 'multi-cropping-coconut-turmeric-moringa',
    title: 'Multi-Cropping Layout: Coconut + Turmeric + Moringa',
    teluguTitle: 'మల్టీ-క్రాప్ లేఅవుట్: నారింజ + మేను + మోరింగా',
    cropCategory: 'Agroforestry',
    soilType: 'Lateritic and well-drained upland soils',
    waterRequirement: 'Low to moderate irrigation, highly suitable for rainfed regions with drip support',
    duration: 'Annual harvest cycle with long-term coconut and moringa trees',
    summary:
      'A resilient mixed farming system that diversifies income while stabilizing microclimate and soil health.',
    steps: [
      'Plant coconut saplings at 7.5 m spacing with staggered rows to allow light interception and movement.',
      'Grow turmeric in inter-row strips with high organic matter and consistent moisture retention.',
      'Integrate moringa trees on field boundaries for windbreaks, biomass, and nutrient cycling.',
      'Use drip or basin irrigation at critical stages to reduce water stress and improve uniformity.',
      'Apply compost and vermicompost regularly to support turmeric and improve soil structure.',
      'Harvest coconut, turmeric, and moringa in phases to smooth income flows across the year.'
    ],
    roiEconomics: {
      cost: '₹35,000 to ₹55,000 per acre setup with annual maintenance',
      yield: 'Strong diversified revenue from coconut, turmeric, and leaf/pod sales',
      margin: '₹45,000 to ₹90,000 annual gross margin depending on market access',
      payback: '2 to 4 years for steady returns' 
    }
  },
  {
    slug: 'high-value-commercial-crops-bhima-bamboo-mahogany',
    title: 'High-Value Commercial Crops: Bhima Bamboo and Mahogany',
    teluguTitle: 'అధిక విలువ ఉన్న వాణిజ్య పంటలు: భీమ బాంబు మరియు మహోగని',
    cropCategory: 'Forestry',
    soilType: 'Deep soils with moderate drainage and organic richness',
    waterRequirement: 'Moderate irrigation during establishment; low maintenance once rooted',
    duration: 'Three to seven years for commercial returns depending on management',
    summary:
      'Long-term commercial forestry options that improve rural land value and stable cash flow.',
    steps: [
      'Prepare deep ploughing and trenching to support root establishment in compacted soils.',
      'Use healthy saplings and spacing plans that balance canopy growth and future timber density.',
      'Apply compost, phosphorus-rich basal nutrition, and mulching to improve early vigor.',
      'Protect from grazing and fire with fencing, periodic inspection, and weed management.',
      'Thin weak stems at defined intervals to improve timber quality and biomass distribution.',
      'Schedule log sales based on harvest age, moisture content, and local market demand.'
    ],
    roiEconomics: {
      cost: '₹20,000 to ₹45,000 per acre initial planting and upkeep',
      yield: 'Premium wood and bamboo sales over 3-7 year cycles',
      margin: 'High long-term margins with recurring value appreciation',
      payback: '3 to 6 years for bamboo and 5 to 8 years for timber' 
    }
  }
];
