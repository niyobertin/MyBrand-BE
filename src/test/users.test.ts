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
            username:"berti31",
            email:"bert34@gmail.com",
            password:"ber34@4"
        }
        const res:Response = await request.post("/api/v1/mybrand/users")
        .send(users);
        expect(res.status).toBe(201);
    })
})

