import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import {
  Circle,
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
} from "@react-google-maps/api";
import MapCSS from "./Map.module.css";
import homeLocatorImage from "../images/home_locator.png";

const Map = ({ zoom, markers }) => {
  // const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(() => {
    const storedLocation = localStorage.getItem("currentLocation");
    return storedLocation ? JSON.parse(storedLocation) : null;
  });

  const [directions, setDirections] = useState(null);
  console.log(directions);

  const mapRef = useRef();

  const options = useMemo(
    () => ({
      // mapId: "f50eb586eb2b2813",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    // setMap(map);
  }, []);

  useEffect(() => {
    getUserLocation();
  }, []);

  const center = useMemo(
    () => currentLocation || { lat: 8.3114, lng: 80.4037 },
    [currentLocation]
  );

  // const center = currentLocation || { lat: 8.3114, lng: 80.4037 };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const newLocation = { lat: latitude, lng: longitude };

          // Save the newLocation to localStorage
          localStorage.setItem("currentLocation", JSON.stringify(newLocation));

          setCurrentLocation({ lat: 6.7184, lng: 80.7741 });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  };

  const fetchDirections = (marker) => {
    if (!currentLocation) return;

    // Clear previous directions before fetching new directions
    setDirections(null);

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: marker,
        destination: currentLocation,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  return (
    <div className={MapCSS["map"]}>
      <GoogleMap
        center={center}
        zoom={zoom}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        onLoad={onLoad}
        options={options}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 50,
                strokeColor: "#1976D2",
                strokeWeight: 5,
              },
            }}
          />
        )}
        <MarkerF
          position={{
            lat: center.lat,
            lng: center.lng,
          }}
          icon={{
            url: homeLocatorImage,
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          title="Current Location"
        />

        {markers &&
          markers.map((marker, index) => (
            <React.Fragment key={index}>
              <MarkerF
                position={marker}
                title={marker.pharmacyName}
                onClick={() => {
                  fetchDirections(marker);
                }}
              />
              <Circle center={center} radius={15000} options={closeOptions} />
              <Circle center={center} radius={30000} options={middleOptions} />
              <Circle center={center} radius={45000} options={farOptions} />
            </React.Fragment>
          ))}
      </GoogleMap>
    </div>
  );
};

Map.defaultProps = {
  zoom: 10,
  markers: [],
};

export default Map;

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
