"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("../models/user"));
const app_1 = __importDefault(require("../app"));
dotenv_1.default.config();
const request = require('supertest')(app_1.default);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(`${process.env.URL}`);
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // await mongoose.connection.close();
}));
describe("/api/v1/mybrand/users", () => {
    it("Return status 201 to indicate that new user registered", () => __awaiter(void 0, void 0, void 0, function* () {
        const users = {
            username: "berti3",
            email: "bert3@gmail.com",
            password: "ber3@4"
        };
        const existingUser = user_1.default.findOne({ $or: [{ username: users.username }, { email: users.email }, { password: users.password }] });
        if (existingUser) {
            user_1.default.deleteOne({ $or: [{ username: users.username }, { email: users.email }, { password: users.password }] });
        }
        else {
            const res = yield request.post("/api/v1/mybrand/users")
                .send(users);
            expect(res.status).toBe(201);
        }
    }));
});
