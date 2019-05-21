import React from 'react';

const Comment = (props) => {
  return (
    <div>
      <ul>
        <li>{props.comment.review} - {props.comment.rating}/5</li>
      </ul>
    </div>
  )
}

export default Comment;
