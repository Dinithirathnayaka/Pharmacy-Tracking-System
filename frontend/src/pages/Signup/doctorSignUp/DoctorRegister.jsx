import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useSignup } from "../../../hooks/useSignup";
// import "../../../Styles/Doctor.css";
import DoctorCSS from "./DoctorRegister.module.css";

export const DoctorRegister = () => {
  const [email, setEmail] = useState("");
  const [regiNo, setRegiNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specificArea, setSpecificArea] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);
  const [registrationNumberError, setRegistrationNumberError] = useState("");
  // const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { signup, error, isLoading } = useSignup();

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

      setEmail("");
      setRegiNo("");
      setUsername("");
      setPassword("");
      setSpecificArea("");
      setConfirmPassword("");
      setAllFieldsFilled(true);

      // setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className={DoctorCSS["doctorRegister-container"]}>
      <div className={DoctorCSS["doctor"]}>
        <img
          src="assets/images/doctor.png"
          className={DoctorCSS["doctorImg"]}
        />
        <h5 className={DoctorCSS["doctor-register"]}>REGISTER AS A DOCTOR</h5>

        <Form className={DoctorCSS["doctor-form"]} onClick={handleRegister}>
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
            <p className={DoctorCSS["error-message"]}>
              {registrationNumberError}
            </p>
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

          <label>Choose your feild:</label>
          <select
            id="feild"
            form="feildform"
            value={specificArea}
            onChange={(e) => setSpecificArea(e.target.value)}
            style={{ padding: "3px", marginLeft: "15px" }}
          >
            <option value="dermatologist">Dermatologist</option>
            <option value="cardiologists">Cardiologists</option>
            <option value="entspecialists">ENT Specialists</option>
            <option value="psychologists">Psychologists</option>
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

          <label>Re Enter Password</label>
          <input
            type="password"
            className="passwordconfirmreg"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
          <button
            disabled={isLoading}
            className={`mx-auto d-block ${DoctorCSS["submitbtndoctor"]}`}
          >
            Sign up
          </button>

          {!allFieldsFilled && (
            <div className={DoctorCSS["error"]}>All fields must be filled</div>
          )}
          {error && <div className="error">{error}</div>}
        </Form>
      </div>
    </div>
  );
};
