import Rightbar from "./Rightbar";
import Feed from "./Feed";
import Leftbar from "./Leftbar";

import React from "react";

export default function Profile() {
  return (
    <>
      <div className="profileContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
