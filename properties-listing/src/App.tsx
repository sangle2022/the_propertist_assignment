import type { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PropertyDataProvider } from './context/PropertyDataContext';
import { AppRoutes } from './routes/AppRoutes';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <PropertyDataProvider>
        <AppRoutes />
      </PropertyDataProvider>
    </BrowserRouter>
  );
}
