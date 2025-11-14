import express from "express";
import dotenv from "dotenv";
import routes from "./routes/dataRoutes.js";
import cors from "cors";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

//  http://localhost:3000/api/service

app.use("/api/service", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running successfully http://localhost:${PORT}`);
});

//  http://localhost:3000
