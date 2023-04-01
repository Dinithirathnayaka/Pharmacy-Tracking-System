import React, { useState } from "react";
import LoginImg from "../assets/images/login.png";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="form-container">
      <img src={LoginImg} alt="user icon" />
      <div id="user-login">USER LOGIN</div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          value={email}
          onCharge={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          id="email"
          name="email"
        />
        <input
          value={pass}
          onCharge={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit">SUBMIT</button>
      </form>

      <button
        className="link-button"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account?
      </button>
      <button className="link-button">Forgot password?</button>
    </div>
  );
};
