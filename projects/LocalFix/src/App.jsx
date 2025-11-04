import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <LandingPage />

      <Routes>
        <Route path="/" Component={""} />
        <Route path="/services" Component={""} />
      </Routes>
    </>
  );
}

export default App;
