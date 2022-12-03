import React, {useCallback, useEffect, useState} from 'react';
import {PostType} from "../../types";
import Post from "../Post/Post";
import {useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";

const Posts = () => {
  const [post, setPost] = useState<PostType[]>([]);
  const location = useLocation();

  const axiosPost = useCallback(async () => {
    try {
      const response = await axiosApi.get('/posts.json');

      if (response.data !== null || undefined) {
        const postsKeys = Object.keys(response.data).map(key => {
          const postBlog = response.data[key];
          postBlog.id = key;
          return postBlog;
        });
        setPost(postsKeys);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      axiosPost().catch(console.error);
    }
  }, [axiosPost, location])

  let isPostOrNot;

  if (post.length !== 0) {
    isPostOrNot = post.map(post => (
      <Post
        key={post.id}
        post={post}
      />
    ));
  } else {
    isPostOrNot = <h1 className="text-center">Unfortunately there are no posts</h1>
  }

  return (
    <>
      {isPostOrNot}
    </>
  );
};

export default Posts;