// src/components/NotFound.jsx

import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const NotFound = () => (
  <Container>
    <Row className="justify-content-center mt-5">
      <Col md={10}>
        <Alert variant="danger" className="text-center p-4">
          <Alert.Heading className="fs-2">Errore 404</Alert.Heading>
          <hr />
          <p className="fs-5">
            Pagina non trovata. Torna alla <Alert.Link href="/">Homepage</Alert.Link>.
          </p>
        </Alert>
      </Col>
    </Row>
  </Container>
);

export default NotFound;