import React from "react";
import TitleBar from "./TitleBar";
import addmedicine from "./images/document.png";
import "../Styles/AddMedicine.css";

function AddMedicine() {
  return (
    <>
      <div>
        <TitleBar
          titlePic={addmedicine}
          title="New Medicine"
          description="Add new medicine"
        />
      </div>
      <hr />

      <div className="container">
        <div
          className="addmedicinebutton"
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="stock">View Stock</a>
        </div>
        <div>
          <form>
            <div className="form">
              Medicine batch no{" "}
              <input className="formInputs" type="text" name="batchNo" /> <br />
              Medicine name{" "}
              <input className="formInputs" type="text" name="medName" /> <br />
              Medicine company{" "}
              <input
                className="formInputs"
                type="text"
                name="medCompany"
              />{" "}
              <br />
              Medicine quality{" "}
              <input
                className="formInputs"
                type="text"
                name="medQuality"
              />{" "}
              <br />
              Med expiry date{" "}
              <input
                className="formInputs"
                type="text"
                name="expiryDate"
              />{" "}
              <br />
              Medicine type{" "}
              <input className="formInputs" type="text" name="medType" /> <br />
            </div>

            <button className="savebutton">SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddMedicine;
