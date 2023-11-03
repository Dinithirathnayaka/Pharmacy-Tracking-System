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

export default function PostDetails({ post }) {
  const { dispatch } = usePostsContext();
  const { user } = useAuthContext();
  const [userDetails, setUserDetails] = useState({});

  let timeAgo = "Invalid Date"; // Default value for timeAgo

  if (post.createdAt) {
    const createdAt = new Date(post.createdAt);
    if (!isNaN(createdAt.getTime())) {
      timeAgo = formatDistanceToNow(createdAt, {
        addSuffix: true,
      });
    }
  }

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

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("user");
  //   if (storedUserData) {
  //     const userData = JSON.parse(storedUserData);
  //     const { userid } = userData;
  //     console.log(storedUserData);

  //     // Make an API request to fetch user-specific data based on userid
  //     axios
  //       .get(`/api/user/getuser/${userid}`)

  //       .then((response) => {
  //         setUserDetails(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user details:", error);
  //       });
  //   }
  // }, []);

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
              Username:
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
          {/* <div className="likeCommentCount">
            <div className="postBottomLeft">
              <Favorite
                htmlColor="rgb(255,67,111)"
                className="likeIcon"
                // onClick={likeHandler}
              />
              <ThumbUp
                htmlColor="rgb(53,70,255)"
                className="likeIcon"
                // onClick={likeHandler}
              />
              <span className="postLikeCounter">4 people like this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div> */}

          <hr />
          <div className="likeAndComment">
            {/* <div className="postBottomLeft">
              <ThumbUpOffAlt className="likeIcon" />
              <span className="postLike">Like</span>
            </div> */}
            <div className="postBottomLeft">
              <ChatBubbleOutline className="likeIcon" />
              <span className="postLike">Comment</span>
            </div>
          </div>

          <hr />
          <div className="showComment">
            <p className="postLike">View more comments</p>

            <div className="commentPreview">
              <img
                className="commenterImg"
                src="/assets/images/person/3.jpg"
                alt="person3"
              />

              <div>
                <div className="commenterDetails">
                  <div className="commenterName">Nimali Fonseka</div>
                  <div className="comment">I need this.</div>
                </div>
                <div className="commentDetails">
                  <span className="commentDetailsText">Like</span>
                  <span className="commentDetailsText">Comment</span>
                  <span className="commentDetailsText">10h</span>
                </div>
              </div>
            </div>
            <br />
            <div className="addNewComment">
              <img
                className="shareProfileImg"
                src="/assets/images/person/1.jpg"
                alt="person1"
              />
              <input placeholder="Write a Comment" className="commentInput" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
