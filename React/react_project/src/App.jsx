import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Landing_page/NavBar";
import FormHandle from "./pages/FormHandle";
import Hero from "./pages/Hero";
import PermissionLetterDisplay from "./components/Form/PermissionLetterDisplay";
import Topics from "./pages/Topics";
import Tasks from "./pages/Tasks";
import Index from "./components/project/Tea_Shop";
import MainLayout from "./Layouts/MainLayout";
import ProjectsLayout from "./Layouts/ProjectsLayout";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProjectsLayout />}>
          <Route path="/teashop" element={<Index />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/letterdis" element={<PermissionLetterDisplay />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
