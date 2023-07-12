import React from 'react';
import { Link } from 'react-router-dom';
import Tour from './tour/Tour';
import './Tours.css'

const Tours = ({ tourData }) => {
  return (
    <div className="homeCardDiv">
      {tourData.map((tour) => (
        <Link key={tour.id} to={`/city/${tour.id}`}>
          <Tour tour={tour} />
        </Link>
      ))}
    </div>
  );
};

export default Tours;
