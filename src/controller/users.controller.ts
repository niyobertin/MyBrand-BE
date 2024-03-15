import {Request,Response,NextFunction} from "express";
import userService from '../service/users.service';
import joiValidation from "../helper/joi.validation";
import Jwt from "../helper/jwt";
import bcrypt from "bcrypt"

const register = async(req:Request,res:Response) => {
    try{
        const valid = joiValidation.validateUsersData(req.body);
        const users = await userService.users_register(req)
        if(valid.error){
            res.status(400).json({
                status:400,
                message:valid.error?.message
            });
        }else{
            res.status(201).json({
                status:201,
                message:'User registtration complete !'
            });
        }
        
    }catch(error:any){
        res.send(error.message);
    }
}

const login = async(req:Request,res:Response) =>{
    try{
        const valid = joiValidation.validateUsersData(req.body);
        const {password} = req.body;
        const user = await userService.userLogin(req);
        if(!user){
            res.status(404).json({
                status:404,
                message:'User Not Found !'
            }); 
        }else{
             bcrypt.compare(password,user.password)
            .then((match) =>{
                if(!match){
                    res.status(400).json({
                        status:400,
                        message:'Bad combination of email and password!'
                    });
                }else{
                    const accessToken = Jwt.createToken(user);
                    res.cookie("access-token",accessToken,{
                        maxAge: 60 * 60 * 24 * 31 * 1000,
                        httpOnly:true,
                    })
                    res.status(200).json({
                        status:201,
                        token:accessToken
                    });
                }
            })
            
        }
    }catch(err:any){
        throw new Error(err.message);
    }
}
const userProfile = async(req:Request,res:Response) =>{
    const profile = userService.gettingLoggedInUser();
    if(!profile){
        res.status(400).json({
            status:400,
            message:'User not found'
        });
    }else{
        res.status(200).json({
            status:200,
            message:profile
        });
    }
}
export default {
    register,
    login,
    userProfile
}