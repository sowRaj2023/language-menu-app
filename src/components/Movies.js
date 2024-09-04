// src/components/Movies.js
import React from 'react';
import "./Movies.css"

const Movies = ({ language }) => {
  const content = {
    English: 'Here are some movies!',
    French: 'Voici quelques films!',
    German: 'Hier sind einige Filme!',
    Russian: 'Вот некоторые фильмы!',
    Spanish: '¡Aquí hay algunas películas!',
    Chinese: '这里有一些电影！'
  };

  return (
    <div>
      
      <p>{content[language]}</p>
      <img src="https://img.freepik.com/free-photo/landscape-lake-surrounded-by-mountains_23-2148215162.jpg" alt="movies-image" className="movies-image" />
    </div>
  );
};

export default Movies;

