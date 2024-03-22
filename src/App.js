import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import QuienesSomosPage from './pages/quienes-somos.js';
import PortafolioPage from './pages/Portafolio.js';
import ServiciosPage from './pages/Servicios.js';
import ContactoPage from './pages/Contacto.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/quienes-somos" element={<QuienesSomosPage />} />
         
      <Route path="/portafolio" element={<PortafolioPage />} />
         
      <Route path="/servicios" element={<ServiciosPage />} />
         
      <Route path="/contacto" element={<ContactoPage />} />
    </Routes>
  );
}

export default App;
