import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TeaKadai from "./provider/TeaKadai.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeaKadai>
      <App />
    </TeaKadai>
  </StrictMode>
);
