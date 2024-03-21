import mongoose from "mongoose";
import dotenv from "dotenv";
import { Response, SuperTest, Test } from 'supertest';
import app from "../app";
import User from "../models/user";
dotenv.config()
const request: SuperTest<Test> = require('supertest')(app);
beforeAll(async() => {
  User.deleteMany()
    await mongoose.connect(`${process.env.URL}`);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

describe("/api/v1/mybrand/users",() =>{
    it("Return status 201 to indicate that new user registered",async() => {
        const users = {
            username:"berti5",
            email:"bertin5@gmail.com",
            password:"ber3@4"
        }
        const res:Response = await request.post("/api/v1/mybrand/users")
        .send(users);
        expect(res.status).toBe(201);
    })
})

