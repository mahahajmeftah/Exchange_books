import React from 'react';
import '../styles/AboutUsPage.css'; // Ajustez le chemin au besoin
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import logoLinkedin from '../assets/logo_linkedin.png';


const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-section">
        <div className="about-description">
          <h2>À Propos</h2>
          <p>BookBuddy est une communauté indépendante partageant un amour pour les livres. Nous offrons une plateforme pour emprunter des livres auprès d'autres utilisateurs dans la ville d'Angers.</p>
          <button className="find-book-button">Trouvez Votre Livre</button>
        </div>

        {/* Section pour les Créatrices et le Contexte du Projet */}
        <div className="creators-section about-description">
          <h2>Rencontrez les Créatrices</h2>
          <p>
            Le projet BookBuddy a été créé par une équipe de trois étudiantes de Polytech Angers :
          </p><br/>
            <div>
              <strong>Faustine Guillou</strong> 
              <a href="https://www.linkedin.com/in/faustine-guillou" 
              target="_blank" rel="noopener noreferrer">
              <img src={logoLinkedin} alt="Logo Linkedin" style={{ width: '20px', height: '20px' }}/>
              </a><br/></div>
            <div>
              <strong>Aya Rhoumdane</strong><a href="https://www.linkedin.com/in/aya-rhoumdane/" 
              target="_blank" rel="noopener noreferrer">
              <img src={logoLinkedin} alt="Logo Linkedin" style={{ width: '20px', height: '20px' }}/>
              </a><br/>
            </div>
            <div>
              <strong>Maha Hadj Meftah</strong><a href="https://www.linkedin.com/in/maha-haj-meftah-02a0b5132?trk=contact-info" 
              target="_blank" rel="noopener noreferrer">
              <img src={logoLinkedin} alt="Logo Linkedin" style={{ width: '20px', height: '20px' }}/>
              </a><br/>
            </div>
        </div>

        <div className="project-context-section about-description">
          <h2>Contexte du Projet</h2>
          <p>
            Ce projet a été développé dans le cadre d'un cours visant à découvrir le développement Web 
            et les difféents langages permettant de le réaliser. Il nous a offert l'opportunité  
            de mettre en valeur  compétences en développement web et en design tout en créant une plateforme 
            pour les amateurs de livres.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
