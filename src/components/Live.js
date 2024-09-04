// src/components/Live.js
import React from 'react';
import "./Live.css"

const Live = ({ language }) => {
  const content = {
    English: 'Live broadcasts and more!',
    French: 'Diffusions en direct et plus encore!',
    German: 'Live-Übertragungen und mehr!',
    Russian: 'Прямые трансляции и многое другое!',
    Spanish: '¡Transmisiones en vivo y más!',
    Chinese: '现场直播和更多内容！'
  };

  return (
    <div>
     
      <p className="live-description">{content[language]}</p>
      <img src="https://img.freepik.com/free-photo/man-with-camera-world-photographer-day_1150-23278.jpg" alt="live-image" className="live-image" />
    </div>
  );
};

export default Live;

