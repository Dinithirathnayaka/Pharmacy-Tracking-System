import GoogleMapReact from "google-map-react";
import "../Styles/Map.css";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA5OvzluNVd0IvUCEo7dlQs-nn08hXzYaM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 6.9271,
    lng: 79.8612,
  },
  zoom: 6,
};

export default Map;
