import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "../Styles/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAllFieldsFilled(false);
      return;
    }

    await login(email, password);
    console.log(error);
    if (error === false) {
      navigate("/");
    } else {
      navigate("/reset");
    }
  };

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
        <Form className="login-form" onSubmit={handleSubmit}>
          <div className="emailcon">
            <HiMail className="emailicon" />
            <input
              type="email"
              placeholder="Email address"
              className="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <br />
          <div className="passcon">
            <FaLock className="lockicon" />
            <input
              type="password"
              placeholder="Password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button type="submit" className="submitbtn" disabled={isLoading}>
            {" "}
            Login
          </button>

          {!allFieldsFilled && (
            <div className="error">All fields must be filled</div>
          )}
          {error && <div className="error">{error}</div>}
          {/* <input type="submit" value="SUBMIT" className="submitbtn" /> */}
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
