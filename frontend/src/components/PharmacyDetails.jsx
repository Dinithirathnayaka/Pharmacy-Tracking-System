import "../Styles/pharmacydetails.css";

import DirectionsIcon from "@mui/icons-material/Directions";

const PharmacyDetails = () => {
  return (
    <div className="container pharmacyDetails">
      <div className="pharmacyDetails-container">
        <div className="pharmacyDetails_left">
          <p>
            Nirma pharmacy Pharmacy
            <br />
            MP57+59F
            <br /> 077 818 0663 <br />
            Closed ⋅ Opens 7 AM
            <br />
            Thu In-store shopping
          </p>
        </div>
        <div className="pharmacyDetails_right">
          <div>
            <DirectionsIcon />
          </div>
          <div>
            <span>DIRECTIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDetails;
