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

describe("Creating new queries",() => {
  const query = {
    visitor:"iradukunda jean",
    message:"we need to talk to you"
  }
  it("Should retrun status code to 201 to idnicate that new query created",async() =>{
    const response: Response = await request.post("/api/v1/mybrand/querries")
    .send(query);
    expect(response.status).toBe(201);
  })
}) 
  