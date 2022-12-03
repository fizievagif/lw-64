import React from 'react';
import {PostType} from "../../types";
import axiosApi from "../../axiosApi";
import {Link, useNavigate} from "react-router-dom";

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
          <div className="d-flex justify-content-between border-bottom border-dark fs-4 mb-3">
            <p className="card-text"><b>Author:</b> {post.author}</p>
          </div>
          <h4>Title: {post.title}</h4>
          <p className="card-text mb-3"><b>Message:</b> {post.message}</p>
        </div>
        <button className="btn btn-danger" onClick={remove}>Delete</button>
        <Link
          className="btn btn-warning text-white mx-3"
          to={'/edit/' + post.id}>Edit</Link>
        <Link
          className="btn btn-info text-white"
          to={'/read-more/' + post.id}>Read More</Link>
      </div>
    </div>
  );
};

export default Post;