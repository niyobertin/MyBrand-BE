import { Request,Response } from "express";
import coments from "../models/coments";
// import blog from "../models/blog";
const create_coments = async(req:Request) => {
     const id = { _id: req.params.id };
    const created_coments = new coments({
        visitor:req.body.visitor,
        coment:req.body.coment,
        blogID:id
    })
   await created_coments.save();
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