import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
// import "../../../Styles/Login.css";
import LoginCSS from "./Login.module.css";

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
    <div className={LoginCSS["form-container"]}>
      <div className={LoginCSS["login"]}>
        {" "}
        <img
          src="assets/images/login.png"
          alt="user icon"
          className={LoginCSS["loginimg"]}
        />
        <h5 className={LoginCSS["user-login"]}>USER LOGIN</h5>
        <Form className={LoginCSS["login-form"]} onSubmit={handleSubmit}>
          <div className={LoginCSS["emailcon"]}>
            <HiMail className={LoginCSS["emailicon"]} />
            <input
              type="email"
              placeholder="Email address"
              className={LoginCSS["email"]}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <br />
          <div className={LoginCSS["passcon"]}>
            <FaLock className={LoginCSS["lockicon"]} />
            <input
              type="password"
              placeholder="Password"
              className={LoginCSS["password"]}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button type="submit" className={LoginCSS["submitbtn"]} disabled={isLoading}>
            {" "}
            Login
          </button>
        </Form>
        <div className={LoginCSS["extra"]}>
          {" "}
          <Link
            to="/register"
            className={LoginCSS["noaccount"]}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Don't have an account?{" "}
          </Link>
          <Link
            to="/forgotpassword"
            className={LoginCSS["nopassword"]}
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
