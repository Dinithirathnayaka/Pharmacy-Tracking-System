import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div>
        <NavLink to="/main/">Sign In</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default SignIn;
