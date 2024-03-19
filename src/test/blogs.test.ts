import mongoose from "mongoose";
import dotenv from "dotenv";
import { Response, SuperTest, Test } from 'supertest';
import supertest from 'supertest';
import app from "../app";
dotenv.config()
const request: SuperTest<Test> = require('supertest')(app);

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(`${process.env.URL}`);
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });
  //login valiable.
  //testing a blogs
   describe("Creating new blogs",()=>{
    it("should return status 201 to indicate that blog created",async() =>{
        const response: Response = await request.post("/api/v1/blogs");
        expect(response.status).toBe(201)
    })
   })