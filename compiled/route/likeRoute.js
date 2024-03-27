"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likesController_1 = require("../controller/likesController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const likesRoutes = express_1.default.Router();
likesRoutes.post("/:id/likes", authMiddleware_1.authotication, likesController_1.like);
likesRoutes.get("/:id/likes", likesController_1.getLikes);
exports.default = likesRoutes;
