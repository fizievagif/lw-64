import React from 'react';
import {Link} from "react-router-dom";

const ReadMore = () => {
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">Not finished</h5>
        <p className="card-text">Not finished, i`m sorry</p>
        <Link to="/" className="btn btn-primary">Close</Link>
      </div>
    </div>
  );
};

export default ReadMore;