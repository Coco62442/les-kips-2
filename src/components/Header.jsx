import React from 'react';
import '../styles/Header.css';  // Assurez-vous de créer ce fichier CSS dans le répertoire src/Styles/


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Votre Logo</div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/a-propos">À Propos</a></li>
          <li><a href="/campagnes">Campagnes en Cours</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
