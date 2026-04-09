import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { HomePage } from '../pages/HomePage';
import { PropertyDetailsPage } from '../pages/PropertyDetailsPage';

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
      </Route>
    </Routes>
  );
}
