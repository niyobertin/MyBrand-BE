import express from "express";
import Jwt from "../helper/jwt";
import querriesController from "../controller/querries.controller";

const querriesRoutes = express.Router();
querriesRoutes.post("/querries",querriesController.createQuerries);
querriesRoutes.get("/querries",Jwt.tokenValidation,querriesController.getAllQuerries);
querriesRoutes.delete("/querries/:id",Jwt.tokenValidation,querriesController.removeQuerries);



export default querriesRoutes;
