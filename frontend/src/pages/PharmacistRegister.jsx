import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../Styles/Pharmacies.css";

export const Pharmacistregister = () => {
  //   const [fullname, setFullname] = useState("");
  //   const [prno, setPrno] = useState("");
  //   const [pharmacyname, setPharmacyname] = useState("");
  //   const [pharamacyaddress, setPharamacyaddress] = useState("");
  //   const [nic, setNic] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [profilepic, setProfilepic] = useState("");
  //   const [pass, setPass] = useState("");
  //   const [cpass, setCpass] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(email);
  //   };

  return (
    <div className="phamacies-container">
      <div className="pharmacis">
        <img src="assets/images/Pharmacies.jpeg" className="pharmaciesimg" />
        <h5 className="pharmacies-register">REGISTER AS A PHARMACIST</h5>

        <Form className="pharmacist-form">
          {/* <label for="fullname">Full Name</label> */}
          <br />
          <input
            //   value={fullname}
            //   onCharge={(e) => setFullname(e.target.value)}
            type="text"
            className="fullname"
            placeholder="Full Name"
            //   name="fullname"
          />
          <br />

          <input
            //   value={prno}
            //   onCharge={(e) => setPrno(e.target.value)}
            type="text"
            className="prno"
            placeholder="Pharmacy registration number"
            //   name="prno"
          />
          <br />

          <input
            //   value={pharmacyname}
            //   onCharge={(e) => setPharmacyname(e.target.value)}
            type="text"
            className="pharmacyname"
            placeholder="Name of the pharmacy"
            //   name="pharmacyname"
          />
          <br />

          <input
            //   value={pharamacyaddress}
            //   onCharge={(e) => setPharamacyaddress(e.target.value)}
            type="text"
            className="pharamacyaddress"
            placeholder="Address of the pharamacy"
            //   name="pharamacyaddress"
          />
          <br />

          <input
            //   value={nic}
            //   onCharge={(e) => setNic(e.target.value)}
            type="text"
            className="nic"
            placeholder="NIC"
            //   name="nic"
          />
          <br />

          <input
            //   value={email}
            //   onCharge={(e) => setEmail(e.target.value)}
            type="email"
            className="email"
            placeholder="Email"
            //   name="email"
          />
          <br />

          <input
            //   value={profilepic}
            //   onCharge={(e) => setProfilepic(e.target.value)}
            type="file"
            className="profilepic"
            placeholder="No file choosen"
            //   name="profilepic"
          />
          <br />

          <input
            //   value={pass}
            //   onCharge={(e) => setPass(e.target.value)}
            type="password"
            className="pass"
            placeholder="Password"
            //   name="pass"
          />
          <br />

          <input
            //   value={cpass}
            //   onCharge={(e) => setCpass(e.target.value)}
            type="password"
            className="cpass"
            placeholder="Confirm Password"
            //   name="cpass"
          />
          <br />

          <input type="submit" value="SUBMIT" className="submitbtnpharmacy" />
        </Form>
      </div>
    </div>
  );
};
