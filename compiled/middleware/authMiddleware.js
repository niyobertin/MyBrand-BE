"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
//token validation.
const authotication = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
        return res.status(401).json({ error: "⚠️Login first" });
    }
    else {
        try {
            let authenticated;
            const validToken = (0, jsonwebtoken_1.verify)(accessToken, `${process.env.TOKEN_SCRET}`);
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
exports.default = { authotication };
