import express from "express";
import { authoticateAdmin } from "../middleware/authMiddleware";
import querriesController from "../controller/querriesController";
const querriesRoutes = express.Router();
querriesRoutes.post("/querries",querriesController.createQuerries);
querriesRoutes.get("/querries",authoticateAdmin,querriesController.getAllQuerries);
querriesRoutes.delete("/querries/:id",authoticateAdmin,querriesController.removeQuerries);
export default querriesRoutes;
