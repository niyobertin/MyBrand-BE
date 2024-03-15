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
const comet_sercice_1 = __importDefault(require("../service/comet.sercice"));
const joi_validation_1 = __importDefault(require("../helper/joi.validation"));
// //creating a coments
const createComents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const valid = joi_validation_1.default.validateCommentData(req.body);
        const coments = yield comet_sercice_1.default.create_coments(req);
        if (valid.error) {
            res.status(400).json({
                status: 400,
                message: (_a = valid.error) === null || _a === void 0 ? void 0 : _a.message
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'New coment created'
            });
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
const getComentBasedOnBlogId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const coment = yield comet_sercice_1.default.fetchComents(req);
    if (coment.length < 1) {
        res.status(200).json({ status: 200, coment: coment });
    }
    else {
        res.status(200).json({ status: 200, coment: coment });
    }
});
exports.default = {
    createComents,
    getComentBasedOnBlogId
};
