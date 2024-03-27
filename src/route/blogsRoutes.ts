import express,{Request,Response} from "express";
import { authotication,authoticateAdmin } from "../middleware/authMiddleware";
import blogsController from "../controller/blogsController";
import { customFileFilter, fileUpload } from "../helper/muliter";
const blogsRoutes =  express.Router();
blogsRoutes.post('/',authotication,authoticateAdmin,fileUpload.single('image'),customFileFilter,blogsController.create_blogs);
blogsRoutes.get('/',blogsController.getAllBlogs);
blogsRoutes.get('/:id',blogsController.getSingleBlog);
blogsRoutes.patch('/:id',authotication,authoticateAdmin,fileUpload.single('image'),blogsController.updatedBlogs);
blogsRoutes.delete('/:id',authotication,authoticateAdmin,blogsController.removeBlogs);

export default blogsRoutes;