import Joi from "joi";
// Blogs Validation
const validateBlogData = (blog:{title:String,image:String,content:String}) => {
    const blogSchema = Joi.object({
        title:Joi.string().required().min(2),
        image:Joi.object({
            mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/gif').required(),
            size: Joi.number().max(5 * 1024 * 1024).required(),
        }).required(),
        content:Joi.string().required().min(10)
    });
    return blogSchema.validate(blog)
}
//Coment validation 
const validateCommentData = (comment:{visitor:String,coment:String}) => {
    const commentSchema = Joi.object({
        visitor:Joi.string().required().min(3),
        coment:Joi.string().required().min(3)
    });
    return commentSchema.validate(comment)
}
//Querries validation
const validateQuerries = (querris:{vistor:String,message:String}) => {
    const querrisSchema = Joi.object({
        visitor:Joi.string().required().min(2),
        message:Joi.string().required().min(2)
    })
    return querrisSchema.validate(querris)
}
// Users data validation
const validateUsersData = (register:{username:String,email:String,password:string}) =>{
    const usersSchema = Joi.object({
        username:Joi.string().required().min(2),
        email:Joi.string().required().email(),
        password:Joi.string().required().min(6).max(8)
    });
    return usersSchema.validate(register);
}
//like validation 
const likesValidatin = (likes:{like:boolean}) => {
    const likesSchema = Joi.object({
        like:Joi.boolean().required()
    });
    return likesSchema.validate(likes);
}
//login validation 
const loginValidation = (login:{email:String,password:String}) => {
    const loginSchema = Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().required().min(6).max(8)
    })

   return loginSchema.validate(login)
}
export default {
    validateBlogData,
    validateCommentData,
    validateQuerries,
    validateUsersData,
    likesValidatin,
    loginValidation
};