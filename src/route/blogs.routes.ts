import express,{Request,Response} from "express";
import Jwt from "../helper/jwt";
import blogsController from "../controller/blogs.controller";

const blogsRoutes =  express.Router();
blogsRoutes.post('/',Jwt.tokenValidation,blogsController.create_blogs);
blogsRoutes.get('/',blogsController.getAllBlogs);
blogsRoutes.get('/:id',blogsController.getSingleBlog);
blogsRoutes.patch('/:id',blogsController.updatedBlogs);
blogsRoutes.delete('/:id',blogsController.removeBlogs)


export default blogsRoutes;