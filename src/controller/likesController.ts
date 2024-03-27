import  getSingleBlog  from "../service/blogService";
import User from "../models/user";
import { Request, Response } from "express";
import { createLike, dislike, getAllLikes, getSingleLike } from "../service/likeService";
export const like = async (req: Request, res: Response) => {
  const user: any = await User.findOne({email:req.body.email});
  try {
    const id = req.params.id;
    const existingLike: any = await getSingleLike(id, user._id);
    if (existingLike) {
      await dislike(existingLike._id);
      res.status(200).json({ status: "success", message: "Like removed successfully" });
    } else {
      const blog: any = await getSingleBlog.retrieveSingleBlogs(req);
      if (!blog) {
        return res.status(404).json({ status: "Error", message: "Blog not found" });
      }
      const Like = await createLike(id, user._id);
      res.status(200).json({
        status: 200,
        message: "your like was added"
      });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const getLikes = async (req: Request, res: Response) => {
    try{
        const likes: any = await getAllLikes(req.params.id);
        res.status(200).json({
            status: "success",
            likes: likes.length,
            data: likes
        })
    } catch(err: any){
        res.status(400).json({ error: err.message })
    }
}
