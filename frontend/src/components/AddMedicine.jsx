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
            <table>
                <div className="form">
                    <tr>
                        <td style={{ textAlign:"left" }}>Medicine batch no</td>
                        <td><input className='formInputs' type='text' id="batch" name='batchNo'/></td> 
                    </tr>
                    <tr>
                        <td style={{ textAlign:"left" }}>Medicine name</td>
                        <td><input className='formInputs' type='text' id="medname" name='medName'/></td>
                    </tr>
                    <tr>
                        <td style={{ textAlign:"left" }}>Medicine company</td>
                        <td><input className='formInputs' type='text' id="medcompany" name='medCompany'/></td>
                    </tr>   
                    <tr>
                        <td style={{ textAlign:"left" }}>Medicine quantity</td>
                        <td><input className='formInputs' type='text' id="medquantity" name='medQuantity'/></td>
                    </tr> 
                    <tr>
                        <td style={{ textAlign:"left" }}>Med expiry date</td>
                        <td><input className='formInputs' type='text' id="exdate" name='expiryDate'/></td>
                    </tr> 
                    <tr>
                        <td style={{ textAlign:"left" }}>Medicine type</td>
                        <td><input className='formInputs' type='text' id="medtype" name='medType'/></td>
                    </tr> 
                    <tr>
                        <td style={{ textAlign:"left" }}><button className="savebutton">SAVE</button></td>
                    </tr>
                </div>

                
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddMedicine;
