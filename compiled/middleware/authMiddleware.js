"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authoticateAdmin = exports.authotication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//token validation.
const authotication = (req, res, next) => {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (accessToken) {
        jsonwebtoken_1.default.verify(accessToken, `${process.env.TOKEN_SCRET}`, (err, user) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                req.body = user;
                next();
            }
        });
    }
    else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.authotication = authotication;
const authoticateAdmin = (req, res, next) => {
    if (req.body && req.body.role === 'admin') {
        next();
    }
    else {
        res.status(401).json({ message: 'Your not admin' });
    }
};
exports.authoticateAdmin = authoticateAdmin;
