import { Request,Response } from "express";
import blogsService from "../service/blog.cervice"
import blogCervice from "../service/blog.cervice";

const create_blogs = async(req:Request,res:Response) => {
    try{
        const blogs = await blogsService.createBlogs(req)
        res.status(201).json({
            status:201,
            message:'New blog created'
        });
    }catch(error:any){
        res.send(error.message);
    }
}

const getAllBlogs = async(req:Request,res:Response) => {
    const blogs:any = await blogsService.retrieveBlogs();
    if(blogs.length < 1){
        res.status(404).json({status:404, blogs:blogs })
    }else{
        res.status(200).json({status:200, blogs:blogs })
    }
}

const getSingleBlog = async(req:Request,res:Response) => {
    const blogs:any = await blogCervice.retrieveSingleBlogs(req);
    if(!blogs){
        res.status(404).json({status:404, blogs:"Not Found" })
    }else{
        res.status(200).json({status:200, blogs:blogs })
    }
}

const updatedBlogs = async(req:Request,res:Response) =>{
    const updateBlg = await blogCervice.updateBlogs(req);
    if(!updateBlg){
        res.status(404).json({status:404, blogs:"Not Found" })
    }else{
        res.status(201).json({
            status:201,
            message:'Blog Updated'
        });
    }
}

const removeBlogs = async(req:Request,res:Response) =>{
    const deleted:any = await blogCervice.removeBlogs(req);
    if(deleted.deletedCount === 0){
        res.status(404).json({status:404, blogs:"Not Found" })
    }else{
        res.status(200).json({
            status:200,
            message:'Blog deleted'
        });
    }
}

export default {
    create_blogs,
    getAllBlogs,
    getSingleBlog,
    updatedBlogs,
    removeBlogs
}