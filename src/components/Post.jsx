import React from 'react';
import { useNavigate } from 'react-router-dom';

import './../assets/postItem';
import { MyButton } from './UI/Button/MyButton';

export const Post = ({post}) => {

  const router = useNavigate();

  return (
    <div className="postItem">s
      <div className="post_content">
        <strong>{ post.id }. { post.title }</strong>
          <div>
            { post.body }
          </div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => router(`post/${post.id}`)}>
          To post
        </MyButton>
      </div>
    </div>
  )
}
