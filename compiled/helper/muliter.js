"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFileFilter = exports.fileUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const exts = ['.png', '.jpg', '.jpeg', '.gif', '.tif', '.webp', '.bmp', '.tiff', '.jfif'];
const customFileFilter = (req, res, next) => {
    const file = req.file;
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    if (!exts.includes(ext)) {
        return res.status(400).json({ error: 'Invalid file type.' });
    }
    next();
};
exports.customFileFilter = customFileFilter;
const fileUpload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({}),
});
exports.fileUpload = fileUpload;
