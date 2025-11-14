import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// http://localhost:3000/api/userroutes

app.use("/api/userroutes", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`success server started: http://localhost:${PORT}`);
});

// http://localhost:3000
