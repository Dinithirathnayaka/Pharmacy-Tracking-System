import TitleBar from "../components/TitleBar";
import contactUs from "../components/images/contact-us.png";
import Map from "../components/Map";
import PharmacyDetails from "../components/PharmacyDetails";

const LocateUs = () => {
  return (
    <>
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
    </>
  );
};

export default LocateUs;
