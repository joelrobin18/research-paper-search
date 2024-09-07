import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';  

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Search
      </NavLink>
      <NavLink 
        to="/saved" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Saved
      </NavLink>
    </nav>
  );
};

export default NavBar;
