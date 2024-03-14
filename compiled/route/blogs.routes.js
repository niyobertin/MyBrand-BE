"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogs_controller_1 = __importDefault(require("../controller/blogs.controller"));
const blogsRoutes = express_1.default.Router();
blogsRoutes.post('/', blogs_controller_1.default.create_blogs);
blogsRoutes.get('/', blogs_controller_1.default.getAllBlogs);
blogsRoutes.get('/:id', blogs_controller_1.default.getSingleBlog);
blogsRoutes.patch('/:id', blogs_controller_1.default.updatedBlogs);
blogsRoutes.delete('/:id', blogs_controller_1.default.removeBlogs);
exports.default = blogsRoutes;
