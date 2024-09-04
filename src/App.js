// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './components/Home';
import Movies from './components/Movies';
import TVShows from './components/TVShows';
import Sports from './components/Sports';
import Live from './components/Live';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'English'
    };
  }

  handleLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar
            language={this.state.language}
            onLanguageChange={this.handleLanguageChange}
          />
          <Menu language={this.state.language} />
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home language={this.state.language} />} />
              <Route path="/movies" element={<Movies language={this.state.language} />} />
              <Route path="/tvshows" element={<TVShows language={this.state.language} />} />
              <Route path="/sports" element={<Sports language={this.state.language} />} />
              <Route path="/live" element={<Live language={this.state.language} />} />
              <Route path="/" element={<Home language={this.state.language} />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;












