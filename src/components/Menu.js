// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        home: 'Home',
        movies: 'Movies',
        tvShows: 'TV Shows',
        sports: 'Sports',
        live: 'Live'
      }
    };
  }

  componentDidMount() {
    this.fetchMenuItems(this.props.language);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language) {
      this.fetchMenuItems(this.props.language);
    }
  }

  fetchMenuItems(language) {
    fetch(`https://menuapp-backend-2jbj.onrender.com/api/menu-items?lang=${language}`)
      .then((response) => response.json())
      .then((data) => {
        // Ensure each label is a string, not an object
        this.setState({
          labels: {
            home: data.home || 'Home',
            movies: data.movies || 'Movies',
            tvShows: data.tvShows || 'TV Shows',
            sports: data.sports || 'Sports',
            live: data.live || 'Live'
          }
        });
      })
      .catch((error) => console.error('Error fetching menu items:', error));
  }

  render() {
    const { labels } = this.state;
    return (
      <div className="menu">
        <Link to="/home" className="menu-item home">
          {typeof labels.home === 'string' ? labels.home : 'Home'}
        </Link>
        <Link to="/movies" className="menu-item movies">
          {typeof labels.movies === 'string' ? labels.movies : 'Movies'}
        </Link>
        <Link to="/tvshows" className="menu-item tvshows">
          {typeof labels.tvShows === 'string' ? labels.tvShows : 'TV Shows'}
        </Link>
        <Link to="/sports" className="menu-item sports">
          {typeof labels.sports === 'string' ? labels.sports : 'Sports'}
        </Link>
        <Link to="/live" className="menu-item live">
          {typeof labels.live === 'string' ? labels.live : 'Live'}
        </Link>
      </div>
    );
  }
}

export default Menu;






