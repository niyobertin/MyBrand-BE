import express,{Request,Response} from "express";
import Jwt from "../helper/jwt";
import blogsController from "../controller/blogs.controller";
import { customFileFilter, fileUpload } from "../helper/muliter";

const blogsRoutes =  express.Router();
blogsRoutes.post('/',fileUpload.single('image'),customFileFilter,Jwt.tokenValidation,blogsController.create_blogs);
blogsRoutes.get('/',blogsController.getAllBlogs);
blogsRoutes.get('/:id',blogsController.getSingleBlog);
blogsRoutes.patch('/:id',blogsController.updatedBlogs);
blogsRoutes.delete('/:id',blogsController.removeBlogs)


export default blogsRoutes;