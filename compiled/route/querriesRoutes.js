"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = __importDefault(require("../helper/jwt"));
const querriesController_1 = __importDefault(require("../controller/querriesController"));
const querriesRoutes = express_1.default.Router();
querriesRoutes.post("/querries", querriesController_1.default.createQuerries);
querriesRoutes.get("/querries", jwt_1.default.tokenValidation, querriesController_1.default.getAllQuerries);
querriesRoutes.delete("/querries/:id", jwt_1.default.tokenValidation, querriesController_1.default.removeQuerries);
exports.default = querriesRoutes;
