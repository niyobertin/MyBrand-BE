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
const comments_1 = __importDefault(require("../models/comments"));
const joiValidation_1 = __importDefault(require("../helper/joiValidation"));
const create_comments = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const valid = joiValidation_1.default.validatecommentsData(req.body);
    const id = { _id: req.params.id };
    if (valid.error) {
        return false;
    }
    else {
        const created_comments = new comments_1.default({
            visitor: req.body.visitor,
            comments: req.body.comments,
            blogID: id
        });
        yield created_comments.save();
    }
});
const fetchcomments = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield comments_1.default.find({ blogID: id });
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    create_comments,
    fetchcomments
};
