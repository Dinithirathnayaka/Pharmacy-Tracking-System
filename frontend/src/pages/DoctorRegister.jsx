import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useRegister } from "../hooks/useRegister";
import "../Styles/Pharmacies.css";

export const Doctorregister = () => {
  const [email, setEmail] = useState("");
  const [regiNo, setRegiNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specificArea, setSpecificArea] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);
  const [registrationNumberError, setRegistrationNumberError] = useState("");
  const { signup, error, isLoading } = useRegister();

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    // Remove any non-numeric characters
    const numericValue = inputVal.replace(/\D/g, "");

    // Ensure it has exactly 5 digits
    if (/^\d{5}$/.test(numericValue)) {
      setRegiNo(numericValue);
      setRegistrationNumberError("");
    } else {
      setRegiNo(numericValue);
      setRegistrationNumberError(
        "Registration number should be a 5-digit number."
      );
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !username ||
      !regiNo ||
      !specificArea
    ) {
      setAllFieldsFilled(false);
      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const r = await signup(
        username,
        email,
        password,
        "doctor",

        { regi_no: regiNo, specific_area: specificArea }
      );
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="phamacies-container">
      <div className="pharmacis">
        <img src="assets/images/doctor.png" className="pharmaciesimg" />
        <h5 className="pharmacies-register">REGISTER AS A DOCTOR</h5>

        <Form className="pharmacist-form" onClick={handleRegister}>
          <label>Registration Number</label>
          <input
            type="text"
            className="regnum"
            // onChange={(e) => setRegiNo(e.target.value)}
            onChange={handleInputChange}
            value={regiNo}
            required
          />
          {registrationNumberError && (
            <p className="error-message">{registrationNumberError}</p>
          )}

          <br />

          <label>Full Name</label>
          <input
            type="text"
            className="fullname"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <br />

          <label>Enter Email</label>
          <input
            type="email"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <br />

          <label>Choose a feild:</label>
          <select
            id="feild"
            form="feildform"
            value={specificArea}
            onChange={(e) => setSpecificArea(e.target.value)}
          >
            <option value="feild1">Feild1</option>
            <option value="feild2">Feild2</option>
            <option value="feild3">Feild3</option>
            <option value="feild4">Feild4</option>
          </select>
          <br />

          <label>Enter Password</label>
          <input
            type="password"
            className="pass"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <br />

          <label>Reenter Password</label>
          <input
            type="password"
            className="passwordconfirmreg"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />

          <button className="submitbtnpharmacy">Register</button>
          {!allFieldsFilled && (
            <div className="error">All fields must be filled</div>
          )}
          {error && <div className="error">{error}</div>}
        </Form>
      </div>
    </div>
  );
};
