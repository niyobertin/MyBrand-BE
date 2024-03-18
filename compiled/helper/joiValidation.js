"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Blogs Validation
const validateBlogData = (blog) => {
    const blogSchema = joi_1.default.object({
        title: joi_1.default.string().required().min(2),
        image: joi_1.default.object({
            mimetype: joi_1.default.string().valid('image/jpeg', 'image/png', 'image/gif').required(),
            size: joi_1.default.number().max(5 * 1024 * 1024).required(),
        }).required(),
        content: joi_1.default.string().required().min(10)
    });
    return blogSchema.validate(blog);
};
//Coment validation 
const validateCommentData = (comment) => {
    const commentSchema = joi_1.default.object({
        visitor: joi_1.default.string().required().min(3),
        coment: joi_1.default.string().required().min(3)
    });
    return commentSchema.validate(comment);
};
//Querries validation
const validateQuerries = (querris) => {
    const querrisSchema = joi_1.default.object({
        visitor: joi_1.default.string().required().min(2),
        message: joi_1.default.string().required().min(2)
    });
    return querrisSchema.validate(querris);
};
// Users data validation
const validateUsersData = (register) => {
    const usersSchema = joi_1.default.object({
        username: joi_1.default.string().required().min(2),
        email: joi_1.default.string().required().email(),
        password: joi_1.default.string().required().min(6).max(8)
    });
    return usersSchema.validate(register);
};
//like validation 
const likesValidatin = (likes) => {
    const likesSchema = joi_1.default.object({
        like: joi_1.default.boolean().required()
    });
    return likesSchema.validate(likes);
};
//login validation 
const loginValidation = (login) => {
    const loginSchema = joi_1.default.object({
        email: joi_1.default.string().required().email(),
        password: joi_1.default.string().required().min(6).max(8)
    });
    return loginSchema.validate(login);
};
exports.default = {
    validateBlogData,
    validateCommentData,
    validateQuerries,
    validateUsersData,
    likesValidatin,
    loginValidation
};
