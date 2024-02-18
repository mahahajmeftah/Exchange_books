import React from 'react';
import '../styles/WelcomePage.css'; // Make sure to create this CSS file and import it
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

const WelcomePage = (props) => {
    const { loggedIn, email } = props	
	const navigate = useNavigate();
   const onLoginClick = () => {	
       navigate('/login');
    }
    const onSignUpClick = () => {	
      navigate('/Signup');
   }
   var name = undefined;
    const jwt = JSON.parse(sessionStorage.getItem("jwt"));
    if(jwt != undefined){
      name = jwt.user.name;
    }
  return (
    <div className="welcome-page">
      <Header />
      <div className="section welcome-section">
        <div className="welcome-content">
          <h1>Welcome to BookBuddy</h1>
          <p className="description">BookBuddy is a dynamic book-sharing platform where users can upload, exchange, and discuss their favorite books. It allows users to upload books in PDF or physical formats, set locations for easy exchanges, create book forums, and engage in a vibrant community-driven space with reviews, ratings, and direct messaging.</p>
          {(name != undefined ? 
          <>
            
          </>	
            :
            <>
            <div className="buttons">
              <button className="login-button" onClick={onLoginClick} >SIGN IN</button>
              <button className="signup-button"onClick={onSignUpClick} >SIGN Up</button>
          </div>
            </>	
          )}
          
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>The BookBuddy is an independent community sharing a love for books...</p>
            <button className="about-button">Find Your Book</button>
          </div>
          <div className="about-image">
            <img src={require("../assets/logo.png")} alt="test1" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;