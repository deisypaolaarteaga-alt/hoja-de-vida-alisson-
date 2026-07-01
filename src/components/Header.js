import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="cv-header">
      <h1 className="cv-name">
        Alisson<br />Ochoa Toro
      </h1>
      <div className="cv-role-bar">
        <span className="cv-role-text">Desarrolladora de Software Full Stack</span>
      </div>
    </header>
  );
}

export default Header;
