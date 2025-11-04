import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./componets/NavBar";
import OurPartners from "./componets/OurPartners";
import OurServices from "./componets/OurServices";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <OurPartners />
      <OurServices />

      <Routes>
        <Route path="/" Component={""} />
        <Route path="/services" Component={""} />
      </Routes>
    </>
  );
}

export default App;
