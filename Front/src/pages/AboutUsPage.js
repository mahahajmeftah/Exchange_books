import React from 'react';
import '../styles/AboutUsPage.css'; // Ajustez le chemin au besoin
import Footer from '../components/Footer';
import Header from '../components/Header';

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
            <strong>Faustine Guillou</strong><br/>
            <strong>Aya Rhoumdane</strong><br/>
            <strong>Maha Meftah</strong>
          
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
