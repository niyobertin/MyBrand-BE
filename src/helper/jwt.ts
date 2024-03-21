import dotenv from "dotenv"
import { sign,verify } from "jsonwebtoken";
import {  Request,Response, NextFunction} from "express";
dotenv.config();
// import user from "../models/user";
//Creating token func
const createToken = (user:any) => {
const accessToken = sign({ email:user.email},`${process.env.TOKEN_SCRET}`,{
    expiresIn:'24h'
})
return accessToken;
}
const tokenValidation  = (req:Request,res:Response,next:NextFunction) => {
    const accessToken  = req.cookies["access-token"];
    if(!accessToken){
        return res.status(401).json({error:"⚠️Login first"})
    }else{
        try{
            let authenticated:any;
            const validToken = verify(accessToken,`${process.env.TOKEN_SCRET}`);
            console.log(validToken)
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