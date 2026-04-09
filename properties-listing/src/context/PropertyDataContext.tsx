import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import propertiesData from '../data/properties.json';
import type { Property } from '../types';

const LOADING_DELAY_MS = 720;

export interface PropertyDataContextValue {
  properties: Property[];
  isLoading: boolean;
}

const PropertyDataContext = createContext<PropertyDataContextValue | null>(null);

interface PropertyDataProviderProps {
  children: ReactNode;
}

export function PropertyDataProvider({ children }: PropertyDataProviderProps): ReactElement {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timeoutId: number = window.setTimeout(() => {
      setProperties(propertiesData as Property[]);
      setIsLoading(false);
    }, LOADING_DELAY_MS);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);
  const value: PropertyDataContextValue = { properties, isLoading };
  return (
    <PropertyDataContext.Provider value={value}>{children}</PropertyDataContext.Provider>
  );
}

export function usePropertyData(): PropertyDataContextValue {
  const context: PropertyDataContextValue | null = useContext(PropertyDataContext);
  if (context === null) {
    throw new Error('usePropertyData must be used within PropertyDataProvider');
  }
  return context;
}
