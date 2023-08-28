import React from "react";

export default function PostDetails({ post }) {
  // const { dispatch } = usePostsContext();

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          {/* ... render user profile and other post details */}
        </div>
        <div className="postCenter">
          <span className="postText">{post.title}</span>
          <br />
          <span className="postText">{post.desc}</span>
          <br />
          <img
            className="postImg"
            src={`/uploads/${post.image}`}
            alt="post Image"
          />
        </div>
        <div className="postBottom">
          {/* ... render like and comment functionality */}
        </div>
      </div>
    </div>
  );
}
