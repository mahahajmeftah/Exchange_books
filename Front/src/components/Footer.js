import React from 'react';
import '../styles/Footer.css'; // Make sure to create this CSS file and import it

const Footer = () => {
	
	const handleClick = () => {
    alert("UWU UWUW");
	};

	
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>ABOUT US</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>WHY BUY FROM US</h4>
          <ul>
            <li>Shipping & Returns</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>MY ACCOUNT</h4>
          <ul>
            <li>My Account</li>
            <li>My Cart</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>EMAIL SIGNUP</h4>
          <div className="email-signup">
            <input type="email" placeholder="Please, enter your e-mail" />
			<button type="button" onClick={handleClick}>
				Subscribe uwu
			</button>
			
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 BookBuddy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

