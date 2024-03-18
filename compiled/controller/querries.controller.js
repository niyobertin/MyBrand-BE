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
const querries_service_1 = __importDefault(require("../service/querries.service"));
const joiValidation_1 = __importDefault(require("../helper/joiValidation"));
const createQuerries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const valid = joiValidation_1.default.validateQuerries(req.body);
        const querries = yield querries_service_1.default.create_querries(req);
        if (valid.error) {
            res.status(400).json({
                status: 400,
                message: (_a = valid.error) === null || _a === void 0 ? void 0 : _a.message
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'New Querry created'
            });
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
const getAllQuerries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const querries = yield querries_service_1.default.fetch_querries(req);
    if (querries.length < 1) {
        res.status(404).json({ status: 404, querries: querries });
    }
    else {
        res.status(200).json({ status: 200, querries: querries });
    }
});
const removeQuerries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedQuerry = yield querries_service_1.default.remove_querries(req);
    if (deletedQuerry.deletedCount === 0) {
        res.status(404).json({ status: 404, Querry: 'Not Found' });
    }
    else {
        res.status(200).json({ status: 200, Querry: "Querry deleted !" });
    }
});
exports.default = {
    createQuerries,
    getAllQuerries,
    removeQuerries
};
