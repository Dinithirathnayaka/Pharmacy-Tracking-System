import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  return (
    <div className="form-container">
      <div className="login">
        {" "}
        <img
          src="assets/images/login.png"
          alt="user icon"
          className="loginimg"
        />
        <h5 className="user-login">USER LOGIN</h5>
        <Form className="login-form">
          <div className="emailcon">
            <HiMail className="emailicon" />
            <input type="email" placeholder="Email address" className="email" />
          </div>

          <br />
          <div className="passcon">
            <FaLock className="lockicon" />
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
          </div>

          <br />
          <input type="submit" value="SUBMIT" className="submitbtn" />
        </Form>
        <div className="extra">
          {" "}
          <Link
            to="/register"
            className="noaccount"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Don't have an account?{" "}
          </Link>
          <Link
            to="/reset"
            className="nopassword"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Forgot password?{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
