import React, { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import "../Styles/Post.css";
import PostDetails from "./PostDetails";

export default function Post() {
  const { posts, dispatch } = usePostsContext();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts/");
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_POSTS", payload: json });
        } else {
          console.error("Failed to fetch single post");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostDetails key={post._id} post={post} />
      ))}
    </div>
  );
}
