import mongoose from "mongoose";
import dotenv from "dotenv";
import { Response, SuperTest, Test } from 'supertest';
import app from "../app";
dotenv.config()
const request: SuperTest<Test> = require('supertest')(app);
beforeAll(async() => {
    await mongoose.connect(`${process.env.URL}`);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

describe("/api/v1/mybrand/users",() =>{
    it("Return status 201 to indicate that new user registered",async() => {
        const users = {
            username:"bertin_5",
            email:"bertin50@gmail.com",
            password:"ber3@3"
        }
        const res:Response = await request.post("/api/v1/mybrand/users")
        .send(users);
        expect(res.status).toBe(201);
    })
})
describe('Log in',() =>{
    it('Should login session successfully',async() =>{
      const loggedInUser = {
        email:"niyonkurubbertin@gmail.com",
        password:"bertin12",
      };
      const response:Response = await request.post("/api/v1/mybrand/users/login")
      .send(loggedInUser);
      expect(response.status).toBe(200);
    })
   })