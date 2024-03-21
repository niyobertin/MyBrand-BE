import { Request,Response } from "express";
import coments from "../models/coments";
import joiValidation from "../helper/joiValidation";
const create_coments = async(req:Request) => {
    const valid = joiValidation.validateCommentData(req.body);
     const id = { _id: req.params.id };
     if(valid.error){
        return false;
     }else{
        const created_coments = new coments({
            visitor:req.body.visitor,
            coment:req.body.coment,
            blogID:id
        })
       await created_coments.save();
     }
}
const fetchComents = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
    return await coments.find({blogID:id});
    }catch(error:any){
    throw new Error(error.message);
    }
}

export default {
    create_coments,
    fetchComents
}