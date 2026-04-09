export type ListingType = 'buy' | 'rent';

export type BhkFilterValue = 1 | 2 | 3 | '4+';

export interface Property {
  id: string;
  title: string;
  priceDisplay: string;
  location: string;
  city: string;
  bhkLabel: string;
  bhkNumeric: number;
  listingType: ListingType;
  description: string;
  imageUrl: string;
  areaSqFt: string;
  hasOffer?: boolean;
  developer?: string;
}
