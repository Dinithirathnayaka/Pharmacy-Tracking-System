import TitleBar from "../../TitleBar/TitleBar";
import addmedicine from "../../images/document.png";
import EditMedicineCSS from "./EditMedicine.module.css";
import { Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import CircularProgress from "@mui/material/CircularProgress";

function EditMedicine({ setEditOpenPopup, rowId }) {
  const [pharmacyId, setPharmacyId] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [medicine, setMedicine] = useState({});
  const { user } = useAuthContext();

  useEffect(() => {
    setPharmacyId(user.id); // Set pharmacyId within the useEffect
  }, [user.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/medicines/${rowId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          console.log("Failed");
        }

        if (response.ok) {
          const data = await response.json();
          setMedicine(data);
          setBatchNumber(data.batchNumber);
          setName(data.name);
          setCompany(data.company);
          setQuantity(data.quantity);
          setExpiryDate(
            new Date(data.expiryDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          );
          setType(data.type);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [rowId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`/api/medicines/${rowId}`, {
        method: "PATCH",
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
      }

      if (response.ok) {
        setLoading(false);
        setEditOpenPopup(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={EditMedicineCSS["titleBar-container"]}>
        <TitleBar
          titlePic={addmedicine}
          title="Edit Medicine"
          description="Update the medicine details"
        />
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => {
            setEditOpenPopup(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <hr />

      <div>
        <div className={EditMedicineCSS["addmedicine_container"]}>
          <form onSubmit={handleSubmit}>
            <div className="row mt-3">
              <div>
                <input
                  className={EditMedicineCSS["formInputs"]}
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
                  className={EditMedicineCSS["formInputs"]}
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
                  className={EditMedicineCSS["formInputs"]}
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
                  className={EditMedicineCSS["formInputs"]}
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
                  className={EditMedicineCSS["formInputs"]}
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
                  className={EditMedicineCSS["formInputs"]}
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
            <button className={EditMedicineCSS["savebutton"]}>
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "SAVE"
              )}
            </button>
          </form>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default EditMedicine;
