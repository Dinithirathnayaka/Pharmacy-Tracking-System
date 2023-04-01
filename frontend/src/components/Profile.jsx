import Rightbar from "./Rightbar";
import Feed from "./Feed";
import Leftbar from "./Leftbar";
import MainNavbar from "./MainNavbar";

import React from "react";

export default function Profile() {
  return (
    <div>
      <MainNavbar />
      <Leftbar />
      <Feed />
      <Rightbar />
    </div>
  );
}
