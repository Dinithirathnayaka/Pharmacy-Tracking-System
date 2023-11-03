import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "../Styles/Login.css";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading, errorMessage } = useLogin();
  const navigate = useNavigate();
  const [toastKey, setToastKey] = useState(0);

  useEffect(() => {
    if (error) {
      setEmail("");
      setPassword("");

      // Show a toast notification with the error message
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [error, errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    // Generate a new toast key to trigger the useEffect
    setToastKey((prevKey) => prevKey + 1);
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
              required
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
              required
            />
          </div>

          <button type="submit" className="submitbtn" disabled={isLoading}>
            {" "}
            Login
          </button>
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
            to="/forgotpassword"
            className="nopassword"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Forgot password?{" "}
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
