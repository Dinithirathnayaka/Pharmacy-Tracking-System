import { useState } from "react";

import { Link } from "react-router-dom";

//stylesheet
import SignupCSS from "./Signup.module.css";

//custom hooks
import { useSignup } from "../../../hooks/useSignup";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(userName, email, password, confirmPassword);
  };

  return (
    <div className={`${SignupCSS["main-form-container"]}`}>
      <div className={`shadow ${SignupCSS["form-container"]}`}>
        <form className={SignupCSS["signup"]} onSubmit={handleSubmit}>
          <div className="text-center">
            <h1>Signup</h1>
          </div>
          <div className={`form-group ${SignupCSS["form-div"]}`}>
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              placeholder="Username"
            />
          </div>
          <div className={`form-group ${SignupCSS["form-div"]}`}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className={`form-group ${SignupCSS["form-div"]}`}>
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </div>
          <div className={`form-group ${SignupCSS["form-div"]}`}>
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder="Confirm Password"
            />
          </div>

          <div className={`form-group ${SignupCSS["form-div"]}`}>
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-primary"
            >
              SignUp
            </button>
          </div>
          {error && (
            <div className={`text-center ${SignupCSS["error"]} ${SignupCSS["form-div"]}`}>
              {error}
            </div>
          )}
          <div className={`text-center form-group ${SignupCSS["form-div"]}`}>
            <Link to="/pharmacist-signup">Register as a pharmacist</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
