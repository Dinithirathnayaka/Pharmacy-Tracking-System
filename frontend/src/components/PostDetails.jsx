import React from "react";
import "../Styles/Post.css";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";
import {
  MoreVert,
  Favorite,
  ThumbUp,
  ThumbUpOffAlt,
  ChatBubbleOutline,
} from "@mui/icons-material";

export default function PostDetails({ post }) {
  // let formattedDate = '';

  // try {
  //   if (post.timestamps) {
  //     const date = new Date(post.timestamps);
  //     if (!isNaN(date)) {
  //       formattedDate = format(date, 'MMMM dd, yyyy HH:mm:ss');
  //     } else {
  //       console.error('Invalid date format:', post.timestamps);
  //     }
  //   }
  // } catch (error) {
  //   console.error('Error parsing date:', error);
  // }

  return (
    // <div className="post">
    //   <div className="postWrapper">
    //     <div className="postTop"></div>
    //     <div className="postCenter">
    //       <span className="postText">{post.title}</span>
    //       <br />
    //       <span className="postText">{post.desc}</span>
    //       <br />
    //       <img
    //         className="postImg"
    //         src={`/uploads/${post.image}`}
    //         alt="post Image"
    //       />
    //     </div>
    //     <div className="postBottom"></div>
    //   </div>
    // </div>

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

            <span className="postUserName" id="abc">
              Nuwan Pradeep
            </span>

            <span className="postDate">5min</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="morevert" />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.title}</span>
          <br />
          <span className="postText">{post.desc}</span>
          <img
            className="postImg"
            src={`/uploads/${post.image}`}
            alt="post Image"
          />
        </div>
        <div className="postBottom">
          <div className="likeCommentCount">
            <div className="postBottomLeft">
              <Favorite htmlColor="rgb(255,67,111)" className="likeIcon" />
              <ThumbUp htmlColor="rgb(53,70,255)" className="likeIcon" />
              <span className="postLikeCounter">32 people like this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div>

          <hr />
          <div className="likeAndComment">
            <div className="postBottomLeft">
              <ThumbUpOffAlt className="likeIcon" />
              <span className="postLike">Like</span>
            </div>
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
