"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = __importDefault(require("../helper/jwt"));
const blogsController_1 = __importDefault(require("../controller/blogsController"));
const muliter_1 = require("../helper/muliter");
const blogsRoutes = express_1.default.Router();
blogsRoutes.post('/', muliter_1.fileUpload.single('image'), muliter_1.customFileFilter, jwt_1.default.tokenValidation, blogsController_1.default.create_blogs);
blogsRoutes.get('/', blogsController_1.default.getAllBlogs);
blogsRoutes.get('/:id', blogsController_1.default.getSingleBlog);
blogsRoutes.patch('/:id', muliter_1.fileUpload.single('image'), muliter_1.customFileFilter, jwt_1.default.tokenValidation, blogsController_1.default.updatedBlogs);
blogsRoutes.delete('/:id', jwt_1.default.tokenValidation, blogsController_1.default.removeBlogs);
exports.default = blogsRoutes;
