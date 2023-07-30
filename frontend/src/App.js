import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import StarterNavBar from "./components/StarterNavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import AddMedicine from "./components/AddMedicine";
import Stock from "./components/Stock";
import Services from "./components/Services";
import Hero from "./components/Hero";
import EditStock from "./components/EditStock";

//pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Pharmacistregister } from "./pages/PharmacistRegister";
import { Doctorregister } from "./pages/DoctorRegister";
import { Reset } from "./pages/ResetPassword";
import ViewDoctor from "./pages/ViewDoctor";
import MainNavbar from "./components/MainNavbar";
import LocateUs from "./pages/LocateUs";

//context
import { SearchProvider } from "./context/SearchContext";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StarterNavBar />}>
              <Route index element={<Hero />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/pharmacistregister"
              element={<Pharmacistregister />}
            />
            <Route path="/registerdoctor" element={<Doctorregister />} />
            <Route path="/reset" element={<Reset />} />

            <Route path="/main" element={<MainNavbar />}>
              <Route index element={<Profile />} />
              <Route path="stock" element={<Stock />} />
              <Route path="locate" element={<LocateUs />} />
              <Route
                path="viewdoctor"
                element={<ViewDoctor searchQuery={searchQuery} />}
              />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="addmedicine" element={<AddMedicine />} />
              <Route path="editstock" element={<EditStock />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}
