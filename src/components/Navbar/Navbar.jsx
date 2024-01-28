import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h1>The Bookshelf</h1>
        </Link>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
      </div>
    </div>
  );
};
