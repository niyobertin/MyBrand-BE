import express,{Request,Response} from "express";
import likesController from "../controller/likesController";
import authotication from "../middleware/authMiddleware";
const likesRoutes = express.Router();

likesRoutes.post("/:id/likes",authotication,likesController.createLikes);
likesRoutes.get("/:id/likes",likesController.getLikesBasedOnBlogId);
likesRoutes.delete("/:id/likes/:id",likesController.removeLikes);

export default likesRoutes;