import { Request } from "express";
import Blogs from "../models/blogs";
import joiValidation from "../helper/joi.validation";

//creating a blog
const createBlogs = async (req:Request) => {
    try{
        const valid = joiValidation.validateBlogData(req.body);
        if(valid.error){
            return false;
        }else{
            const blogs = new Blogs({
                title:req.body.title,
                image:req.body.image,
                content:req.body.content
            });
            await blogs.save();
        return blogs;
        }
    }catch(err:any){
        throw new Error(err.message);
    }
}
//Retriving all blog
const retrieveBlogs = async() =>{
    try{
        return await Blogs.find();
        }catch(error:any){
        throw new Error(error.message);
        }
}
//Retriving a  blog
const retrieveSingleBlogs = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
        return await Blogs.findOne(id);
        }catch(error:any){
        throw new Error(error.message);
        }
}
//updating a blog
const updateBlogs = async(req:Request) => {
    try{
        const id = { _id: req.params.id };
        const update_blogs:any =await Blogs.findOne(id);
        if(!update_blogs){
            return false;
        }else{
            if(req.body.title){
                update_blogs.title = req.body.title
            }
            if(req.body.image){
                update_blogs.image = req.body.image
            }
            if(req.body.coment){
                update_blogs.coment = req.body.coment
            }
        }
        await update_blogs.save();
        return update_blogs;
    }catch(error:any){
        throw new Error(error.message);
    }
}
//removing a blog
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
