import React, { useState, useEffect } from "react";
import {
  PermMedia,
  LocalOffer,
  AddReaction,
  LocationOn,
  MoreHoriz,
} from "@mui/icons-material";
import { CloudUpload } from "@mui/icons-material";
import "../Styles/Createpost.css";
import PostDetails from "./Createpost";

export default function Createpost({ closeModal }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

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

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);

    const response = await fetch("/api/posts/", {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDesc("");
      setImage(null);
      setError(null);
      console.log("new workout added", json);
    }
  };

  return (
    <div className="modalBackground">
      <form onSubmit={handleSubmit}>
        <div className="modalContainer">
          <div className="modalTop">
            <span className="modalText">Create Post</span>
            <button className="closeButton" onClick={() => closeModal(false)}>
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
              <span className="createPostProfileName">Amila Aponsu</span>
            </div>
            <input
              type="text"
              placeholder="Your Topic"
              onChange={(e) => setTitle(e.target.value)}
              value={title ?? ""}
            />

            <input
              placeholder="Your Description"
              type="textarea"
              s
              className="createPostText"
              onChange={(e) => setDesc(e.target.value)}
              value={desc ?? ""}
            />

            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <CloudUpload className="upload-icon" fontSize="large" />
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
        </div>
        <div className="modalBottom">
          <button type="submit" className="postButton">
            Post
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
}
