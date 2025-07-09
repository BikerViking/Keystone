import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

