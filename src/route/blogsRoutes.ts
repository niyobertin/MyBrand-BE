import express,{Request,Response} from "express";
import authotication from "../middleware/authMiddleware";
import blogsController from "../controller/blogsController";
import { customFileFilter, fileUpload } from "../helper/muliter";

const blogsRoutes =  express.Router();
blogsRoutes.post('/',authotication,fileUpload.single('image'),customFileFilter,blogsController.create_blogs);
blogsRoutes.get('/',blogsController.getAllBlogs);
blogsRoutes.get('/:id',blogsController.getSingleBlog);
blogsRoutes.patch('/:id',fileUpload.single('image'),customFileFilter,authotication,blogsController.updatedBlogs);
blogsRoutes.delete('/:id',authotication,blogsController.removeBlogs);

export default blogsRoutes;