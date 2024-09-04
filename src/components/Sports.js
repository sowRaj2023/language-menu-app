// src/components/Sports.js
import React from 'react';
import "./Sports.css";

const Sports = ({ language }) => {
  const content = {
    English: 'All about sports here!',
    French: 'Tout sur le sport ici!',
    German: 'Alles über Sport hier!',
    Russian: 'Все о спорте здесь!',
    Spanish: '¡Todo sobre deportes aquí!',
    Chinese: '这里有关于运动的一切！'
  };

  return (
    <div>

      <p className="sports-description">{content[language]}</p>
      <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg" alt="sports-image" className="sports-image" />
    </div>
  );
};

export default Sports;

