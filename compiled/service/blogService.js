"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogs_1 = __importDefault(require("../models/blogs"));
//import joiValidation from "../middleware/authMiddleware";
const cloudinary_1 = require("../middleware/cloudinary");
//creating a blog
const createBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let blogimg;
        if (req.file) {
            blogimg = yield (0, cloudinary_1.uploadToCloud)(req.file);
        }
        else {
            blogimg = null;
        }
        const blogs = new blogs_1.default({
            title: req.body.title,
            image: blogimg,
            content: req.body.content
        });
        yield blogs.save();
        return blogs;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
//Retriving all blog
const retrieveBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield blogs_1.default.find();
    }
    catch (error) {
        throw new Error(error.message);
    }
});
//Retriving a  blog
const retrieveSingleBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield blogs_1.default.findOne(id);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
//updating a blog
const updateBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let blogimg;
        if (req.file) {
            blogimg = yield (0, cloudinary_1.uploadToCloud)(req.file);
        }
        else {
            blogimg = null;
        }
        const id = { _id: req.params.id };
        const update_blogs = yield blogs_1.default.findOne(id);
        if (!update_blogs) {
            return false;
        }
        else {
            if (req.body.title) {
                update_blogs.title = req.body.title;
            }
            if (req.body.image) {
                update_blogs.image = blogimg;
            }
            if (req.body.coment) {
                update_blogs.coment = req.body.coment;
            }
        }
        yield update_blogs.save();
        return update_blogs;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
//removing a blog
const removeBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        const deleteBlg = yield blogs_1.default.deleteOne(id);
        if (!deleteBlg) {
            return false;
        }
        else {
            return deleteBlg;
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    createBlogs,
    retrieveBlogs,
    retrieveSingleBlogs,
    updateBlogs,
    removeBlogs
};
