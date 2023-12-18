import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar/Navbar";

//pages
import Home from "./pages/Home/Home";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import PharmacistSignup from "./pages/Signup/pharmacistSignUp/PharmacistSignup";
import LocateUs from "./pages/LocateUs/LocateUs";
import StockDetails from "./pages/StockDetails/StockDetails";
import ViewDoctor from "./pages/ViewDoctor/ViewDoctor";
import { Login } from "./pages/Login/Login";
import { DoctorRegister } from "./pages/Signup/DoctorSignup/DoctorRegister";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";

//context

//hooks
import { useAuthContext } from "./hooks/useAuthContext";
import { Register } from "./pages/Signup/userSignUp/Register";
import Stock from "./components/StockDetails/ViewStock/Stock";

export default function App() {
  const { user } = useAuthContext();

  return (
    <div>
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
            element={user ? <DoctorRegister /> : <Navigate to="/login" />}
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
              </Route>

              <Route path="locate" element={<LocateUs />} />
              <Route path="viewdoctor" element={<ViewDoctor />} />
              <Route path="editprofile" element={<EditProfile />} />
            </>
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
