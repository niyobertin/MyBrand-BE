"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cloudinary_1 = require("cloudinary");
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: 'dcunvbuuy',
    api_key: '339741265611674',
    api_secret: 'S0_d35BYXZIS6u8_yUILp-ci0Ak'
});
exports.default = cloudinary_1.v2;
