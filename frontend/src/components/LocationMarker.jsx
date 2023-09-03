import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div
      className="location-marker"
      onClick={onClick}
      style={{
        fontSize: "2rem",
        color: "red",
      }}
    >
      <LocationOnIcon className="location-icon" />
    </div>
  );
};

export default LocationMarker;
