import React, {useEffect, useState} from 'react';
import { getPosts } from '../API/posts.api';
import { getPostComments } from '../API/comments.api';

export const Posts = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts().then(resp => {
      console.log(resp.headers['x-total-count']);
      console.log(resp);
    })
  }, [])

  return (
    <>
      <div>Posts</div>
    </>
  )
}
