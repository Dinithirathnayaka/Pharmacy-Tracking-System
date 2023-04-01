import React from "react";
import "./SocialPedia.css";
import Leftbar from "../../leftbar/Leftbar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";

export default function SocialPedia() {
  return (
    <>
      <div className="socialpedia">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
