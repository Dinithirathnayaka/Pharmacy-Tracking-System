import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PharmacistSignupCSS from "./PharmacistSignup.module.css";

//custom hooks
import { usePharmacistSignup } from "../../../hooks/usePharmacistSignup";

const PharmacistSignup = () => {
  const [username, setUserName] = useState("");
  const [pName, setPName] = useState("");
  const [email, setEmail] = useState("");
  const [regNum, setRegNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [Location, setLocation] = useState(null);
  const { pharmacistsignup, isLoading, error, errorMessage } =
    usePharmacistSignup();

  const center = useMemo(() => ({ lat: 6.9271, lng: 79.8612 }), []);

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
    setLocation({
      type: "Point",
      coordinates: [lat, lng],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    try {
      await pharmacistsignup(
        username,
        regNum,
        pName,
        email,
        password,
        confirmPassword,
        Location
      );
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  useEffect(() => {
    if (error) {
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRegNum("");
      setSelectedLocation(null);
      setPName("");
    }
  }, [error]);

  return (
    <div className={` ${PharmacistSignupCSS["main-form-container"]} `}>
      <div className={`shadow ${PharmacistSignupCSS["top-form-container"]}`}>
        <div className="text-center mt-1">
          <img
            src="assets/images/register.jpeg"
            alt="user icon"
            className="registerimg"
          />
        </div>
        <div className={`${PharmacistSignupCSS["form-container"]} `}>
          <div className={` ${PharmacistSignupCSS["form-container-tags"]} `}>
            <form
              className={PharmacistSignupCSS["sign-up"]}
              onSubmit={handleSubmit}
            >
              <div
                className={`form-group ${PharmacistSignupCSS["form-element"]}`}
              >
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                  placeholder="Username"
                  required
                />
              </div>

              <div
                className={`form-group ${PharmacistSignupCSS["form-element"]}`}
              >
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email Address"
                  required
                />
              </div>

              <div
                className={`form-group ${PharmacistSignupCSS["form-element"]}`}
              >
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPName(e.target.value)}
                  value={pName}
                  placeholder="Pharmacy Name"
                  required
                />
              </div>

              <div
                className={`form-group ${PharmacistSignupCSS["form-element"]}`}
              >
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setRegNum(e.target.value)}
                  value={regNum}
                  placeholder="Registration Number"
                  required
                />
              </div>

              <div
                className={`form-group ${PharmacistSignupCSS["form-element"]}`}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Select Location"
                  readOnly
                  value={
                    selectedLocation
                      ? `Lat: ${selectedLocation.lat}, Lng: ${selectedLocation.lng}`
                      : ""
                  }
                  required
                />
              </div>

              <div
                className={`form-group ${PharmacistSignupCSS["form-element"]}`}
              >
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  required
                />
              </div>

              <div
                className={`form-group ${PharmacistSignupCSS["form-element"]}`}
              >
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <div
                className={`form-group text-center ${PharmacistSignupCSS["form-element"]}`}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn btn-success`}
                >
                  SignUp
                </button>
              </div>
              {error && (
                <div
                  className={`text-center ${PharmacistSignupCSS["error"]} ${PharmacistSignupCSS["form-element"]}`}
                >
                  {errorMessage}
                </div>
              )}
            </form>
          </div>

          <div
            className={`border border-dark ${PharmacistSignupCSS["map-container"]}`}
          >
            {typeof window !== "undefined" && window.google ? (
              <GoogleMap
                center={center}
                zoom={12}
                onClick={handleMapClick}
                mapContainerStyle={{
                  height: "60vh",
                  width: "100%",
                }}
                options={options}
              >
                {selectedLocation && (
                  <Marker
                    position={{
                      lat: selectedLocation.lat,
                      lng: selectedLocation.lng,
                    }}
                  />
                )}
              </GoogleMap>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistSignup;
