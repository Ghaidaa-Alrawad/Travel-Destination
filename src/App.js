import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import TourDetail from './components/TourDetails/TourDetails';
import Header from './components/header/Header';
import './App.css';
import './components/footer/Footer.css';
import './components/header/Header.css';
import './components/home/Home.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:id" element={<TourDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
