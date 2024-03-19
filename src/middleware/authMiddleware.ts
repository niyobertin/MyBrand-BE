import {  Request,Response, NextFunction} from "express";
import { sign,verify } from "jsonwebtoken";
//token validation.
const authotication  = (req:Request,res:Response,next:NextFunction) => {
    const accessToken  = req.cookies["access-token"];
    if(!accessToken){
        return res.status(401).json({error:"⚠️Login first"})
    }else{
        try{
            let authenticated:any;
            const validToken = verify(accessToken,`${process.env.TOKEN_SCRET}`);
            if(validToken){
                authenticated = true
                return next();
            }
        }catch(err:any){
            return res.status(400).json({error:err}); 
        }
    }
}
export default {authotication};
