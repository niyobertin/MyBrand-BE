"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = require("jsonwebtoken");
dotenv_1.default.config();
// import user from "../models/user";
//Creating token func
const createToken = (user) => {
    const accessToken = (0, jsonwebtoken_1.sign)({ email: user.email, role: user.role }, `${process.env.TOKEN_SCRET}`, {
        expiresIn: '24h'
    });
    return accessToken;
};
const tokenValidation = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
        return res.status(401).json({ error: "⚠️Login first" });
    }
    else {
        try {
            let authenticated;
            const validToken = (0, jsonwebtoken_1.verify)(accessToken, `${process.env.TOKEN_SCRET}`);
            console.log(validToken);
            if (validToken) {
                authenticated = true;
                return next();
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
};
exports.default = {
    createToken,
    tokenValidation
};
