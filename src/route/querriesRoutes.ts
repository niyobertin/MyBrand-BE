import express from "express";
import Jwt from "../helper/jwt";
import authotication from "../middleware/authMiddleware";
import querriesController from "../controller/querriesController";
const querriesRoutes = express.Router();
querriesRoutes.post("/querries",querriesController.createQuerries);
querriesRoutes.get("/querries",authotication,querriesController.getAllQuerries);
querriesRoutes.delete("/querries/:id",authotication,querriesController.removeQuerries);
export default querriesRoutes;
