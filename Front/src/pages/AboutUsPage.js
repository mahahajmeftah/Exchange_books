import React from 'react';
import '../styles/AboutUsPage.css'; // Adjust the path as needed
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-section">
        <div className="about-description">
          <h2>About Us</h2>
          <p>The BookBuddy is an independent community sharing a love for books. We offer a platform for book discussions, reviews, and recommendations.</p>
          <button className="find-book-button">Find Your Book</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
