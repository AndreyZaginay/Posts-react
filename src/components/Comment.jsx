import React from 'react';

import '../assets/comment';

export const Comment = ({comment}) => {
  const {name: commentName, body: commentBody, email: commentEmail} = comment
  return (
    <div className='comment'>
        <strong>{commentName}</strong>
        <p>{commentBody}</p>
        <span>{commentEmail}</span>
    </div>
  )
}