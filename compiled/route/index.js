"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogsRoutes_1 = __importDefault(require("./blogsRoutes"));
const commentsRoute_1 = __importDefault(require("./commentsRoute"));
const likeRoute_1 = __importDefault(require("./likeRoute"));
const querriesRoutes_1 = __importDefault(require("./querriesRoutes"));
const usersRoutes_1 = __importDefault(require("./usersRoutes"));
const router = express_1.default.Router();
router.use('/blogs', blogsRoutes_1.default);
router.use("/blogs", commentsRoute_1.default);
router.use("/blogs", likeRoute_1.default);
router.use("/", querriesRoutes_1.default);
router.use("/", usersRoutes_1.default);
exports.default = router;
