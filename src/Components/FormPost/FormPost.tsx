import React, {FormEvent, useState} from 'react';
import {PostFormType} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  currentPost?: PostFormType;
}

const FormPost: React.FC<Props> = ({currentPost}) => {
  const initialState = currentPost ? {
    ...currentPost
  } : {
    title: '',
    author: '',
    message: '',
  };
  const [posts, setPosts] = useState<PostFormType>(initialState);

  const navigate = useNavigate();
  const {id} = useParams();

  const postChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPosts(prev =>({
      ...prev,
      [name]: value
    }))
  };

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (!id) {
        await axiosApi.post("/posts.json", posts);
        navigate("/");
      } else {
        await axiosApi.put("/posts/" + id + ".json", posts);
        navigate("/")
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="form-group my-3">
          <input
            id="author"
            name="author"
            type="text"
            className="form-control"
            value={posts.author}
            onChange={postChange}
            placeholder="Enter author"
          />
        </div>

        <div className="form-group">
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            value={posts.title}
            onChange={postChange}
            placeholder="Enter title"
          />
        </div>

        <div className="form-group my-3">
           <textarea
             id="message"
             name="message"
             className="form-control"
             value={posts.message}
             onChange={postChange}
             placeholder="Enter message"
           />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >Send post</button>
      </form>
    </>
  );
};

export default FormPost;