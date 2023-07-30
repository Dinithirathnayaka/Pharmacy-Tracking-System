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
        <div>
          <form>
            <table>
              <div className="form">
                <tr>
                  <td style={{ textAlign: "left" }}>Medicine batch no</td>
                  <td>
                    <input
                      className="formInputs"
                      type="text"
                      id="batch"
                      name="batchNo"
                      value="001"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Medicine name</td>
                  <td>
                    <input
                      className="formInputs"
                      type="text"
                      id="medname"
                      name="medName"
                      value="Name 1"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Medicine company</td>
                  <td>
                    <input
                      className="formInputs"
                      type="text"
                      id="medcompany"
                      name="medCompany"
                      value="ABC Company"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Medicine quantity</td>
                  <td>
                    <input
                      className="formInputs"
                      type="text"
                      id="medquantity"
                      name="medQuantity"
                      value="150"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Med expiry date</td>
                  <td>
                    <input
                      className="formInputs"
                      type="text"
                      id="exdate"
                      name="expiryDate"
                      value="2023/07/30"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Medicine type</td>
                  <td>
                    <input
                      className="formInputs"
                      type="text"
                      id="medtype"
                      name="medType"
                      value="Vitamin"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <button className="savebutton">SAVE</button>
                  </td>
                </tr>
              </div>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditStock;
