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
  describe("/api/v1/blogs/:id/comment",() => {
    try{
    it("Should retrun stutas 201 to indicate that new comment added",async() => {
        const comments = {
            visitor:"Niyonkuru",
            coment:"blessed content or user",
          };
        const res:Response =await request.post("/api/v1/blogs/65f9b80b46b4681aa413adb5/coments")
        .send(comments)
        expect(res.status).toBe(201);
    })
        }catch(err:any){
            throw new Error(err.message);
        }
  });
describe("/api/v1/blogs/65f9b80b46b4681aa413adb5/coments",() => {
    try{
        it("Should return status code 200 to indicate ok",async() => {
            const res:Response =await request.get("/api/v1/blogs/65f9b80b46b4681aa413adb5/coments");
            expect(res.status).toBe(200)
        })   
    }catch(err:any){
        throw new Error(err.message);
    }
})
describe("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes",() => {
    try{
    it("Should retrun stutas 201 to indicate that new like added",async() => {
        const likes = { like:true };
        const res:Response =await request.post("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes")
        .send(likes)
        expect({likes:true})
        expect(res.status).toBe(201);
    })
        }catch(err:any){
            throw new Error(err.message);
        }
  });
  describe("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes",() => {
    try{
        it("Should return status code 200 to indicate ok",async() => {
            const res:Response =await request.get("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes");
            expect(res.status).toBe(200)
        })   
    }catch(err:any){
        throw new Error(err.message);
    }
})
   