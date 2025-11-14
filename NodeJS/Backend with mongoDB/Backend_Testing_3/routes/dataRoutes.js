import express from "express";
import { getData, setData } from "../controllers/dataController.js";

const routes = express.Router();

// http://localhost:3000/api/service/getdata

routes.post("/getdata", getData);
routes.post("/setdata", setData);

export default routes;
