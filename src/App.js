import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { GlobalStorage } from './Contexts/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="rest-countries-api-with-color-theme-switcher" element={<Home />} /* this route is only for use on GitHub Pages */ />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
