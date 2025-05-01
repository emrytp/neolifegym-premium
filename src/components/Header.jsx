import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/img/logo.png" alt="NeolifeGym Premium Logo" />
          </Link>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/pricing">Classes</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li className="dropdown">
              <span>Pages</span>
              <ul className="dropdown-menu">
                <li><Link to="/classes-timetable">Classes Timetable</Link></li>
                <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/404">404</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
