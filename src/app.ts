import dotenv, { config } from "dotenv";
import express, { Request, Response, NextFunction } from 'express';
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
    app.use("/api/v1",routes);
    app.options('/api/v1/blogs/:id', (req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Access-Control-Allow-Origin', 'https://niyobertin.github.io');
      res.setHeader('Access-Control-Allow-Methods', 'PATCH');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
    if (require.main === module) {
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
        });
        swaggerDocs(app,port)
      }
 export default app;


