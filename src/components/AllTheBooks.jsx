// src/components/AllTheBooks.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import fantasyBooks from '../data/fantasy.json';
import Welcome from './Welcome';

const AllTheBooks = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = fantasyBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Welcome />
      
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} lg={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Cerca un titolo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {filteredBooks.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;