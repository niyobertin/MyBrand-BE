"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likesController_1 = __importDefault(require("../controller/likesController"));
const likesRoutes = express_1.default.Router();
likesRoutes.post("/:id/likes", likesController_1.default.createLikes);
likesRoutes.get("/:id/likes", likesController_1.default.getLikesBasedOnBlogId);
likesRoutes.delete("/:id/likes/:id", likesController_1.default.removeLikes);
exports.default = likesRoutes;
