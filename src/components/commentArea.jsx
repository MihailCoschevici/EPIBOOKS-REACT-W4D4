// src/components/CommentArea.jsx 

import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Spinner, Alert } from 'react-bootstrap';

// Riceve l'ASIN come prop
const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Ora parte da false
  const [isError, setIsError] = useState(false);

  
  useEffect(() => {
   
    if (!asin) {
      setComments([]); // Svuota i commenti se si deseleziona un libro
      return;
    }

    const fetchComments = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhOGE5ZjRlZjFiYzAwMTVkZjViMDMiLCJpYXQiOjE3NTM4MDgwNzYsImV4cCI6MTc1NTAxNzY3Nn0.JZgQ-iDqm85up4iFqKlxXKuLRouUDPkjQr9AjpERLUA',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
        console.error('Errore nel fetch:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchComments();
  }, [asin]); 

  return (
    <div className="my-3">
      <h4>Recensioni</h4>
      {!asin && <p>Seleziona un libro per vedere le recensioni.</p>}
      {isLoading && <Spinner animation="border" variant="primary" />}
      {isError && asin && <Alert variant="danger">Errore nel caricamento.</Alert>}
    
      <CommentList comments={comments} />
      {asin && <AddComment asin={asin} />}
    </div>
  );
};

export default CommentArea;