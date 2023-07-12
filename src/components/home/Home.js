// import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import tourData from '../../data/db.json';
import Footer from '../footer/Footer';

function Home() {
  return (
    <div>
      <Header />

      <div className="homeCardDiv">
        <Tours tourData={tourData} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
