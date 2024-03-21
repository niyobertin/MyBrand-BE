"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = __importDefault(require("./route/index"));
const config_1 = __importDefault(require("./config/config"));
dotenv_1.default.config();
config_1.default;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/v1", index_1.default);
// app.listen(process.env.PORT,() =>{
//     console.log(`Server has started on http://localhost:${process.env.PORT}...`)
// });
exports.default = app;
