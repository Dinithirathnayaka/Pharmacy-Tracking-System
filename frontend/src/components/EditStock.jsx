import React from "react";
import TitleBar from "./TitleBar";
import addmedicine from "./images/document.png";

function EditStock() {
  return (
    <>
      <div>
        <TitleBar
          titlePic={addmedicine}
          title="Modify Medicine"
          description="Modify existing medicine"
        />
      </div>
      <hr />

      <div className="container">
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
                  value="001"
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
                  value="Name 1"
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
                  value="ABC Company"
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
                  value="150"
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
                  value="2023/07/30"
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
                  value="Vitamin"
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

export default EditStock;
