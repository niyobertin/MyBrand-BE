"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogs_routes_1 = __importDefault(require("./blogs.routes"));
const coment_route_1 = __importDefault(require("./coment.route"));
const like_route_1 = __importDefault(require("./like.route"));
const querries_routes_1 = __importDefault(require("./querries.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const router = express_1.default.Router();
router.use('/blogs', blogs_routes_1.default);
router.use("/blogs", coment_route_1.default);
router.use("/blogs", like_route_1.default);
router.use("/mybrand", querries_routes_1.default);
router.use("/mybrand", users_routes_1.default);
exports.default = router;
