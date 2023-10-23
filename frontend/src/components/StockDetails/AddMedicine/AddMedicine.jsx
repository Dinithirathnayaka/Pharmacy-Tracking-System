import TitleBar from "../../TitleBar/TitleBar";
import addmedicine from "../../images/document.png";
import AddMedicineCSS from "./AddMedicine.module.css";
import { Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

function AddMedicine({ setOpenPopup }) {
  const [pharmacyId, setPharmacyId] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    setPharmacyId(user.id); // Set pharmacyId within the useEffect
  }, [user.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("/api/medicines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pharmacyId,
          batchNumber,
          name,
          company,
          quantity,
          expiryDate,
          type,
        }),
      });

      if (!response.ok) {
        setLoading(false);
        setError(true);
      }

      if (response.ok) {
        setError(false);
        setLoading(false);
        setOpenPopup(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <div className={AddMedicineCSS["titleBar-container"]}>
        <TitleBar
          titlePic={addmedicine}
          title="New Medicine"
          description="Add new medicine"
        />
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => {
            setOpenPopup(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <hr />

      <div>
        <div className={AddMedicineCSS["addmedicine_container"]}>
          <form onSubmit={handleSubmit}>
            <div className="row mt-3">
              <div>
                <input
                  className={AddMedicineCSS["formInputs"]}
                  type="text"
                  id="batch"
                  name="batchNo"
                  value={batchNumber}
                  onChange={(e) => setBatchNumber(e.target.value)}
                  placeholder="Medicine batch no"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div>
                <input
                  className={AddMedicineCSS["formInputs"]}
                  type="text"
                  id="medname"
                  name="medName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Medicine name"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div>
                <input
                  className={AddMedicineCSS["formInputs"]}
                  type="text"
                  id="medcompany"
                  name="medCompany"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Medicine company"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div>
                <input
                  className={AddMedicineCSS["formInputs"]}
                  type="text"
                  id="medquantity"
                  name="medQuantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Medicine quantity"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div>
                <input
                  className={AddMedicineCSS["formInputs"]}
                  type="text"
                  id="exdate"
                  name="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="Med expiry date"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div>
                <input
                  className={AddMedicineCSS["formInputs"]}
                  type="text"
                  id="medtype"
                  name="medType"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Medicine type"
                  required
                />
              </div>
            </div>
            <button className={AddMedicineCSS["savebutton"]}>SAVE</button>
          </form>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AddMedicine;
