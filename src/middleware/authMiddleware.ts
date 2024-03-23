import {  Request,Response, NextFunction} from "express";
import jwt,{ sign,verify } from "jsonwebtoken";
//token validation.
const authotication  = (req:Request,res:Response,next:NextFunction) => {
    const accessToken  = req.headers.authorization?.split(' ')[1];
    if(accessToken){
        jwt.verify(accessToken,`${process.env.TOKEN_SCRET}`,(err:any,decode:any) =>{
            if(err){
                return res.status(401).json({ message: 'Unauthorized' });
            }else{
                req.body = decode
                next()
            }
        })
    }else{
        res.status(401).json({ message: 'Unauthorized' });  
    }
}
export const authoticateAdmin  = (req:Request,res:Response,next:NextFunction) => {
    const accessToken  = req.headers.authorization?.split(' ')[1];
    if(accessToken){
        jwt.verify(accessToken,`${process.env.TOKEN_SCRET}`,(err:any,decode:any) =>{
            if(err){
                return res.status(401).json({ message: 'Your not admin' });
            }else{
                req.body = decode
                next()
            }
        })
    }else{
        res.status(401).json({ message: 'Your not admin' });  
    }
}
export default authotication;
