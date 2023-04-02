import StarterNavBar from "./components/StarterNavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Hero from "./components/Hero";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Pharmacistregister } from "./pages/PharmacistRegister";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
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
          <Route path="/phamacistregister" element={<Pharmacistregister />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
