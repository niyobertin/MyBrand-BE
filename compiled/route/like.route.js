"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likes_controller_1 = __importDefault(require("../controller/likes.controller"));
const likesRoutes = express_1.default.Router();
likesRoutes.post("/:id/likes", likes_controller_1.default.createLikes);
likesRoutes.get("/:id/likes", likes_controller_1.default.getLikesBasedOnBlogId);
likesRoutes.delete("/:id/likes/:id", likes_controller_1.default.removeLikes);
exports.default = likesRoutes;
