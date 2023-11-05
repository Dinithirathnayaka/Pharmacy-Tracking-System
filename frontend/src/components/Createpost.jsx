import React, { useState, useRef, useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import { useLogin } from "../hooks/useLogin";
import {
  PermMedia,
  LocalOffer,
  AddReaction,
  LocationOn,
  MoreHoriz,
} from "@mui/icons-material";
import { CloudUpload } from "@mui/icons-material";
import "../Styles/Createpost.css";

export default function Createpost({ handleClose }) {
  const { dispatch } = usePostsContext();
  // const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const { login, isLoading, errorMessage } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const post = { title, des, image };

    // const response = await fetch("/api/posts", {
    //   method: "POST",
    //   body: JSON.stringify(post),
    //   headers: {
    //     "Content-Type": "application/json ",
    //   },
    // });

    if (!desc || !image) {
      setError("Please fill in both the description and image fields.");
      return; // Prevent form submission
    } else if (!desc) {
      setError("Please provide a description.");
      return; // Prevent form submission
    } else if (!image) {
      setError("Please select an image.");
      return; // Prevent form submission
    }

    const formData = new FormData();
    // formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("created_by", userData.userid);

    try {
      const response = await fetch("/api/posts/", {
        method: "POST",
        body: formData,
      });

      const jsonResponse = await response.json();

      if (!response.ok) {
        setError(jsonResponse.error);
      } else {
        const createdPost = {
          _id: jsonResponse._id,
          // title: jsonResponse.title,
          desc: jsonResponse.desc,
          image: jsonResponse.image,
        };

        dispatch({ type: "CREATE_POST", payload: createdPost });
        // setTitle("");
        setDesc("");
        setImage(null);
        setError(null);

        // Close the modal

        console.log("Form Values:", createdPost);
      }
    } catch (error) {
      console.log("Error creating post:", error);
      setError("An error occurred while creating the post.");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImage(file);
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div className="modalBackground">
      <form onSubmit={handleSubmit}>
        <div className="modalContainer">
          <div className="modalTop">
            <span className="modalText">Create Post</span>
            <button className="closeButton" onClick={handleClose}>
              X
            </button>
          </div>
          <hr className="modalHr" />
          <div className="modalBody">
            <div className="profileDetails">
              <img
                src="/assets/images/person/1.jpg"
                alt=""
                className="createPostProfileImg"
              />
              {userData && userData.user && <p>{userData.user.username}</p>}
            </div>

            <textarea
              placeholder="Your Description"
              className="createPostText"
              onChange={(e) => setDesc(e.target.value)}
              value={desc ?? ""}
            />

            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Image"
                className="selected-image"
              />
            )}

            <input
              type="file"
              id="image"
              className="createimg"
              name="image"
              accept="image/*"
              onChange={handleImageChange} // Call the function to handle file change
            />
          </div>

          {/* <div className="postOptions">
            <span className="optionsText">Add to your post</span>
            <div className="postOptionIcons">
              <PermMedia className="imageColor" />
              <LocalOffer className="tagColor" />
              <AddReaction className="emotionColor" />
              <LocationOn className="locationColor" />
              <MoreHoriz className="optionColor" />
            </div>
          </div> */}
          <div className="modalBottom">
            <button type="submit" className="postButton">
              Post
            </button>
            <br />
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}
