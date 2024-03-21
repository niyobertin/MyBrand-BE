"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comentsControler_1 = __importDefault(require("../controller/comentsControler"));
const comentRoutes = express_1.default.Router();
//coments routes
comentRoutes.post("/:id/coments", comentsControler_1.default.createComents);
comentRoutes.get("/:id/coments", comentsControler_1.default.getComentBasedOnBlogId);
exports.default = comentRoutes;
