import React, {useEffect, useState} from 'react';
import { getPosts } from '../API/posts.api';
import { getPostComments } from '../API/comments.api';
import { PostsList } from '../components/PostsList';

export const Posts = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts().then(resp => {
      // console.log(resp.headers['x-total-count']);
      console.log(resp.data);
      setPosts(resp.data)
    })
  }, [])

  return (
    <>
      <PostsList posts={posts}/>
    </>
  )
}
