import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { WatchListContextProvider } from './context/watchListContext';
import StockDetail from './pages/StockDetail';
import StockOverview from './pages/StockOverview';

const App = () => {

  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverview />} />
            <Route path="/detail/:symbol" element={<StockDetail />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}

export default App;
