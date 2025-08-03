// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa i componenti del layout e delle pagine
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNav />

    
      <Routes>
        <Route path="/" element={<AllTheBooks />} />
        <Route path="/details/:asin" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <MyFooter />
    </div>
  );
}

export default App;