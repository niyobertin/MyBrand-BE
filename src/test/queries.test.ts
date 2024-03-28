import mongoose from "mongoose";
import dotenv from "dotenv";
import querries from "../models/querries";
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
  
  let token:any;
  describe('Log in',() =>{
    it('Should login session successfully',async() =>{
      const loggedInUser = {
        email:"niyonkurubbertin@gmail.com",
        password:`${process.env.ADMIN_PASSWORD}`,
      };
      const response:Response = await request.post("/api/v1/users/login")
      .send(loggedInUser);
      expect(response.status).toBe(200);
      token = response.body.token;
    })
   })

describe("Creating new queries",() => {
  it("Should retrun status code to 201 to idnicate that new query created",async() =>{
  const query = {
    visitor:"iradukunda jean",
    message:"we need to talk to you"
  }
  const existingQuerry:any = querries.findOne({$or:[{visitor:query.visitor},{message:query.message}]});
  if(existingQuerry){
    querries.deleteOne({$or:[{visitor:query.visitor},{message:query.message}]})
  }else{
    const response: Response = await request.post("/api/v1/querries")
    .send(query);
    expect(response.status).toBe(201);
  }
  
  })
}) 
  