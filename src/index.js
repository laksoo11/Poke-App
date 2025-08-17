import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nabvar from './Navbar';
import Home from './Home';
import './navbar.css'
import Pokedex from './Pokedex';
import './Home.css'
import './Pokedex.css'

import { PokedexProvider } from "./PokedexContext";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <PokedexProvider>
   <Router>
    
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </Router>
    </PokedexProvider>
    
  </React.StrictMode>
);


