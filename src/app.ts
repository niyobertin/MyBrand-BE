import dotenv, { config } from "dotenv";
import express, {Request, Response} from 'express';
import cors from 'cors'
import cookieParser from "cookie-parser";
import routes from "./route/index";
import db from './config/config';
import swaggerDocs from "./swagger";
dotenv.config();
db
    const app = express();
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
  });
    app.use("/api/v1",routes);
    if (require.main === module) {
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
        });
        swaggerDocs(app,port)
      }
 export default app;


