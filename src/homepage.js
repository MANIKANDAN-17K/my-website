import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
       
       
      </Routes>
    
    </Router>
  );
}
