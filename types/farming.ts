export type CropCategory =
  | 'Cash Crop'
  | 'Horticulture'
  | 'Forestry'
  | 'Agroforestry'
  | 'Soil Health';

export type FarmingGuide = {
  slug: string;
  title: string;
  teluguTitle: string;
  cropCategory: CropCategory;
  soilType: string;
  waterRequirement: string;
  duration: string;
  steps: string[];
  roiEconomics: {
    cost: string;
    yield: string;
    margin: string;
    payback: string;
  };
  summary: string;
  image?: string;
};
