import express,{Request,Response} from "express";
import commentsControler from '../controller/commentsControler';
import authotication from "../middleware/authMiddleware";
const commentsRoutes = express.Router();
//comments routes
commentsRoutes.post("/:id/comments",commentsControler.createcomments);
commentsRoutes.get("/:id/comments",commentsControler.getcommentsBasedOnBlogId);
export default commentsRoutes;