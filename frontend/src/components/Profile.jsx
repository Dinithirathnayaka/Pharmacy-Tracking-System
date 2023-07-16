import Topbar from "./Topbar";
import Rightbar from "./Rightbar";
import Feed from "./Feed";
import Leftbar from "./Leftbar";

import React from "react";

export default function Profile() {
  return (
    <>

      <Topbar/>

      <div className="profileContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
