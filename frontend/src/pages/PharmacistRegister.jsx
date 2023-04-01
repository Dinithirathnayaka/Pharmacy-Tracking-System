import React, { useState } from "react";

export const Pharmacistregister = (props) => {
  const [fullname, setFullname] = useState("");
  const [prno, setPrno] = useState("");
  const [pharmacyname, setPharmacyname] = useState("");
  const [pharamacyaddress, setPharamacyaddress] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="form-container">
      <img src="assets/images/Pharmacies.jpeg" />
      <div id="pharmacy-register">REGISTER AS A PHARMACIST</div>

      <form className="pharmacist-form" onSubmit={handleSubmit}>
        <label for="fullname">Full Name</label>
        <input
          value={fullname}
          onCharge={(e) => setFullname(e.target.value)}
          type="text"
          id="fullname"
          name="fullname"
        />

        <label for="prno">Pharmacy registration number</label>
        <input
          value={prno}
          onCharge={(e) => setPrno(e.target.value)}
          type="text"
          id="prno"
          name="prno"
        />

        <label for="pharmacyname">Name of the pharmacy</label>
        <input
          value={pharmacyname}
          onCharge={(e) => setPharmacyname(e.target.value)}
          type="text"
          id="pharmacyname"
          name="pharmacyname"
        />

        <label for="pharamacyaddress">Address of the pharamacy</label>
        <input
          value={pharamacyaddress}
          onCharge={(e) => setPharamacyaddress(e.target.value)}
          type="text"
          id="pharamacyaddress"
          name="pharamacyaddress"
        />

        <label for="nic">NIC</label>
        <input
          value={nic}
          onCharge={(e) => setNic(e.target.value)}
          type="text"
          id="nic"
          name="nic"
        />

        <label for="email">Email address</label>
        <input
          value={email}
          onCharge={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
        />

        <label for="profilepic">Profile picture</label>
        <input
          value={profilepic}
          onCharge={(e) => setProfilepic(e.target.value)}
          type="image"
          id="profilepic"
          placeholder="No file choosen"
          name="profilepic"
        />

        <label for="pass">Password</label>
        <input
          value={pass}
          onCharge={(e) => setPass(e.target.value)}
          type="password"
          id="pass"
          name="pass"
        />

        <label for="cpass">Confirm password</label>
        <input
          value={cpass}
          onCharge={(e) => setCpass(e.target.value)}
          type="password"
          id="cpass"
          name="cpass"
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
