import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <strong>{comment.user}</strong>{' '}
      <p dangerouslySetInnerHTML={{ __html: `${comment.content}` }} />
      {comment.comments &&
        comment.comments.map((comm) => (
          <div className='com-nested'>
            <Comment key={comm.id} comment={comm} />
          </div>
        ))}
      <style jsx>
        {`
          .com-nested {
            padding-left: 1em;
            border-left: 1px solid rgba(0, 0, 0, 0.2);
          }
          p {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Comment;
