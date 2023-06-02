import React from 'react';

import { PostItem } from './PostItem';

export const PostsList = ({posts}) => {
  return (
    <>
      {posts.map(post => 
          <PostItem key={post.id} post={post}/>
        )}
    </>
  )
}
