"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const Storage = multer_1.default.diskStorage({
    destination: "../uploads/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.filename}_${Date.now()}${path_1.default.extname(file.originalname)}`);
    }
});
const upload = (0, multer_1.default)({
    storage: Storage
}).single('blogImage');
exports.default = {
    upload
};
