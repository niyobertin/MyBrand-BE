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
const blogService_1 = __importDefault(require("../service/blogService"));
const blogService_2 = __importDefault(require("../service/blogService"));
const joiValidation_1 = __importDefault(require("../helper/joiValidation"));
const create_blogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const valid = joiValidation_1.default.validateBlogData(req.body);
        const blogs = yield blogService_1.default.createBlogs(req);
        if (!blogs) {
            res.status(400).json({
                status: 400,
                message: (_a = valid.error) === null || _a === void 0 ? void 0 : _a.message
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'New blog created'
            });
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blogService_1.default.retrieveBlogs();
    if (blogs.length < 1) {
        res.status(404).json({ status: 404, blogs: blogs });
    }
    else {
        res.status(200).json({ status: 200, blogs: blogs });
    }
});
const getSingleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blogService_2.default.retrieveSingleBlogs(req);
    if (!blogs) {
        res.status(404).json({ status: 404, blogs: "Not Found" });
    }
    else {
        res.status(200).json({ status: 200, blogs: blogs });
    }
});
const updatedBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateBlg = yield blogService_2.default.updateBlogs(req);
        if (!updateBlg) {
            res.status(404).json({ status: 404, blogs: "Not Found" });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'Blog Updated'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
const removeBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield blogService_2.default.removeBlogs(req);
    if (deleted.deletedCount === 0) {
        res.status(404).json({ status: 404, blogs: "Not Found" });
    }
    else {
        res.status(200).json({
            status: 200,
            message: 'Blog deleted'
        });
    }
});
exports.default = {
    create_blogs,
    getAllBlogs,
    getSingleBlog,
    updatedBlogs,
    removeBlogs
};
