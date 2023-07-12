import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <h3>Author: Ghaidaa</h3>
      <h5>
        <Link to="https://facebook.com">Fcebook</Link>
      </h5>
    </footer>
  );
}

export default Footer;
