import React from 'react';
import Comment from '../components/Comment'

const Comments = (props) => {
  if (props.comments) {
    const comments = props.comments.map(comment=>
      <Comment
        comment={comment}
        key={comment.id}
      />)
    return(
      <div>
        {comments}
      </div>
    )

  }
  else {
    return "No Comments";
  }

}

export default Comments;
