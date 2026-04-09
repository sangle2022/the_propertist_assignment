import type { BhkFilterValue, ListingType, Property } from '../types';

export interface FilterPropertiesParams {
  locationQuery: string;
  listingType: ListingType;
  bhkFilter: BhkFilterValue | null;
}

export function filterProperties(
  items: Property[],
  params: FilterPropertiesParams
): Property[] {
  const query: string = params.locationQuery.trim().toLowerCase();
  return items.filter((property: Property) => {
    if (property.listingType !== params.listingType) {
      return false;
    }
    if (params.bhkFilter !== null) {
      if (params.bhkFilter === '4+') {
        if (property.bhkNumeric < 4) {
          return false;
        }
      } else if (property.bhkNumeric !== params.bhkFilter) {
        return false;
      }
    }
    if (query.length > 0) {
      const haystack: string = `${property.location} ${property.city} ${property.title}`
        .toLowerCase();
      if (!haystack.includes(query)) {
        return false;
      }
    }
    return true;
  });
}
