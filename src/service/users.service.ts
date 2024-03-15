import { Request } from "express";
import * as bcrypt from "bcrypt";
import Users from "../models/user";

const users_register = async(req:Request) => {
    try{
        const {username,email,password} = req.body;
        bcrypt.hash(password,10).then((hash) => {
            const users = new Users({
                username:username,
                email:email,
                password:hash
            })
            users.save();
            return users;
        })
      
    }catch(err:any){
        throw new Error(err.message);
    }
}
const userLogin = async(req:Request) => {
    try{
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
    gettingLoggedInUser
}