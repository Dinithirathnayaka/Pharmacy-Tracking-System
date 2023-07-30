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
        <div className="addmedicine_container">
          <form>
            <div className="row mt-3">
              <div className="col-md-3 col-xs-12">
                <label>Medicine batch no</label>
              </div>
              <div className="col-md-6 col-xs-12">
                <input
                  className="formInputs"
                  type="text"
                  id="batch"
                  name="batchNo"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 col-xs-12">
                <label>Medicine name</label>
              </div>
              <div className="col-md-6 col-xs-12">
                <input
                  className="formInputs"
                  type="text"
                  id="medname"
                  name="medName"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 col-xs-12">
                <label>Medicine company</label>
              </div>
              <div className="col-md-6 col-xs-12">
                <input
                  className="formInputs"
                  type="text"
                  id="medcompany"
                  name="medCompany"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 col-xs-12">
                <label>Medicine quantity</label>
              </div>
              <div className="col-md-6 col-xs-12">
                <input
                  className="formInputs"
                  type="text"
                  id="medquantity"
                  name="medQuantity"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 col-xs-12">
                <label>Med expiry date</label>
              </div>
              <div className="col-md-6 col-xs-12">
                <input
                  className="formInputs"
                  type="text"
                  id="exdate"
                  name="expiryDate"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 col-xs-12">
                <label>Medicine type</label>
              </div>
              <div className="col-md-6 col-xs-12">
                <input
                  className="formInputs"
                  type="text"
                  id="medtype"
                  name="medType"
                />
              </div>
            </div>
            <button className="savebutton">SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddMedicine;
