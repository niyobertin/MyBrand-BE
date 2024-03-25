import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user";
import { Response, SuperTest, Test } from 'supertest';
import app from "../app";
dotenv.config()
const request: SuperTest<Test> = require('supertest')(app);
beforeAll(async() => {
    await mongoose.connect(`${process.env.URL}`);
  });
  afterAll(async () => {
    // await mongoose.connection.close();
  });

describe("/api/v1/mybrand/users",() =>{
    it("Return status 201 to indicate that new user registered",async() => {
        const users = {
            username:"berti3",
            email:"bert3@gmail.com",
            password:"ber3@4"
        }
        const existingUser:any =User.findOne({$or:[{username:users.username},{email:users.email},{password:users.password}]});
        if(existingUser){
          User.deleteOne({$or:[{username:users.username},{email:users.email},{password:users.password}] })
        }else{
        const res:Response = await request.post("/api/v1/mybrand/users")
       
        .send(users);
        expect(res.status).toBe(201);
        }
    })
})

