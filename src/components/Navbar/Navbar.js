import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <h1>NavBar</h1>
            <Link to='/'>Home</Link>
            {/* <Link to="/tours/:id">City Details</Link> */}

        </nav>
    )
}
export default NavBar;