// src/components/SingleBook.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleBook = ({ book }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100" data-testid="book-card"> 
      <Card.Img 
        variant="top" 
        src={book.img} 
        style={{ height: '350px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex-grow-1">
          {book.title}
        </Card.Title>
       
        <Button 
          variant="primary" 
          onClick={() => navigate(`/details/${book.asin}`)}
        >
          Vedi Dettagli
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;