import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import ImageSlider from './components/ImageSlider';
import { useState, useEffect } from 'react';
import SampleImage from './assets/logo.png';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`${theme} fade-in slide-in`}>
      <Router>
        <div className="navbar glowing-effect">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <button className="toggle-btn bounce" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 ' : '☀️ '}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<><ImageSlider /><Home /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className="image-container">
          <h2>Welcome to My Website</h2>
          <img src={SampleImage} alt="Sample" className="sample-image" />
        </div>

        <footer className="footer fade-in slide-in">
          <p>© 2025 My Website. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#">Facebook</a> |
            <a href="#">Twitter</a> |
            <a href="#">Instagram</a>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;