import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostType} from "../../types";
import axiosApi from "../../axiosApi";
import FormPost from "../../Components/FormPost/FormPost";

const Edit = () => {
  const {id} = useParams();
  const [edit, setEdit] = useState<PostType | null>(null);

  const axiosPost = useCallback(async () => {
    try {
      const response = await axiosApi.get<PostType>('/posts/' + id + '.json');
      setEdit(response.data);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axiosPost().catch(console.error);
    }
  }, [id, axiosPost])

  return (
    <div>
      {edit && (
        <FormPost currentPost={edit}/>
      )}
    </div>
  );
};

export default Edit;