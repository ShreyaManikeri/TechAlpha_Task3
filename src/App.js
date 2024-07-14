import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Explore from './components/Explore';

function App() {
  return (
    <Router>
      <div className="App">
        <header><Navbar /></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
