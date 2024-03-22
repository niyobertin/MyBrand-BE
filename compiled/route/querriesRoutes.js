"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const querriesController_1 = __importDefault(require("../controller/querriesController"));
const querriesRoutes = express_1.default.Router();
querriesRoutes.post("/querries", querriesController_1.default.createQuerries);
querriesRoutes.get("/querries", authMiddleware_1.default, querriesController_1.default.getAllQuerries);
querriesRoutes.delete("/querries/:id", authMiddleware_1.default, querriesController_1.default.removeQuerries);
exports.default = querriesRoutes;
