import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';

function App() {
  return (
    <BrowserRouter>
      <nav>nav</nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
