import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import "../Styles/Pharmacies.css";

const fileTypes = ["JPG", "PNG", "GIF"];
export const Doctorregister = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div className="phamacies-container">
      <div className="pharmacis">
        <img src="assets/images/doctor.png" className="pharmaciesimg" />
        <h5 className="pharmacies-register">REGISTER AS A DOCTOR</h5>

        <Form className="pharmacist-form">
          <label for="">Registration Number</label>
          <input type="text" className="fullname" />
          <br />

          <label for="">Full Name</label>
          <input type="text" className="fullname" />
          <br />

          <label for="">Enter Email</label>
          <input type="email" className="email" />
          <br />

          <label for="feild">Choose a feild:</label>
          <select id="feild" name="carlist" form="feildform">
            <option value="feild1">Feild1</option>
            <option value="feild2">Feild2</option>
            <option value="feild3">Feild3</option>
            <option value="feild4">Feild4</option>
          </select>
          <br />

          <label for="">Enter Password</label>
          <input type="password" className="pass" />
          <br />

          <label for="">Confirm Password</label>
          <input type="password" className="cpass" />
          <br />

          <input type="submit" value="SUBMIT" className="submitbtnpharmacy" />
        </Form>
      </div>
    </div>
  );
};
