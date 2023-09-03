import GoogleMapReact from "google-map-react";
import LocationMarker from "../LocationMarker";
import MapCSS from "./Map.module.css"

const Map = ({ center, zoom }) => {
  return (
    <div className={MapCSS["map"]}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA5OvzluNVd0IvUCEo7dlQs-nn08hXzYaM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 6.9271,
    lng: 79.8612,
  },
  zoom: 12,
};

export default Map;
