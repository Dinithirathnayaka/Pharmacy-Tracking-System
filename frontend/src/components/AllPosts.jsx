import React, { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import "../Styles/Post.css";
import PostDetails from "./PostDetails";
import axios from "axios";

export default function AllPosts() {
  const { posts, dispatch } = usePostsContext();
  console.log("Initial posts:", posts);

  useEffect(() => {
    // Make an API request to fetch posts
    axios
      .get("/api/posts")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          dispatch({ type: "SET_POSTS", payload: response.data });
        } else {
          dispatch({ type: "SET_ERROR", payload: "Failed to fetch posts" });
        }
      })
      .catch((error) => {
        dispatch({
          type: "SET_ERROR",
          payload: "Error fetching data: " + error.message,
        });
      });
  }, [dispatch]);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostDetails key={post.post._id} post={post.post} user={post.user} />
      ))}
    </div>
  );
}
