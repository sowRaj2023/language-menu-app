// src/components/TVShows.js
import React from 'react';
import "./TVShows.css"

const TVShows = ({ language }) => {
  const content = {
    English: 'Check out these TV shows!',
    French: 'Découvrez ces émissions de télévision!',
    German: 'Schauen Sie sich diese Fernsehsendungen an!',
    Russian: 'Посмотрите эти телешоу!',
    Spanish: '¡Mira estos programas de televisión!',
    Chinese: '看看这些电视节目！'
  };

  return (
    <div>
      
      <p className="description">{content[language]}</p>
      <img src="https://img.freepik.com/free-photo/front-view-beautiful-young-businesswoman-black-jacket-blue-shirt-observing-little-globe-smiling-front-table-business-job-office_140725-15843.jpg" alt="tv-shows" className="tv-shows" />
    </div>
  );
};

export default TVShows;

