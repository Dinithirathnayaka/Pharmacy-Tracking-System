import React from "react";

const postDeatils = ({ post }) => {
  return (
    <div>
      <h6>{post.title}</h6>
      <p>{post.desc}</p>
      <div>{post.image}</div>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default postDeatils;
