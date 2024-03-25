import dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary';
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLUDE_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SCRET,
});
export default cloudinary

          