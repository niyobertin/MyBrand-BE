import express, {Request, Response} from 'express';
import cometSercice from '../service/comet.sercice';

// //creating a coments
const createComents = async(req:Request,res:Response) => {
    try{
        const coments = await cometSercice.create_coments(req)
        res.status(201).json({
            status:201,
            message:'New coment created'
        });
    }catch(error:any){
        res.send(error.message);
    }
}

const getComentBasedOnBlogId = async(req:Request,res:Response) => {
    const coment:any = await cometSercice.fetchComents(req);
    if(coment.length < 1){
        res.status(200).json({status:200, coment:coment });
    }else{
        res.status(200).json({status:200, coment:coment })
    }
}

export default {
    createComents,
    getComentBasedOnBlogId
}