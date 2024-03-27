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
exports.getAllLikes = exports.dislike = exports.getSingleLike = exports.createLike = void 0;
const like_1 = __importDefault(require("../models/like"));
const createLike = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const Like = yield like_1.default.create({
        blog: id,
        user: user,
    });
    return Like;
});
exports.createLike = createLike;
const getSingleLike = (blogId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const like = yield like_1.default.findOne({ blog: blogId, user: userId });
    return like;
});
exports.getSingleLike = getSingleLike;
const dislike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const like = yield like_1.default.findByIdAndDelete(id);
    return null;
});
exports.dislike = dislike;
const getAllLikes = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const likes = yield like_1.default.find({ blog: id });
    return likes;
});
exports.getAllLikes = getAllLikes;
