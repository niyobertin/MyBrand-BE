import express,{Request,Response} from "express";
import { like,getLikes } from "../controller/likesController";
import {authotication }from "../middleware/authMiddleware";
const likesRoutes = express.Router();

likesRoutes.post("/:id/likes",authotication,like);
likesRoutes.get("/:id/likes",getLikes);
export default likesRoutes;