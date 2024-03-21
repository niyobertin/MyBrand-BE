import dotev from 'dotenv';
import mongoose from "mongoose";
dotev.config();
//Connect to MongoDb
export default mongoose.connect(`${process.env.URL}`)

