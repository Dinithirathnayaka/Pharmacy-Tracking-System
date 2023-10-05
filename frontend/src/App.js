import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

//components
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import AddMedicine from "./components/StockDetails/AddMedicine/AddMedicine";
import Stock from "./components/StockDetails/ViewStock/Stock";
import EditStock from "./components/StockDetails/EditStock/EditStock";
import Navbar from "./components/Navbar/Navbar";

//pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Doctorregister } from "./pages/DoctorRegister";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import ViewDoctor from "./pages/ViewDoctor";

//context
import { SearchProvider } from "./context/SearchContext";
import StockDetails from "./components/StockDetails/StockDetails";
import Home from "./pages/Home/Home";
import VerifyEmail from "./pages/VerifyEmail";
import PharmacistSignup from "./pages/Signup/pharmacistSignUp/PharmacistSignup";
import LocateUs from "./pages/LocateUs/LocateUs";
import Navbar2 from "./components/Navbar/Navbar2";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuthContext();

  console.log("App.js line 35 ");
  console.log(user);

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchProvider>
        <BrowserRouter>
          {![
            "/login",
            "/register",
            "/pharmacistregister",
            "/registerdoctor",
            "/forgotpassword",
            "/resetpassword",
          ].includes(window.location.pathname) && <Navbar />}

          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/pharmacistregister"
              element={!user ? <PharmacistSignup /> : <Navigate to="/" />}
            />
            <Route
              path="/registerdoctor"
              element={!user ? <Doctorregister /> : <Navigate to="/" />}
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />

            {user ? (
              <>
                <Route path="/" element={<Profile />} />

                <Route
                  path="stockdetails"
                  element={
                    user.role === "pharmacist" ? (
                      <StockDetails />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                >
                  <Route index element={<Navigate to="stock" />} />
                  <Route path="stock" element={<Stock />} />
                  <Route path="addmedicine" element={<AddMedicine />} />
                  <Route path="editstock" element={<EditStock />} />
                </Route>

                <Route path="locate" element={<LocateUs />} />
                <Route
                  path="viewdoctor"
                  element={<ViewDoctor searchQuery={searchQuery} />}
                />
                <Route path="editprofile" element={<EditProfile />} />
              </>
            ) : (
              <Route path="/" element={<Home />} />
            )}
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}
