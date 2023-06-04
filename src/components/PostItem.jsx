import React from 'react';
import { useNavigate } from 'react-router-dom';

import './../assets/postItem';
import { MyButton } from './UI/Button/MyButton';

export const PostItem = ({post}) => {

  const router = useNavigate();
  const {id, title, body} = post;

  return (
    <div className="postItem">
      <div className="post_content">
        <strong>{ id }. { title }</strong>
          <div>
            { body }
          </div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => router(`post/${id}`)}>
          To post
        </MyButton>
      </div>
    </div>
  )
}
