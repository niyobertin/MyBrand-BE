import { sign,verify } from "jsonwebtoken";
import {  Request,Response, NextFunction} from "express";
// import user from "../models/user";
const createToken = (user:any) => {
const accessToken = sign({ email:user.email},"akarimakagasizondaatwa")
return accessToken;
}

const tokenValidation  = (req:Request,res:Response,next:NextFunction) => {
    const accessToken  = req.cookies["access-token"];
    if(!accessToken){
        return res.status(400).json({error:"⚠️ you must log in with your account first"})
    }else{
        try{
            let authenticated:any;
            const validToken = verify(accessToken,"akarimakagasizondaatwa");
            if(validToken){
                authenticated = true
                return next();
            }
        }catch(err:any){
            return res.status(400).json({error:err}); 
        }
    }
}
export default {
    createToken,
     tokenValidation
    };