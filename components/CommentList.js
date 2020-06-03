import React, { Fragment } from 'react';
import Comment from './Comment';
const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((item) => (
        <Comment comment={item} key={item.id} />
      ))}
    </div>
  );
};

export default CommentList;
