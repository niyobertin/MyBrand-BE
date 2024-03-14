import dotenv, { config } from "dotenv";
import express, {Request, Response} from 'express';
import routes from "./route/index";
import db from './config/config';
dotenv.config();
db
    const app = express();
    app.use(express.json());
    app.use("/api/v1",routes);
app.listen(process.env.PORT,() =>{console.log(`Server has started on http://localhost:${process.env.PORT}...`)});



