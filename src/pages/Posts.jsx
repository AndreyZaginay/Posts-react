import React, {useEffect, useState, useRef} from 'react';

import { getPosts } from '../API/posts.api';
import { PostsList } from '../components/PostsList';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { getPageCount } from '../utils/pages';
import { Loader } from '../components/UI/Loader/Loader';

export const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, fetchingState] = useFetching(() => getPosts(limit, page));

  useObserver(lastElement, page < totalPages, fetchingState.isLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchPosts(limit, page).then(response => {
      console.log(response);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    })
  }, [page, limit])

  return (
    <>
      <h1>Post with using jsonplaceholder</h1>
      <PostsList posts={posts}/>
      <div ref={lastElement} style={{height: 20, background: 'grey'}}></div>
      {fetchingState.isLoading && 
         <Loader/> 
      } 
    </>
  )
}
