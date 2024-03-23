"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentsControler_1 = __importDefault(require("../controller/commentsControler"));
const commentsRoutes = express_1.default.Router();
//comments routes
commentsRoutes.post("/:id/comments", commentsControler_1.default.createcomments);
commentsRoutes.get("/:id/comments", commentsControler_1.default.getcommentsBasedOnBlogId);
exports.default = commentsRoutes;
