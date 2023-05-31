import React from 'react';

import '../assets/comment';

export const Comment = ({comment}) => {
  return (
    <div className='comment'>
        <strong>{comment.name}</strong>
        <p>{comment.body}</p>
        <span>{comment.email}</span>
    </div>
  )
}