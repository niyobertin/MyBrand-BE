import express,{Request,Response} from "express";
import Jwt from "../helper/jwt";
import blogsController from "../controller/blogsController";
import { customFileFilter, fileUpload } from "../helper/muliter";

const blogsRoutes =  express.Router();
blogsRoutes.post('/',fileUpload.single('image'),customFileFilter,Jwt.tokenValidation,blogsController.create_blogs);
blogsRoutes.get('/',blogsController.getAllBlogs);
blogsRoutes.get('/:id',blogsController.getSingleBlog);
blogsRoutes.patch('/:id',fileUpload.single('image'),customFileFilter,Jwt.tokenValidation,blogsController.updatedBlogs);
blogsRoutes.delete('/:id',Jwt.tokenValidation,blogsController.removeBlogs);

export default blogsRoutes;