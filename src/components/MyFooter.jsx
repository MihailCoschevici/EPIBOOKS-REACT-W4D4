import React from 'react';
import { Container } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white fixed-bottom">
      <Container className="text-center py-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} EpiBooks Store. Tutti i diritti riservati.
        </p>
      </Container>
    </footer>
  );
}

export default MyFooter;
