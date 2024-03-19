import dotenv, { config } from "dotenv";
import express, {Request, Response} from 'express';
import cookieParser from "cookie-parser";
import routes from "./route/index";
import db from './config/config';
dotenv.config();
db
    const app = express();
    app.use(express.json());
    app.use(cookieParser())
    app.use("/api/v1",routes);
app.listen(process.env.PORT,() =>{console.log(`Server has started on http://localhost:${process.env.PORT}...`)});
 export default app;


