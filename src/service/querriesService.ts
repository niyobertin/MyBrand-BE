import { Request,Response } from "express";
import querries from "../models/querries";
import joiValidation from "../helper/joiValidation";
const create_querries = async(req:Request) => {
    const valid = joiValidation.validateQuerries(req.body);
     const id = { _id: req.params.id };
     if(valid.error){
        return false
     }else{
        const created_querriess = new querries({
            visitor:req.body.visitor,
            message:req.body.message
        })
       await created_querriess.save();
     }
}
const fetch_querries = async(req:Request) =>{
    try{
    return await querries.find();
    }catch(error:any){
    throw new Error(error.message);
    }
}
const remove_querries = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
    return await querries.deleteOne(id);
    }catch(error:any){
    throw new Error(error.message);
    }
}

export default {
    create_querries,
    fetch_querries,
    remove_querries
}