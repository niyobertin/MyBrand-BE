import express, {Request, Response} from 'express';
import cometSercice from '../service/cometSercice';
import joiValidation from "../helper/joiValidation";
// //creating a comments
const createcomments = async(req:Request,res:Response) => {
    try{
        const valid = joiValidation.validatecommentsData(req.body);
        const comments = await cometSercice.create_comments(req);
        if(comments === false){
            res.status(400).json({
                status:400,
                message:valid.error?.message
            });
        }else{
            res.status(201).json({
                status:201,
                message:'New comments created'
            });
        }
       
    }catch(error:any){
        res.send(error.message);
    }
}

const getcommentsBasedOnBlogId = async(req:Request,res:Response) => {
    const comments:any = await cometSercice.fetchcomments(req);
    if(comments.length < 1){
        res.status(200).json({status:200, comments:comments });
    }else{
        res.status(200).json({status:200, comments:comments })
    }
}

export default {
    createcomments,
    getcommentsBasedOnBlogId
}