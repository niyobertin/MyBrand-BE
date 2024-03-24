import jsonwebtoken from 'jsonwebtoken'
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
      const response: Response = await request.get("/api/v1/blogs/65fc01ad66fefa1c47d2f93f");
      expect(response.status).toBe(200);
    })
  })

    let token:any;
  describe('Log in',() =>{
    it('Should login session successfully',async() =>{
      const loggedInUser = {
        email:"niyonkurubbertin@gmail.com",
        password:`${process.env.ADMIN_PASSWORD}`,
      };
      const response:Response = await request.post("/api/v1/mybrand/users/admin/login")
      .send(loggedInUser);
      expect(response.status).toBe(200);
      token = response.body.token;
    })
   })
   describe("/api/v1/mybrand/querries",() =>{
    it('should retrun 200 to indicate retreaving data sucessifull',async()=>{
      const res:Response = await request.get("/api/v1/mybrand/querries")
      .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200)
    })
    it('Shoul return 401 when no token provided',async() => {
      const res:Response = await request.get("/api/v1/mybrand/querries")
      expect(res.status).toBe(401)
    })
  })

  describe("/api/v1/mybrand/querries",() =>{
    it('should retrun 200',async()=>{
      const res:Response = await request.get("/api/v1/mybrand/querries")
      .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200)

    })
  })

