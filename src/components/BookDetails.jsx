// src/components/BookDetails.jsx

import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fantasyBooks from '../data/fantasy.json';
import CommentArea from './CommentArea';

const BookDetails = () => {
  const { asin } = useParams();
  const book = fantasyBooks.find((b) => b.asin === asin);

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          {book ? (
            <>
              <h2 className="text-center mb-4">Dettagli del Libro:</h2>
              <Card>
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img src={book.img} />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        <strong>Categoria:</strong> {book.category}
                      </Card.Text>
                     <Card.Text>
                      <strong>Autore:</strong> {book.author}
                      </Card.Text>
                      <Card.Text>
                        <strong>Prezzo:</strong> {book.price}€
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <CommentArea asin={book.asin} />
            </>
          ) : (
            <Alert variant="warning">Libro non trovato.</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;