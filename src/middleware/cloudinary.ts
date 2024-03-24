import cloudinary from 'cloudinary';
import cloudinarys from '../config/cloudinary.config';
cloudinarys
export const uploadToCloud = async (file: Express.Multer.File) => {
  try {
    const uploadedImage = await cloudinary.v2.uploader.upload(file.path, {
      folder: 'blogsImage',
      use_filename: true,
    });
    return uploadedImage.secure_url;
  } catch (e:any) {
    throw new Error(e.message);
  }
};