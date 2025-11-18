import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HooksProcess from "./components/HooksProcess";
import Home from "./pages/Home";
import UseEffect from "./components/Hooks/UseEffect";
import Form from "./components/Form";
import Props from "./components/Props";
import FormExample from "./components/FormExample";
import FormTask from "./components/Forms/SendFormData";
import GetFormData from "./components/Forms/GetFormData";

const App = () => {
  const obj = { name: "kohsanar" };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Sticky nav with shadow */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooksprocess" element={<HooksProcess />} />
          {/* <Route path="/useeff" element={<UseEffect />} /> */}
          <Route path="/form" element={<Form />} />
          <Route path="/props" element={<Props obj={obj} />} />
          <Route path="/formexample" element={<FormExample />} />
          <Route path="/getform" element={<GetFormData />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
