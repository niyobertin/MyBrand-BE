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
describe("/api/v1/blogs/:id/comments", () => {
    try {
        it("Should retrun stutas 201 to indicate that new comments added", () => __awaiter(void 0, void 0, void 0, function* () {
            const comments = {
                visitor: "Niyonkuru",
                comments: "blessed content or user",
            };
            const res = yield request.post("/api/v1/blogs/65f9b80b46b4681aa413adb5/comments")
                .send(comments);
            expect(res.status).toBe(201);
        }));
    }
    catch (err) {
        throw new Error(err.message);
    }
});
describe("/api/v1/blogs/65f9b80b46b4681aa413adb5/comments", () => {
    try {
        it("Should return status code 200 to indicate ok", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get("/api/v1/blogs/65f9b80b46b4681aa413adb5/comments");
            expect(res.status).toBe(200);
        }));
    }
    catch (err) {
        throw new Error(err.message);
    }
});
describe("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes", () => {
    try {
        it("Should retrun stutas 201 to indicate that new like added", () => __awaiter(void 0, void 0, void 0, function* () {
            const likes = { like: true };
            const res = yield request.post("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes")
                .send(likes);
            expect({ likes: true });
            expect(res.status).toBe(201);
        }));
    }
    catch (err) {
        throw new Error(err.message);
    }
});
describe("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes", () => {
    try {
        it("Should return status code 200 to indicate ok", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get("/api/v1/blogs/65f9b80b46b4681aa413adb5/likes");
            expect(res.status).toBe(200);
        }));
    }
    catch (err) {
        throw new Error(err.message);
    }
});
