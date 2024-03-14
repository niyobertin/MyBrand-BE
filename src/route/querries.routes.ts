import express from "express";
import querriesController from "../controller/querries.controller";

const querriesRoutes = express.Router();
querriesRoutes.post("/querries",querriesController.createQuerries);
querriesRoutes.get("/querries",querriesController.getAllQuerries);
querriesRoutes.delete("/querries/:id",querriesController.removeQuerries);



export default querriesRoutes;
