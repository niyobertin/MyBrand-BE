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
const cometSercice_1 = __importDefault(require("../service/cometSercice"));
const joiValidation_1 = __importDefault(require("../helper/joiValidation"));
// //creating a comments
const createcomments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const valid = joiValidation_1.default.validatecommentsData(req.body);
        const comments = yield cometSercice_1.default.create_comments(req);
        if (comments === false) {
            res.status(400).json({
                status: 400,
                message: (_a = valid.error) === null || _a === void 0 ? void 0 : _a.message
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'New comments created'
            });
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
const getcommentsBasedOnBlogId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield cometSercice_1.default.fetchcomments(req);
    if (comments.length < 1) {
        res.status(200).json({ status: 200, comments: comments });
    }
    else {
        res.status(200).json({ status: 200, comments: comments });
    }
});
exports.default = {
    createcomments,
    getcommentsBasedOnBlogId
};
