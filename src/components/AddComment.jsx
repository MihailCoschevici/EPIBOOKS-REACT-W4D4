// src/components/AddComment.jsx

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ asin }) => {
  const [newComment, setNewComment] = useState({
    comment: '',
    rate: '1',
    elementId: asin,
  });

  const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/';
  const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhOGE5ZjRlZjFiYzAwMTVkZjViMDMiLCJpYXQiOjE3NTM3MjMzNDcsImV4cCI6MTc1NDkzMjk0N30.mAWJMUNILecz1F7ErtIIjCis5bh7QWeRQRiIF9g520U'; // <-- SOSTITUISCI CON IL TUO TOKEN

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      if (response.ok) {
        alert('Recensione inviata!');
        setNewComment({
          comment: '',
          rate: '1',
          elementId: asin,
        });
      } else {
        alert('Errore nell\'invio della recensione.');
      }
    } catch (error) {
      console.error('Errore nel POST:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="mb-2">
        <Form.Label>La tua recensione</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={newComment.rate}
          onChange={(e) => setNewComment({ ...newComment, rate: e.target.value })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;