import express from "express";
import { sendData } from "../controllers/userController.js";

const user = express.Router();

// http://localhost:3000/api/user/senddata

user.post("/senddata", sendData);

export default user;
