import { Request } from "express";
import Blogs from "../models/blogs";
import { uploadToCloud } from "../middleware/cloudinary";
const createBlogs = async (req:Request) => {

    try{
            let blogimg;
            if(req.file){
                blogimg = await uploadToCloud(req.file);
                
            }else{
                blogimg = null;
            }
            const blogs = new Blogs({
                title:req.body.title,
                image:blogimg,
                content:req.body.content
            });
            await blogs.save();
        return blogs;
    }catch(err:any){
        throw new Error(err.message);
    }
}
const retrieveBlogs = async() =>{
    try{
        return await Blogs.find();
        }catch(error:any){
        throw new Error(error.message);
        }
}
const retrieveSingleBlogs = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
        return await Blogs.findOne(id);
        }catch(error:any){
        throw new Error(error.message);
        }
}
const updateBlogs = async(req:Request) => {
    try{
        let blogimg;
            if(req.file){
                blogimg = await uploadToCloud(req.file);  
            }else{
                blogimg = null;
            }
        const id = { _id: req.params.id };
        const update_blogs:any =await Blogs.findOne(id);
        if(!update_blogs){
            return false;
        }else{
            if(req.body.title){
                update_blogs.title = req.body.title
            }
            if(req.body.image){
                update_blogs.image = blogimg
            }
            if(req.body.content){
                update_blogs.content = req.body.content
            }
        }
        await update_blogs.save();
        return update_blogs;
    }catch(error:any){
        throw new Error(error.message);
    }
}
const removeBlogs = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
            const deleteBlg:any = await Blogs.deleteOne(id);
            if(!deleteBlg){
                return false;
            }else{
                return deleteBlg;
            }
        }catch(error:any){
        throw new Error(error.message);
        }
}
export default {
    createBlogs,
    retrieveBlogs,
    retrieveSingleBlogs,
    updateBlogs,
    removeBlogs
}
