import dotenv from "dotenv";
import { Request } from "express";
import * as bcrypt from "bcrypt";
import Users from "../models/user";
import joiValidation from "../helper/joiValidation";
dotenv.config();
const adminRegister = async() =>{
    const adpassword = await bcrypt.hash(`${process.env.ADMIN_PASSWORD}`, 10)
    const registerd_admin = await Users.findOne({$or:[{username:process.env.ADMIN_NAME},{email:process.env.ADMIN_EMAIL}]});
    try{
        const admin = new Users({
            username:process.env.ADMIN_NAME,
            email:process.env.ADMIN_EMAIL,
            role:"admin",
            password: adpassword
        })
       if(!registerd_admin){
        admin.save()
       }else{
        return -1
       }
    }
    catch(err:any){
        throw new Error(err.message);
    }
}
adminRegister();


const users_register = async(req:Request) => {
    try{
        const valid = joiValidation.validateUsersData(req.body);
        const {username,email,password} = req.body;
        const registerd_user = await Users.findOne({$or:[{username:username},{email:email},{password:password}] });
        if(registerd_user){
            return false
        }else if(valid.error){
            return false
        }else{
            await bcrypt.hash(password,10).then((hash) => {
                const users = new Users({
                    username:username,
                    email:email, 
                    password:hash
                })
               users.save();
                return users;
            })
        }
        
    }catch(err:any){
        throw new Error(err.message);
    }
}
const userLogin = async(req:Request) => {
    try{
        const valid = joiValidation.validateUsersData(req.body);
        const {email} = req.body;
        const user:any = Users.findOne({email:email});
        if(!user){
            return false
        }else{
            return user;
        }
    }catch(err:any){
        throw new Error(err.message)
    }
}
const adminLogin = async(req:Request) => {
    try{
        const valid = joiValidation.validateUsersData(req.body);
        const {email} = req.body;
        const user:any = Users.findOne({email:email});
        if(!user){
            return false
        }else{
            return user;
        }
    }catch(err:any){
        throw new Error(err.message)
    }
}
const retrieve = async() =>{
    try{
        return await Users.find();
        }catch(error:any){
        throw new Error(error.message);
        }
}

const gettingLoggedInUser = async() => {
    try{
        const loggedIn = await Users.find();
        return loggedIn;
    }catch(error:any){
        throw new Error(error.message);
    }
}
export default {
    users_register,
    userLogin,
    adminLogin,
    gettingLoggedInUser,
    retrieve
}