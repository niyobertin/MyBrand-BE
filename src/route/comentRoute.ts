import express,{Request,Response} from "express";
import comentsControler from '../controller/comentsControler';
const comentRoutes = express.Router();
//coments routes
comentRoutes.post("/:id/coments",comentsControler.createComents);
comentRoutes.get("/:id/coments",comentsControler.getComentBasedOnBlogId);

export default comentRoutes;