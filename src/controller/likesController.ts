import express, {Request, Response} from 'express';
import likeSercice from "../service/likeService";
import joiValidation from "../helper/joiValidation";
// //creating a coments
const createLikes = async(req:Request,res:Response) => {
    try{
        const valid = joiValidation.likesValidatin(req.body)
        const like = await likeSercice.create_likes(req)
        if(valid.error){
            res.status(400).json({
                status:400,
                message:valid.error?.message
            });
        }else{
            res.status(201).json({
                status:201,
                message:'New like created'
            });
        }
       
    }catch(error:any){
        res.send(error.message);
    }
}

const getLikesBasedOnBlogId = async(req:Request,res:Response) => {
    const likes:any = await likeSercice.fetchlikes(req);
    if(likes.length < 1){
        res.status(200).json({status:200, likes:likes })
    }else{
        res.status(200).json({status:200, likes:likes })
    }
}
const removeLikes = async(req:Request,res:Response) =>{
    const likes:any = await likeSercice.remove_likes(req);
    if(likes.deletedCount === 0){
        res.status(404).json({status:404, likes:'Not Found'})
    }else{
        res.status(200).json({status:200, likes:"Like deleted !" })
    }
}

export default {
    createLikes,
    getLikesBasedOnBlogId,
    removeLikes
}