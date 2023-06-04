import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPostById } from '../API/posts.api';
import { getPostComments } from '../API/comments.api';
import { Comment } from '../components/Comment';
import '../assets/post';

export const PostIdPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  const [fetchPostById, fetchPostState] = useFetching(() => getPostById(params.id));
  const [fetchPostsComments, fetchCommentsState] = useFetching(() => getPostComments(params.id))

  useEffect(() => {
    fetchPostById().then(response => setPost(response.data));
    fetchPostsComments().then(response => setComments(response.data));
  }, [])

  return (
    <div className='post-page'>
      <h1>You have openned the post link by id</h1>
        {fetchPostState.isLoading
            ? <Loader/>
            : <div className='post'>
                <h2> {post.title}</h2>
                <p>{ post.body }</p>
              </div>
        }
      <div className='comments'>
        {fetchCommentsState.isLoading
          ? <Loader/>
          : <div>
              <h3>Comments</h3>
                {comments.map((comment, id) => 
                  <Comment key={id} comment={comment}/>
                )}
            </div>
        }
      </div>
    </div>
  )
}
