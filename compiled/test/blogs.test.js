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
const app_1 = __importDefault(require("../app"));
dotenv_1.default.config();
const request = require('supertest')(app_1.default);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(`${process.env.URL}`);
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
describe("Get all blogs", () => {
    it("should return status 200 to indicate that  blogs obtained", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/v1/blogs");
        expect(response.status).toBe(200);
    }));
});
describe("Get single blog", () => {
    it("Should return status code 200 to indicate ok for obtained single blog", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/v1/blogs/660983fd1051d6c02d237691");
        expect(response.status).toBe(200);
    }));
});
let token;
describe('Log in', () => {
    it('Should login session successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const loggedInUser = {
            email: "niyonkurubbertin@gmail.com",
            password: `${process.env.ADMIN_PASSWORD}`,
        };
        const response = yield request.post("/api/v1/users/login")
            .send(loggedInUser);
        expect(response.status).toBe(200);
        token = response.body.token;
    }));
});
describe("/api/v1/querries", () => {
    it('should retrun 200 to indicate retreaving data sucessifull', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get("/api/v1/querries")
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
    }));
    it('Shoul return 401 when no token provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get("/api/v1/querries");
        expect(res.status).toBe(401);
    }));
});
describe("/api/v1/querries", () => {
    it('should retrun 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get("/api/v1/querries")
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
    }));
});
