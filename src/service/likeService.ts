import Likes from "../models/like";
export const createLike = async (id: string, user: string) => {
    const Like = await Likes.create({
        blog: id,
        user: user,
    });
    return Like;
}
export const getSingleLike = async (blogId: string, userId: string) => {
    const like = await Likes.findOne({ blog: blogId, user: userId});
    return like;
}
export const dislike = async (id: string) => {
    const like = await Likes.findByIdAndDelete(id)
    return null;
}
export const getAllLikes = async (id: string) => {
    const likes = await Likes.find({ blog: id });
    return likes;
}