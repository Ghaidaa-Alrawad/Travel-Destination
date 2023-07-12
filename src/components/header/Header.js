import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Travel Destinatio</h1>
      <nav>
        <Link to="/" id='link'>Home</Link>        
      </nav>
    </header>
  );
};

export default Header;
