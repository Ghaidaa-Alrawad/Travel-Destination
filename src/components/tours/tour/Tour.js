// import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = ({ tour }) => {
  const { id, name, image } = tour;

  return (
      <Link to={`/city/${id}`} className="tour-link">
      <div className="card" id={id}>
        <h2>{name}</h2>
        <img src={image} alt={name} className="tour-image" />
      </div>
    </Link>
  );
};

export default Tour;
