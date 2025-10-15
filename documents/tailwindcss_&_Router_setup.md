##### **tailwindcss installation:**



cmd - npm install tailwindcss @tailwindcss/vite



open vite.config.js file add



 	import { defineConfig } from 'vite'

 	import react from '@vitejs/plugin-react'

 	import tailwindcss from '@tailwindcss/vite'



 	// https://vite.dev/config/

 	export default defineConfig({

 	  plugins: \[react(), tailwindcss()],

 	})





open index.css code - @import "tailwindcss";



---



##### **router installation:**



cmd - npm install react-router-dom



open main.jsx file add



 	import { StrictMode } from "react";

 	import { createRoot } from "react-dom/client";

 	import "./index.css";

 	import App from "./App.jsx";

 	import { BrowserRouter } from "react-router-dom";

 

 	createRoot(document.getElementById("root")).render(

 	  <StrictMode>

 	    <BrowserRouter>

 	      <App />

 	    </BrowserRouter>

 	  </StrictMode>

 	);

