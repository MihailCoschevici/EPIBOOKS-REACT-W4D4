// src/components/Welcome.jsx

import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import logo from '../assets/LogoEpiBooks.png';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <Alert variant="info" className="text-center">
          <img
            src={logo}
            width="200" 
            className="d-block mx-auto mb-3" 
            alt="EpiBooks logo"
          />
          <h2>Benvenuto in EpiBooks!</h2>
          <p>Il nostro negozio di libri fantasy. Sfoglia le copertine qui sotto e trova la tua prossima avventura!</p>
        </Alert>
      )}
    </>
  );
};

export default Welcome;