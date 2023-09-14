import { Form } from "react-bootstrap";
import "../Styles/Pharmacies.css";

const fileTypes = ["JPG", "PNG", "GIF"];
export const Pharmacistregister = () => {
  return (
    <div className="phamacies-container">
      <div className="pharmacis">
        <img src="assets/images/Pharmacies.jpeg" className="pharmaciesimg" />
        <h5 className="pharmacies-register">REGISTER AS A PHARMACIST</h5>

        <Form className="pharmacist-form">
          <label htmlFor="">Registration Number</label>
          <input type="email" className="email" />
          <br />
          <label htmlFor="">Full Name</label>
          <input type="text" className="fullname" />
          <br />

          <label htmlFor="">Enter Email</label>
          <input type="email" className="email" />
          <br />

          <label htmlFor="">Enter Password</label>
          <input type="password" className="pass" />
          <br />

          <label htmlFor="">Confirm Password</label>
          <input type="password" className="cpass" />
          <br />

          <input type="submit" value="SUBMIT" className="submitbtnpharmacy" />
        </Form>
      </div>
    </div>
  );
};
