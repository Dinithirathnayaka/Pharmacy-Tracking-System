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
import NearMeIcon from "@mui/icons-material/NearMe";

const Map = ({ zoom, markers }) => {
  const [currentLocation, setCurrentLocation] = useState(() => {
    const storedLocation = localStorage.getItem("currentLocation");
    return storedLocation ? JSON.parse(storedLocation) : null;
  });

  const [map, setMap] = useState(null);

  const mapRef = useRef();

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const center = useMemo(
    () => currentLocation || { lat: 8.3114, lng: 80.4037 },
    [currentLocation]
  );

  const directionsRenderers = useRef([]); // Ref to hold the directions renderers
  const directionsRendererRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    setMap(map);
    renderCircles();
  }, []);

  const renderCircles = () => {
    if (mapRef.current) {
      renderCircle(center, 15000, closeOptions);
      renderCircle(center, 30000, middleOptions);
      renderCircle(center, 45000, farOptions);
    }
  };

  const renderCircle = (center, radius, options) => {
    const circle = new window.google.maps.Circle({
      center,
      radius,
      options,
    });
    circle.setMap(mapRef.current);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    // Clear directions when markers change
    clearDirections();
  }, [markers]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const newLocation = {
            lat: 6.711240078429725,
            lng: 80.79160092414799,
          };
          // const newLocation = { lat: latitude, lng: longitude };6.711240078429725, 80.79160092414799

          localStorage.setItem("currentLocation", JSON.stringify(newLocation));

          // setCurrentLocation(newLocation);
          setCurrentLocation(newLocation);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  };

  const clearDirections = () => {
    // Clear previous directions renderer
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
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
        zIndex: 50,
        strokeColor: "#1976D2",
        strokeWeight: 5,
      },
    };
  };

  const renderDirections = (result) => {
    clearDirections(); // Clear previous directions before rendering new directions

    const rendererOptions = getRendererOptions();

    // Create a new directions renderer
    const directionsRenderer = new window.google.maps.DirectionsRenderer(
      rendererOptions
    );

    directionsRenderer.setMap(mapRef.current);
    directionsRenderer.setDirections(result);

    // Update the directionsRendererRef with the new renderer
    directionsRendererRef.current = directionsRenderer;
  };

  return (
    <div className={MapCSS["map"]}>
      <div
        className={`${MapCSS["re-center"]} ${MapCSS["wave-icon-container"]}`}
      >
        <NearMeIcon
          className={`${MapCSS["wave-icon"]}`}
          onClick={() => map.panTo(center)}
        />
      </div>
      <GoogleMap
        center={currentLocation ? currentLocation : center}
        zoom={zoom}
        mapContainerStyle={{
          width: "100%",
          height: "calc(100vh - 104.92px)",
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
            </React.Fragment>
          ))}
        {center && (
          <>
            <Circle center={center} radius={15000} options={closeOptions} />
            <Circle center={center} radius={30000} options={middleOptions} />
            <Circle center={center} radius={45000} options={farOptions} />
          </>
        )}
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
