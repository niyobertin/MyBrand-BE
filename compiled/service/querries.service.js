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
const querries_1 = __importDefault(require("../models/querries"));
const create_querries = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const id = { _id: req.params.id };
    const created_querriess = new querries_1.default({
        visitor: req.body.visitor,
        message: req.body.message
    });
    yield created_querriess.save();
});
const fetch_querries = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield querries_1.default.find();
    }
    catch (error) {
        throw new Error(error.message);
    }
});
const remove_querries = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield querries_1.default.deleteOne(id);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    create_querries,
    fetch_querries,
    remove_querries
};
