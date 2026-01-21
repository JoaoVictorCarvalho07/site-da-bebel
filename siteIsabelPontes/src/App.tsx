import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import HomeEditorial from './pages/HomeEditorial';
import SobreMim from './pages/SobreMim';
import NavBar from './components/NavBar';
import ContactSection from './pages/ContactSection';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeEditorial />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/contato" element={<ContactSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
