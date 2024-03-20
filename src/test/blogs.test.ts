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
   describe("Get all blogs",()=>{
    it("should return status 200 to indicate that  blogs obtained",async() =>{
        const response: Response = await request.get("/api/v1/blogs");
        expect(response.status).toBe(200);
    })
   })
   
   describe("Get single blog",()=>{
    it("Should return status code 200 to indicate ok for obtained single blog",async() =>{
      const response: Response = await request.get("/api/v1/blogs/65f76b6aa44b7600f4607057");
      expect(response.status).toBe(200);
    })
  })
 