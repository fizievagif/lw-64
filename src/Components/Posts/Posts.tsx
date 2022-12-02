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

      const postsKeys = Object.keys(response.data).map(key => {
        const postBlog = response.data[key];
        postBlog.id = key;
        return postBlog;
      });

      setPost(postsKeys);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      axiosPost().catch(console.error);
    }
  }, [axiosPost, location])

  return (
    <>
      {post.map(post => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </>
  );
};

export default Posts;