"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = __importDefault(require("../helper/jwt"));
const usersController_1 = __importDefault(require("../controller/usersController"));
const usersRoutes = express_1.default.Router();
usersRoutes.post("/users", usersController_1.default.register);
usersRoutes.post("/users/login", usersController_1.default.login);
usersRoutes.get("/users", jwt_1.default.tokenValidation, usersController_1.default.allusers);
exports.default = usersRoutes;
