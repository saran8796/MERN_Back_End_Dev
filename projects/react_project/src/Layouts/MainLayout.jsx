import { Outlet } from "react-router-dom";
import NavBar from "../components/Landing_page/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
