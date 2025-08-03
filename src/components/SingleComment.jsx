// src/components/SingleComment.jsx 

import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const SingleComment = ({ comment, fetchComments }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState({
    comment: comment.comment,
    rate: comment.rate,
  });

  const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/';
  const AUTH_TOKEN ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhOGE5ZjRlZjFiYzAwMTVkZjViMDMiLCJpYXQiOjE3NTM3MjMzNDcsImV4cCI6MTc1NDkzMjk0N30.mAWJMUNILecz1F7ErtIIjCis5bh7QWeRQRiIF9g520U'; 

  // --- Funzione per CANCELLARE (DELETE) ---
  const deleteComment = async () => {
  
    if (!window.confirm('Sei sicuro di voler eliminare questa recensione?')) {
      return;
    }
    try {
      const response = await fetch(API_URL + comment._id, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      if (response.ok) {
        alert('Recensione cancellata!');
        fetchComments(); 
      } else {
        alert('Errore: non è stato possibile cancellare la recensione.');
      }
    } catch (error) {
      console.error('Errore nel DELETE:', error);
    }
  };

  // --- Funzione per MODIFICARE (PUT) ---
  const handleUpdate = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(API_URL + comment._id, {
        method: 'PUT',
        body: JSON.stringify(editedComment),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      if (response.ok) {
        alert('Recensione modificata!');
        setIsEditing(false); 
        fetchComments(); 
      } else {
        alert('Errore: non è stato possibile modificare la recensione.');
      }
    } catch (error) {
      console.error('Errore nel PUT:', error);
    }
  };

  return (
    <ListGroup.Item>
      {isEditing ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              value={editedComment.comment}
              onChange={(e) => setEditedComment({ ...editedComment, comment: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Select
              value={editedComment.rate}
              onChange={(e) => setEditedComment({ ...editedComment, rate: e.target.value })}
            >
              <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="success" size="sm">Salva</Button>
          <Button variant="secondary" size="sm" className="ms-2" onClick={() => setIsEditing(false)}>Annulla</Button>
        </Form>
      ) : (
      
        <div className="d-flex justify-content-between align-items-center">
          <span>"{comment.comment}" (Voto: {comment.rate})</span>
          <div>
            <Button variant="warning" size="sm" className="me-2" onClick={() => setIsEditing(true)}>
              Modifica
            </Button>
            <Button variant="danger" size="sm" onClick={deleteComment}>
              Elimina
            </Button>
          </div>
        </div>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;