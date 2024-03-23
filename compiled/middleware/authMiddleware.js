"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authoticateAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//token validation.
const authotication = (req, res, next) => {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (accessToken) {
        jsonwebtoken_1.default.verify(accessToken, `${process.env.TOKEN_SCRET}`, (err, decode) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                req.body = decode;
                next();
            }
        });
    }
    else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
const authoticateAdmin = (req, res, next) => {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (accessToken) {
        jsonwebtoken_1.default.verify(accessToken, `${process.env.TOKEN_SCRET}`, (err, decode) => {
            if (err) {
                return res.status(401).json({ message: 'Your not admin' });
            }
            else {
                req.body = decode;
                next();
            }
        });
    }
    else {
        res.status(401).json({ message: 'Your not admin' });
    }
};
exports.authoticateAdmin = authoticateAdmin;
exports.default = authotication;
