import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.7;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#" onClick={handleLinkClick}>Listings</a></li>
          <li><a href="#" onClick={handleLinkClick}>Let's Move</a></li>
          <li><a href="#" onClick={handleLinkClick}>About Us</a></li>
        </ul>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar bar1 ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar bar2 ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar bar3 ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
