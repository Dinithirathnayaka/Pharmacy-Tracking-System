import { useState, useEffect } from "react";
import {
  PermMedia,
  LocalOffer,
  AddReaction,
  LocationOn,
} from "@mui/icons-material";

import Createpost from "./Createpost";
import "../Styles/Share.css";

export default function Share() {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/images/person/1.jpg"
            alt="person1"
          />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="green" className="shareIcon" />
              <span className="shareIconText">Photo</span>
            </div>
            <div className="shareOption">
              <LocalOffer htmlColor="blue" className="shareIcon" />
              <span className="shareIconText">Tag</span>
            </div>
            <div className="shareOption">
              <AddReaction htmlColor="orange" className="shareIcon" />
              <span className="shareIconText">Feeling</span>
            </div>
            <div className="shareOption">
              <LocationOn htmlColor="red" className="shareIcon" />
              <span className="shareIconText">Location</span>
            </div>
          </div>
          <button
            className="shareButton"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Share
          </button>
          {/* {console.log("openModal:", openModal)} */}
          {openModal && <Createpost handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}
