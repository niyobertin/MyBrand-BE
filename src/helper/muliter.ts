import { Request, Response, NextFunction } from 'express';
import multer, { Multer } from 'multer';
import path from 'path';

const exts = ['.png', '.jpg', '.jpeg', '.gif', '.tif', '.webp', '.bmp', '.tiff', '.jfif'];

const customFileFilter = (req: Request, res: Response, next: NextFunction) => {
try{
    const file = req.file as Express.Multer.File;  
    if(file === undefined){
      res.status(400).json({
        Message:"Please Upload the image"
       })
    }else{
      const ext = path.extname(file.originalname).toLowerCase();
      if (!exts.includes(ext)) {
        return res.status(400).json({ error: 'Invalid file type.' });
      }
      next();
    }
  }catch(error:any){ 
  res.status(400).json({
  Message:error.message
 })
}
};

const fileUpload: Multer = multer({
  storage: multer.diskStorage({}),
});

export { fileUpload, customFileFilter };