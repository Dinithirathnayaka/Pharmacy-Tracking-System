import React, { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import "../Styles/Post.css";
import PostDetails from "./PostDetails";
import axios from "axios";

export default function AllPosts() {
  const { posts, dispatch } = usePostsContext();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch("/api/posts/");
  //       const json = await response.json();

  //       if (response.ok) {
  //         dispatch({ type: "SET_POSTS", payload: json });
  //       } else {
  //         console.error("Failed to fetch single post");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  useEffect(() => {
    // Make an API request to fetch posts
    axios
      .get("/api/posts")
      .then((response) => {
        if (response.status === 200) {
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
        <PostDetails key={post._id} post={post} />
      ))}
    </div>
  );
}
