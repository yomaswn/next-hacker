import React, { Fragment } from 'react';
import Comment from './Comment';
const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((item) => (
        <div key={item.id}>
          <Comment comment={item} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
