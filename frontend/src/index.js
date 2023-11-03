import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostsContext";
import { UserContextProvider } from "./context/userContext";

import { LoadScript } from "@react-google-maps/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <UserContextProvider>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <App />
          </LoadScript>
        </UserContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
