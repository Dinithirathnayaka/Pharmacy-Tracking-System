import React, { useState, useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import "../Styles/Post.css";
import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { useAuthContext } from "../hooks/useAuthContext";

import {
  MoreVert,
  Favorite,
  ThumbUp,
  ThumbUpOffAlt,
  ChatBubbleOutline,
} from "@mui/icons-material";

export default function PostDetails({ post, user }) {
  const { dispatch } = usePostsContext();

  const [userDetails, setUserDetails] = useState({});

  let timeAgo = "Invalid Date"; // Default value for timeAgo

  // const [like, setLike] = useState(post.like);
  // const [isLiked, setIsLiked] = useState(false);

  // const likeHandler = () => {
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };

  const handleDelete = async () => {
    const response = await fetch("/api/posts/" + post._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_POST", payload: json });
    }
  };

  useEffect(() => {
    if (post.createdAt) {
      const createdAt = new Date(post.createdAt);
      if (!isNaN(createdAt.getTime())) {
        timeAgo = formatDistanceToNow(createdAt, {
          addSuffix: true,
        });
      }
    }
    // const storedUserData = localStorage.getItem("user");
    // if (storedUserData) {
    //   const userData = JSON.parse(storedUserData);
    //   const { userid } = userData;
    //   console.log(storedUserData);

    //   // Make an API request to fetch user-specific data based on userid
    //   axios
    //     .get(`/api/user/getuser/${userid}`)

    //     .then((response) => {
    //       setUserDetails(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching user details:", error);
    //     });
    // }
  }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <NavLink to="editprofile">
              <img
                className="postProfileImg"
                src="/assets/images/person/4.jpg"
                alt=""
              />
            </NavLink>

            <p className="postUserName" id="abc">
              {" Nimal"}
            </p>

            <span className="postDate">{timeAgo}</span>
          </div>
          <div></div>

          <div className="postTopRight">
            <button
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                background: "transparent",
                outline: "none",
                border: "none",
              }}
            >
              <MoreVert className="morevert" />
            </button>

            <ul className="dropdown-menu" style={{ marginLeft: "-40px" }}>
              <li>
                <a className="dropdown-item" href="#">
                  Update
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={handleDelete}>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="postCenter">
          {/* <span className="postText">{post.title}</span>
          <br /> */}
          <span className="postText">{post.desc}</span>
          <img
            className="postImg"
            src={`/uploads/${post.image}`}
            alt="post Image"
          />
        </div>
        <div className="postBottom">
          <hr />

          <hr />
        </div>
      </div>
    </div>
  );
}
