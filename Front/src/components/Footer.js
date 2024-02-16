import React from 'react';
import '../styles/Footer.css'; // Make sure to create this CSS file and import it
import AboutPage from '../pages/AboutUsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
	
	const handleClick = () => {
    alert("UWU UWUW");
	};

	
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <p><Link to="/about">A propos</Link></p>
        </div>
        <div className="footer-section">
          <p><Link to="/Signup">S'inscrire</Link></p>
        </div>
        <div className="footer-section">
          <p><Link to="/login">Se connecter</Link></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 BookBuddy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

