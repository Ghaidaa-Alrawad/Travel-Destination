import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TourDetails.css';
import tourData from '../../data/db.json';

const TourDetail = () => {
  const { id } = useParams();
  const tour = tourData.find((tour) => tour.id === (id));
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  if (!tour) {
    return <div>No tour found.</div>;
  }

  const { name, info, image } = tour;

  const truncatedDescription = info.substring(0, 100);

  return (
    <div className="tour-details">
      <h2>{name}</h2>
      <img src={image} alt={name} className="tour-image" />
      <p className="description"> 
        {showFullDescription ? info : truncatedDescription}
        {info.length > 100 && (
          <button className="toggle-button" onClick={toggleDescription}>
            {showFullDescription ? 'See Less' : 'See More'}
          </button>
        )}
      </p>
    </div>
  );
};

export default TourDetail;
