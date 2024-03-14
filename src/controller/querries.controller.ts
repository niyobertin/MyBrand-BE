import express, {Request, Response} from 'express';
import querriesService from '../service/querries.service';

const createQuerries = async(req:Request,res:Response) => {
    try{
        const querries = await querriesService.create_querries(req)
        res.status(201).json({
            status:201,
            message:'New Querry created'
        });
    }catch(error:any){
        res.send(error.message);
    }
}

const getAllQuerries = async(req:Request,res:Response) => {
    const querries:any = await querriesService.fetch_querries(req);
    if(querries.length < 1){
        res.status(404).json({status:404, querries:querries })
    }else{
        res.status(200).json({status:200, querries:querries })
    }
}

const removeQuerries = async(req:Request,res:Response) =>{
    const deletedQuerry:any = await querriesService.remove_querries(req);
    if(deletedQuerry.deletedCount === 0){
        res.status(404).json({status:404, Querry:'Not Found'})
    }else{
        res.status(200).json({status:200, Querry:"Querry deleted !" })
    }
}

export default {
    createQuerries,
    getAllQuerries,
    removeQuerries
}