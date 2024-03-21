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
const coments_1 = __importDefault(require("../models/coments"));
const joiValidation_1 = __importDefault(require("../helper/joiValidation"));
const create_coments = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const valid = joiValidation_1.default.validateCommentData(req.body);
    const id = { _id: req.params.id };
    if (valid.error) {
        return false;
    }
    else {
        const created_coments = new coments_1.default({
            visitor: req.body.visitor,
            coment: req.body.coment,
            blogID: id
        });
        yield created_coments.save();
    }
});
const fetchComents = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield coments_1.default.find({ blogID: id });
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    create_coments,
    fetchComents
};
