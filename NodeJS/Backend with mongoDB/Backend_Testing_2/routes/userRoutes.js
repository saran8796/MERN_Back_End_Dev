import express from "express";
import { getData } from "../controllers/userController.js";

const routes = express.Router();

// http://localhost:3000/api/userroutes/getdata

routes.post("/getdata", getData);

export default routes;
