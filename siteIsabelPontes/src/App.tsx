import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import HomeEditorial from './pages/HomeEditorial';
import SobreMim from './pages/SobreMim';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeEditorial />} />
        <Route path="/sobre" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
