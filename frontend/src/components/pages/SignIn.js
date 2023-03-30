import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <NavLink to="/main" className="" href="#">
        Sign In
      </NavLink>
      <Outlet />
    </div>
  );
};

export default SignIn;
