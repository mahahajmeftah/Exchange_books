import React, { useState, useEffect } from 'react';
import '../styles/WelcomePage.css'; // Make sure to create this CSS file and import it
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate, Link } from "react-router-dom";

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

    const images = [require(
      "../assets/angerbibli.png"),
      require("../assets/anger.png"),
      require("../assets/background-pic.jpeg"),
      require("../assets/bibli1.png")
      // Add more images as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [images.length]);

  return (
    <div className="welcome-page">
      <Header />
      <div className="section welcome-section">
        <div className="welcome-content">
          <h1>Bienvenue sur BookBuddy</h1>
          <p className="description">BookBuddy est une plateforme dynamique de partage de livres où les 
          utilisateurs peuvent échanger leurs livres. Vous pourrez y retrouver les livres disponibles et 
          contacter leur propriétaire pour emprunter le livre.</p>
          {(name != undefined ? 
          <>
            
          </>	
            :
            <>
            <div className="buttons">
              <button className="login-button" onClick={onLoginClick} >SE CONNECTER</button>
              <button className="signup-button"onClick={onSignUpClick} >S'INSCRIRE</button>
          </div>
            </>	
          )}
          
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>A propos</h2>
            <p>BookBuddy est une communauté indépendante partageant une passion pour les livres.</p>
            <Link to="/inventory">
              <button className="about-button">Trouver un livre</button>
            </Link>
          </div>
          <div className="image-gallery">
              <div className="about-image">
                  <img src={images[currentIndex]} alt={`Display ${currentIndex + 1}`} />
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;