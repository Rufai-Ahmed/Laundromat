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
exports.Readonecustomer = exports.Logincustomer = exports.Verifycustomer = exports.Createcustomer = void 0;
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const customerModel_1 = __importDefault(require("../Model/customerModel"));
const enums_1 = require("../enums");
const email_1 = require("../utils/email");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Createcustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body; //sign up as custoimer
        const OTP = crypto_1.default.randomBytes(2).toString("hex");
        const salt = yield bcrypt_1.default.genSalt(10);
        const encrypt = yield bcrypt_1.default.hash(password, salt);
        const custoimer = yield customerModel_1.default.create({
            name,
            email,
            password: encrypt,
            token: OTP,
            status: enums_1.Status.customer,
        });
        (0, email_1.verifiedEmail)(custoimer);
        return res.status(200).json({
            message: "customer created",
            data: custoimer,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error that occured`,
        });
    }
});
exports.Createcustomer = Createcustomer;
const Verifycustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body; //verify with token sent to email
        const check = yield customerModel_1.default.findOne({ token });
        if (check) {
            yield customerModel_1.default.findByIdAndUpdate(check._id, { token: "" }, { new: true });
            return res.status(200).json({
                message: "customer verified",
            });
        }
        else {
            return res.status(404).json({
                message: "token incorrect",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error that occured`,
        });
    }
});
exports.Verifycustomer = Verifycustomer;
const Logincustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body; // login with password and email
        const check = yield customerModel_1.default.findOne({ email });
        if (check) {
            const pass = yield bcrypt_1.default.compare(password, check.password);
            if (pass) {
                if (check.token === "") {
                    const login = jsonwebtoken_1.default.sign({ id: check._id, status: enums_1.Status.customer }, "JUSTASECRET", {
                        expiresIn: "5D",
                    });
                    return res.status(404).json({
                        message: "welcome to our platform ",
                        data: login,
                    });
                }
                else {
                    return res.status(404).json({
                        message: "please go and verify account",
                    });
                }
            }
            else {
                return res.status(404).json({
                    message: "password incorrect",
                });
            }
        }
        else {
            return res.status(404).json({
                message: "email dosent exist on out platform kindly sign up",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error that occured`,
        });
    }
});
exports.Logincustomer = Logincustomer;
const Readonecustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customerID } = req.body; // find by id
        const check = yield customerModel_1.default.findById(customerID);
        return res.status(200).json({
            message: "one user read successfully",
            data: check,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error that occured`,
        });
    }
});
exports.Readonecustomer = Readonecustomer;
