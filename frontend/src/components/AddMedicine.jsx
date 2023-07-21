import React from 'react'
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

        <div className='container'>

            <div>
                <button className='Addmedicine'> View Stock </button>
            </div>
        </div>
    </>
    
  )
}

export default AddMedicine