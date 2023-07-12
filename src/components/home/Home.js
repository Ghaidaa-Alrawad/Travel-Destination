import React from 'react';
import Tours from '../tours/Tours';
import tourData from '../../data/db.json';

function Home() {
  return (
    <div>

        <Tours tourData={tourData} />

    </div>
  );
}

export default Home;
