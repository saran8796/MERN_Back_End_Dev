import { useNavigate } from "react-router-dom";
import Index from "../components/project/Tea_Shop";

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/teashop");
  };
  return (
    <>
      <div>
        <button
          onClick={handleClick}
          className="p-5 border-2 border-amber-300 rounded-2xl"
        >
          Tea Shop
        </button>
      </div>
    </>
  );
};

export default Projects;
