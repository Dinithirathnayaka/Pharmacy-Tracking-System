import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Circle, GoogleMap, MarkerF } from "@react-google-maps/api";
import MapCSS from "./Map.module.css";
import homeLocatorImage from "../images/home_locator.png";

const Map = ({ zoom, markers }) => {
  const [currentLocation, setCurrentLocation] = useState(() => {
    const storedLocation = localStorage.getItem("currentLocation");
    return storedLocation ? JSON.parse(storedLocation) : null;
  });

  const mapRef = useRef();

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const directionsRenderers = useRef([]); // Ref to hold the directions renderers

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

    // Remove any old renderers from the map
    for (let i = 0; i < directionsRenderers.current.length; i++) {
      directionsRenderers.current[i].setMap(null);
    }
    // Clear out the directionsRenderers array
    directionsRenderers.current = [];

    const directionsService = new window.google.maps.DirectionsService();

    const request = {
      origin: marker,
      destination: center,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        const rendererOptions = getRendererOptions();
        renderDirections(result, rendererOptions);
      }
    });
  };

  const getRendererOptions = () => {
    return {
      draggable: false,
      suppressMarkers: false,
      polylineOptions: {
        strokeColor: "#00458E", // Change color as needed
        strokeWeight: 4,
        strokeOpacity: 1.0,
      },
    };
  };

  const renderDirections = (result, rendererOptions) => {
    // Create a new renderer object
    const directionsRenderer = new window.google.maps.DirectionsRenderer(
      rendererOptions
    );

    directionsRenderer.setMap(mapRef.current);
    directionsRenderer.setDirections(result);

    // Push the new renderer onto directionsRenderers array
    directionsRenderers.current.push(directionsRenderer);
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

// Define 'closeOptions', 'middleOptions', and 'farOptions' as needed.

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
