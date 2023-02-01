import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import StockDetail from './pages/StockDetail';
import StockOverview from './pages/StockOverview';

const App = () => {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverview />} />
          <Route path="/detail/:symbol" element={<StockDetail />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
