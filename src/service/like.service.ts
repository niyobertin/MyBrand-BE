import { Request,Response } from "express";
import likes from "../models/like"
import joiValidation from "../helper/joi.validation";
const create_likes = async(req:Request) => {
    const valid = joiValidation.likesValidatin(req.body);
     const id = { _id: req.params.id };
     if(valid.error){
        return false
     }else{
        const created_likes = new likes({
            like:req.body.like,
            blogID:id
        })
       await created_likes.save();
     } 
}
const fetchlikes = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
    return await likes.find({blogID:id});
    }catch(error:any){
    throw new Error(error.message);
    }
}
const remove_likes = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
        //const LikeId = { _id: req.params.id };
    return await likes.deleteOne(id);
    }catch(error:any){
    throw new Error(error.message);
    }
}

export default {
    create_likes,
    fetchlikes,
    remove_likes
}