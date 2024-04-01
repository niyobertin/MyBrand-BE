"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const blogsController_1 = __importDefault(require("../controller/blogsController"));
const muliter_1 = require("../helper/muliter");
const blogsRoutes = express_1.default.Router();
blogsRoutes.post('/', authMiddleware_1.authotication, authMiddleware_1.authoticateAdmin, muliter_1.fileUpload.single('image'), muliter_1.customFileFilter, blogsController_1.default.create_blogs);
blogsRoutes.get('/', blogsController_1.default.getAllBlogs);
blogsRoutes.get('/:id', blogsController_1.default.getSingleBlog);
blogsRoutes.put('/:id', authMiddleware_1.authotication, authMiddleware_1.authoticateAdmin, muliter_1.fileUpload.single('image'), blogsController_1.default.updatedBlogs);
blogsRoutes.delete('/:id', authMiddleware_1.authotication, authMiddleware_1.authoticateAdmin, blogsController_1.default.removeBlogs);
exports.default = blogsRoutes;
