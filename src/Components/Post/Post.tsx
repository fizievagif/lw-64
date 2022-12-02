import React from 'react';
import {PostType} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({post}) => {
  const navigate = useNavigate();

  const remove = async () => {
    try {
      await axiosApi.delete('posts/' + post.id + '.json');
    } catch (e) {
      console.error(e);
    } finally {
      navigate('/');
    }
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div>
          <p className="card-text border-bottom border-dark fs-4"><b>Author:</b> {post.author}</p>
          <h4>Title: {post.title}</h4>
          <p className="card-text mb-3"><b>Message:</b> {post.message}</p>
        </div>
        <button className="btn btn-primary" onClick={remove}>Delete</button>
      </div>
    </div>
  );
};

export default Post;