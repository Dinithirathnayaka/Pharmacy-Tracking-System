import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import {
  Circle,
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import MapCSS from "./Map.module.css";
import homeLocatorImage from "../images/home_locator.png";

const Map = ({ zoom, markers }) => {
  const [currentLocation, setCurrentLocation] = useState(() => {
    const storedLocation = localStorage.getItem("currentLocation");
    return storedLocation ? JSON.parse(storedLocation) : null;
  });

  const [mapKey, setMapKey] = useState(0); // Add a state to change the map key
  const [directions, setDirections] = useState(null);

  const mapRef = useRef();

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    getUserLocation();
  }, []);

  const center = useMemo(
    () => currentLocation || { lat: 8.3114, lng: 80.4037 },
    [currentLocation]
  );

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const newLocation = { lat: latitude, lng: longitude };

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

  const handleMarkerClick = (marker) => {
    if (!center) return;

    // Reinitialize the map by changing the map key
    setMapKey(mapKey + 1);

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: marker,
        destination: center,
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
        key={mapKey} // Change the key to reinitialize the map
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
                  handleMarkerClick(marker);

                  // Clear previous directions before fetching new directions
                  setDirections(null);
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

// Define 'closeOptions', 'middleOptions', and 'farOptions' as before.
