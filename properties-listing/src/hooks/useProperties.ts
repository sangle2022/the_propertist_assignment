import { usePropertyData } from '../context/PropertyDataContext';
import type { Property } from '../types';

export interface UsePropertiesResult {
  properties: Property[];
  isLoading: boolean;
}

export function useProperties(): UsePropertiesResult {
  return usePropertyData();
}
