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
exports.getLikes = exports.like = void 0;
const blogService_1 = __importDefault(require("../service/blogService"));
const user_1 = __importDefault(require("../models/user"));
const likeService_1 = require("../service/likeService");
const like = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ email: req.body.email });
    try {
        const id = req.params.id;
        const existingLike = yield (0, likeService_1.getSingleLike)(id, user._id);
        if (existingLike) {
            yield (0, likeService_1.dislike)(existingLike._id);
            res.status(200).json({ status: "success", message: "Like removed successfully" });
        }
        else {
            const blog = yield blogService_1.default.retrieveSingleBlogs(req);
            if (!blog) {
                return res.status(404).json({ status: "Error", message: "Blog not found" });
            }
            const Like = yield (0, likeService_1.createLike)(id, user._id);
            res.status(200).json({
                status: 200,
                message: "your like was added"
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.like = like;
const getLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const likes = yield (0, likeService_1.getAllLikes)(req.params.id);
        res.status(200).json({
            status: "success",
            likes: likes.length,
            data: likes
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.getLikes = getLikes;
