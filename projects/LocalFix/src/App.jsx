import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./componets/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SeervicesPage from "./pages/SeervicesPage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<SeervicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
