import "./App.css";
import StarterNavBar from "./components/StarterNavbar/StarterNavBar";

//pages
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Services from "./components/pages/services/Services";
import Hero from "./components/pages/hero/Hero";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StarterNavBar />}>
      <Route index element={<Hero />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="login" element={<Login />} /> */}
    </Route>
  )
);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
