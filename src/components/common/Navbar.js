import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbarMain">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Expenditures
      </Link>
      <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>
        Add Expenditure
      </Link>
    </div>
  );
}

export default Navbar;
