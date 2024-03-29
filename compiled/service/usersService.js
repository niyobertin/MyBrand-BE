"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt = __importStar(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const joiValidation_1 = __importDefault(require("../helper/joiValidation"));
dotenv_1.default.config();
const adminRegister = () => __awaiter(void 0, void 0, void 0, function* () {
    const adpassword = yield bcrypt.hash(`${process.env.ADMIN_PASSWORD}`, 10);
    const registerd_admin = yield user_1.default.findOne({ $or: [{ username: process.env.ADMIN_NAME }, { email: process.env.ADMIN_EMAIL }] });
    try {
        const admin = new user_1.default({
            username: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            role: "admin",
            password: adpassword
        });
        if (!registerd_admin) {
            admin.save();
        }
        else {
            return -1;
        }
    }
    catch (err) {
        throw new Error(err.message);
    }
});
adminRegister();
const users_register = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = joiValidation_1.default.validateUsersData(req.body);
        const { username, email, password } = req.body;
        const registerd_user = yield user_1.default.findOne({ $or: [{ username }, { email }, { password }] });
        if (registerd_user) {
            return false;
        }
        else if (valid.error) {
            return false;
        }
        else {
            yield bcrypt.hash(password, 10).then((hash) => {
                const users = new user_1.default({
                    username,
                    email,
                    password: hash
                });
                users.save();
                return users;
            });
        }
    }
    catch (err) {
        throw new Error(err.message);
    }
});
const userLogin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = joiValidation_1.default.validateUsersData(req.body);
        const { email } = req.body;
        const user = user_1.default.findOne({ email: email });
        if (!user) {
            return false;
        }
        else {
            return user;
        }
    }
    catch (err) {
        throw new Error(err.message);
    }
});
const retrieve = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.default.find();
    }
    catch (error) {
        throw new Error(error.message);
    }
});
const gettingLoggedInUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loggedIn = yield user_1.default.find();
        return loggedIn;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    users_register,
    userLogin,
    gettingLoggedInUser,
    retrieve
};
