import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
