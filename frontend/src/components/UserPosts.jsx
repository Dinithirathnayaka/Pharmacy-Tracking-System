import React, { useEffect, useState } from "react";
import PostDetails from "./PostDetails";
import axios from "axios";
import "../Styles/Post.css";
import { usePostsContext } from "../hooks/usePostsContext";

export default function UserPostDetails() {
  const { posts, dispatch } = usePostsContext();
  console.log("Initial posts:", posts);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    console.log(storedUserData);
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);

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
    }
  }, [dispatch]);

  return (
    <div className="post-list">
      {posts.map((post) =>
        post.post.created_by === "657ea7ddc4f2bcd4c87c40c5" ? (
          <PostDetails key={post.post._id} post={post.post} user={post.user} />
        ) : null
      )}
    </div>
  );
}
