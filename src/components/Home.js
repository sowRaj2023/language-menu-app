// src/components/Home.js
import React from 'react';
import "./Home.css"

const Home = ({ language }) => {
  const content = {
    English: 'Welcome to the Home page!',
    French: 'Bienvenue sur la page d\'accueil!',
    German: 'Willkommen auf der Startseite!',
    Russian: 'Добро пожаловать на главную страницу!',
    Spanish: '¡Bienvenido a la página de inicio!',
    Chinese: '欢迎来到主页!'
  };

  return (
    <div>
      
      <p className="home-description">{content[language]}</p>
      <img src="https://img.freepik.com/free-photo/group-six-indian-businessman-suits-posed-outdoor-winter-day-europe-looking-laptop_627829-13345.jpg" alt="home-image" className="home-image" />
    </div>
  );
};

export default Home;

