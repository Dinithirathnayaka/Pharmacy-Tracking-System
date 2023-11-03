import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostsContext } from "../hooks/usePostsContext";
import "../Styles/EditProfile.css";
import UserPosts from "./UserPosts";
import {
  Message,
  CheckCircle,
  Search,
  MoreHoriz,
  LocationOn,
  Info,
  ThumbUp,
  RssFeed,
  PersonSearch,
  Language,
  Call,
  Email,
  MoreVert,
  Favorite,
  ThumbUpOffAlt,
  ChatBubbleOutline,
} from "@mui/icons-material";

import MessageBox from "./MessageBox";

export default function UserProfile() {
  const [openModal, setOpenModal] = useState(false);
  const [post, setPost] = useState(null);
  const specificPostId = "640053bd7e1ef01c61ad0d33";
  const { user } = useAuthContext();
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
    <>
      <div className="profileWrapper">
        <div className="profileLeft"></div>

        <div className="profileCenter">
          <div className="profileTop">
            <div className="profileTopUp">
              <div className="profileDetails">
                <div className="profileImg">
                  <img
                    src="/assets/images/person/4.jpg"
                    alt=""
                    className="ProfilePicture"
                  />
                </div>
                <div className="userNameType">
                  <div className="userNameCheckCircle">
                    <div className="userName">
                      {" "}
                      <p>{user.username}</p>
                    </div>
                    <CheckCircle className="checkCircle" fontSize="xx-small" />
                  </div>
                  <div className="userType">set role </div>
                </div>
              </div>

              <button className="editProfileBtn">Edit profile</button>
            </div>

            <hr className="profileHr" />

            <div className="profileTopDown">
              <div className="topDownLeft"></div>
              <div className="topDownRight">
                <Message
                  className="messageIcon"
                  fontSize="large"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                />
                <span
                  className="message"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Message
                </span>

                <button className="searchButton">
                  <Search className="searchIcon" fontSize="large" />
                </button>
                <MoreHoriz className="optionIcon" fontSize="large" />
              </div>
            </div>
          </div>

          <div className="profileBottom">
            <div className="profileBottomLeft">
              <div className="searchLocation">
                <img
                  src="/assets/images/mapImage1.png"
                  alt=""
                  className="locationBackgroundImg"
                />
              </div>

              <ul className="profileDetailsList">
                <li className="bottomLeftListItems">
                  <info className="bottomLeftListIcon">
                    <Info />
                  </info>
                  <span className="bottomLeftListIconName">
                    Studied at Sabaragamuwa University Of Sri Lanka
                  </span>
                </li>

                <li className="bottomLeftListItems">
                  <info className="bottomLeftListIcon">
                    <ThumbUp />
                  </info>
                  <span className="bottomLeftListIconName">
                    1163 persons liked
                  </span>
                </li>
                <li className="bottomLeftListItems">
                  <info className="bottomLeftListIcon">
                    <RssFeed />
                  </info>
                  <span className="bottomLeftListIconName">
                    963 persons followed
                  </span>
                </li>
                <li className="bottomLeftListItems">
                  <info className="bottomLeftListIcon">
                    <PersonSearch />
                  </info>
                  <span className="bottomLeftListIconName">
                    463 persons searched
                  </span>
                </li>
                <li className="bottomLeftListItems">
                  <info className="bottomLeftListIcon">
                    <Language />
                  </info>
                  <span className="bottomLeftListIconName">
                    www.pharmacy.lk
                  </span>
                </li>
                <li className="bottomLeftListItems">
                  <info className="bottomLeftListIcon">
                    <Call />
                  </info>
                  <span className="bottomLeftListIconName">
                    94+ 115 697 845
                  </span>
                </li>
                <li className="bottomLeftListItems">
                  <info className="bottomLeftListIcon">
                    <Email />
                  </info>
                  <span className="bottomLeftListIconName">
                    pharmacy@gmail.com
                  </span>
                </li>
              </ul>
            </div>

            <div className="profileBottomRight">
              <div className="post">
                {posts.map((post) => (
                  <UserPosts key={post._id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="profileRight">
          {openModal && <MessageBox closeModal={setOpenModal} />}
        </div>
      </div>
    </>
  );
}
