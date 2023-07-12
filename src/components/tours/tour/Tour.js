import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = ({ tour }) => {
  const { id, name, image } = tour;

  return (
    <div className="card" id={id}>
      <Link to={`/city/${id}`} className="tour-link" id='nameId'>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt={name} className="tour-image" id="img" />
    </div>
  );
};

export default Tour;
