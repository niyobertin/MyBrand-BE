import express,{Request,Response} from "express";
import likesController from "../controller/likes.controller";
const likesRoutes = express.Router();

likesRoutes.post("/:id/likes",likesController.createLikes);
likesRoutes.get("/:id/likes",likesController.getLikesBasedOnBlogId);
likesRoutes.delete("/:id/likes/:id",likesController.removeLikes);

export default likesRoutes;