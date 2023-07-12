// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Hello Header</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/city/:id">Tour Detail</Link>
      </nav>
    </header>
  );
};

export default Header;
