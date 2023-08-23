import TitleBar from "../components/TitleBar";
import contactUs from "../components/images/contact-us.png";
import Map from "../components/Map/Map";
import PharmacyDetails from "../components/PharmacyDetails";
import LocateCSS from "./LocateUs.module.css";

const LocateUs = () => {
  return (
    <div className={LocateCSS["locateus-container"]}>
      <TitleBar
        titlePic={contactUs}
        title="Locate Us"
        description="Find where we are"
      />

      <div
        className="container-fluid"
        style={{
          width: "100%",
          height: "calc(100vh - 117px)",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <Map />
      </div>

      <div>
        <PharmacyDetails />
        <PharmacyDetails />
        <PharmacyDetails />
        <PharmacyDetails />
      </div>
    </div>
  );
};

export default LocateUs;
