// src/components/CommentList.jsx

import React from 'react';
import SingleComment from './SingleComment';
import { ListGroup } from 'react-bootstrap';

const CommentList = ({ comments }) => (
  <ListGroup>
    {comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} />
    ))}
  </ListGroup>
);

export default CommentList;