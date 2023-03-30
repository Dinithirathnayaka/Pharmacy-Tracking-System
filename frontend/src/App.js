import "./App.css";
import StarterNavBar from "./components/StarterNavbar/StarterNavBar";

//pages
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Services from "./components/pages/services/Services";
import Hero from "./components/pages/hero/Hero";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import RegisterPharmacist from "./components/pages/RegisterPharmacist";
import CreateAccount from "./components/pages/CreateAccount";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import MainNavbar from "./components/MainNavbar/MainNavbar";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const starter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StarterNavBar />}>
      <Route index element={<Hero />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="sign_up" element={<SignUp />} />
      <Route path="sign_in" element={<SignIn />} />
      <Route path="create_account" element={<CreateAccount />} />
      <Route path="forgot_password" element={<ForgotPassword />} />
      <Route path="reset_password" element={<ResetPassword />} />
      <Route path="register_pharmacist" element={<RegisterPharmacist />} />
    </Route>
  )
);

function App() {
  return (
    <main>
      <RouterProvider router={starter} />
    </main>
  );
}

export default App;
