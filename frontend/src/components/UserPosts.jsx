import React, { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import PostDetails from "./PostDetails";
import axios from "axios";
import "../Styles/Post.css";

export default function UserPostDetails() {
  const userId = "65411b6ad10c56cbb2940ebe";
  const { posts, dispatch } = usePostsContext();

  useEffect(() => {
    // Make an API request to fetch all posts
    axios.get("/api/posts").then((response) => {
      if (response.status === 200) {
        dispatch({ type: "SET_POSTS", payload: response.data });
      } else {
        dispatch({ type: "SET_ERROR", payload: "Failed to fetch posts" });
      }
    });
  }, [userId, dispatch]);

  // Filter posts to show only the user's own posts
  const userPosts = posts.filter(
    (post) => post.created_user && post.created_user._id === userId
  );

  return (
    <div className="post">
      {userPosts.map((post) => {
        <PostDetails key={post._id} post={post} />;
      })}
    </div>
  );
}
