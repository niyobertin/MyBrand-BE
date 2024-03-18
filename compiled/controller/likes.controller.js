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
const like_service_1 = __importDefault(require("../service/like.service"));
const joiValidation_1 = __importDefault(require("../helper/joiValidation"));
// //creating a coments
const createLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const valid = joiValidation_1.default.likesValidatin(req.body);
        const like = yield like_service_1.default.create_likes(req);
        if (valid.error) {
            res.status(400).json({
                status: 400,
                message: (_a = valid.error) === null || _a === void 0 ? void 0 : _a.message
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'New like created'
            });
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
const getLikesBasedOnBlogId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const likes = yield like_service_1.default.fetchlikes(req);
    if (likes.length < 1) {
        res.status(200).json({ status: 200, likes: likes });
    }
    else {
        res.status(200).json({ status: 200, likes: likes });
    }
});
const removeLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const likes = yield like_service_1.default.remove_likes(req);
    if (likes.deletedCount === 0) {
        res.status(404).json({ status: 404, likes: 'Not Found' });
    }
    else {
        res.status(200).json({ status: 200, likes: "Like deleted !" });
    }
});
exports.default = {
    createLikes,
    getLikesBasedOnBlogId,
    removeLikes
};
