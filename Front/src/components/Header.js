// Header.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import '../styles/Header.css'

import websiteLogo from '../assets/logo.png'; // Replace with the correct path to your website logo
import facebookIcon from '../assets/facebook.png'; // Path to our Facebook icon
import instagramIcon from '../assets/instagram.png'; // Path to our Instagram icon
import NavBar from '../components/NavBar';

import { Link } from 'react-router-dom'; // Import Link

const Header = (props) => {
    const { loggedIn, email } = props
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo">
          <h1>BookBuddy</h1>
          {/* Logo can go here */}
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/inventory">INVENTORY</Link></li>
            <li><Link to="/books">MyBooks</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            
          </ul>
        </nav>
        <div className="social-media">
          {/* Social media links can go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;