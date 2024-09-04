// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleLanguageChange = (event) => {
    this.props.onLanguageChange(event.target.value);
  };

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    const { language } = this.props;
    const { menuOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar-menu" onClick={this.toggleMenu}>
          ☰
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/home" className="navbar-item">Home</Link>
          <Link to="/movies" className="navbar-item">Movies</Link>
          <Link to="/tvshows" className="navbar-item">TV Shows</Link>
          <Link to="/sports" className="navbar-item">Sports</Link>
          <Link to="/live" className="navbar-item">Live</Link>
        </div>
        <div className="navbar-language">
          <select value={language} onChange={this.handleLanguageChange}>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
      </nav>
    );
  }
}

export default Navbar;






