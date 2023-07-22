import React, { useState } from "react";
import { Form } from "react-bootstrap";
// import { FaCamera } from "react-icons/fa";
import { FileUploader } from "react-drag-drop-files";
import "../Styles/Pharmacies.css";

const fileTypes = ["JPG", "PNG", "GIF"];
export const Pharmacistregister = () => {
  // const uploadedImage = React.useRef(null);
  // const imageUploader = React.useRef(null);

  // const handleImageUpload = (e) => {
  //   const [file] = e.target.files;
  //   if (file) {
  //     const reader = new FileReader();
  //     const { current } = uploadedImage;
  //     current.file = file;
  //     reader.onload = (e) => {
  //       current.src = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div className="phamacies-container">
      <div className="pharmacis">
        <img src="assets/images/Pharmacies.jpeg" className="pharmaciesimg" />
        <h5 className="pharmacies-register">REGISTER AS A PHARMACIST</h5>

        <Form className="pharmacist-form">
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none",
            }}
          />
          <div>
            <img
              src="assets/images/Pharmacies.jpeg"
              ref={uploadedImage}
              className="pharmaciesimg"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                position: "relative",
                marginTop: "5%",
              }}
            />
          </div>
          <FaCamera
            onClick={() => imageUploader.current.click()}
            className="uploadIcon"
          /> */}

          <label for="">Full Name</label>
          <input type="text" className="fullname" />
          <br />

          <label for="">Enter Email</label>
          <input type="email" className="email" />
          <br />

          <label for="">Upload Valid Pharmacies Certificate</label>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            className="pharmacycertificate"
          />
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
