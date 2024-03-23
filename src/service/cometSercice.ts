import { Request,Response } from "express";
import comments from "../models/comments";
import joiValidation from "../helper/joiValidation";
const create_comments = async(req:Request) => {
    const valid = joiValidation.validatecommentsData(req.body);
     const id = { _id: req.params.id };
     if(valid.error){
        return false;
     }else{
        const created_comments = new comments({
            visitor:req.body.visitor,
            comments:req.body.comments,
            blogID:id
        })
       await created_comments.save();
     }
}
const fetchcomments = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
    return await comments.find({blogID:id});
    }catch(error:any){
    throw new Error(error.message);
    }
}

export default {
    create_comments,
    fetchcomments
}