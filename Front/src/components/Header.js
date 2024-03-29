// Header.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import '../styles/Header.css'

import websiteLogo from '../assets/logo.png'; // Replace with the correct path to your website logo
import facebookIcon from '../assets/facebook.png'; // Path to our Facebook icon
import instagramIcon from '../assets/instagram.png'; // Path to our Instagram icon
import NavBar from '../components/NavBar';

import { Link } from 'react-router-dom'; // Import Link

const Header = () => {

  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo">
          <h1>BookBuddy</h1>
          {/* Logo can go here */}
        </div>

        <NavBar className="navigation"/>

        <div className="social-media">
          {/* Social media links can go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;