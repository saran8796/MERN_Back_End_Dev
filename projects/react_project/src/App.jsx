import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Landing_page/NavBar";
import FormHandle from "./pages/FormHandle";
import Hero from "./pages/Hero";
import PermissionLetterDisplay from "./components/Form/PermissionLetterDisplay";
import Topics from "./pages/Topics";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Use `element` prop with JSX */}
        <Route path="/" element={<Hero />} />
        <Route path="/topics" element={<FormHandle />} />
        <Route path="/letterdis" element={<PermissionLetterDisplay />} />
      </Routes>
    </>
  );
}

export default App;
