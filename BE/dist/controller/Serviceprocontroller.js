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
exports.ReadallServiceProvider = exports.ReadoneServiceProvider = exports.LoginServiceProvider = exports.VerifyServiceprovider = exports.CreateServiceprovider = void 0;
const enums_1 = require("../enums");
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const serviceProviderModel_1 = __importDefault(require("../Model/serviceProviderModel"));
const email_1 = require("../utils/email");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CreateServiceprovider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body; //sign up as service provider
        const OTP = crypto_1.default.randomBytes(2).toString("hex");
        const salt = yield bcrypt_1.default.genSalt(10);
        const encrypt = yield bcrypt_1.default.hash(password, salt);
        const serviceProvider = yield serviceProviderModel_1.default.create({
            name,
            email,
            password: encrypt,
            token: OTP,
            status: enums_1.Status.serviceProvuder,
        });
        (0, email_1.verifiedEmail)(serviceProvider);
        return res.status(200).json({
            message: "service provider created",
            data: serviceProvider,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
            message: `${error.message} is the error that occured`,
        });
    }
});
exports.CreateServiceprovider = CreateServiceprovider;
const VerifyServiceprovider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body; //verify with token sent to email
        const check = yield serviceProviderModel_1.default.findOne({ token });
        if (check) {
            yield serviceProviderModel_1.default.findByIdAndUpdate(check._id, { token: "", verified: true }, { new: true });
            return res.status(200).json({
                message: "service provider verified",
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
exports.VerifyServiceprovider = VerifyServiceprovider;
const LoginServiceProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body; // login with password and email
        const check = yield serviceProviderModel_1.default.findOne({ email });
        if (check) {
            const pass = yield bcrypt_1.default.compare(password, check.password);
            if (pass) {
                if (check.token === "") {
                    const login = jsonwebtoken_1.default.sign({ id: check._id }, "JUSTASECRET", {
                        expiresIn: "5D",
                    });
                    return res.status(200).json({
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
exports.LoginServiceProvider = LoginServiceProvider;
const ReadoneServiceProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serviceID } = req.body; // find by id
        const check = yield serviceProviderModel_1.default.findById(serviceID);
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
exports.ReadoneServiceProvider = ReadoneServiceProvider;
const ReadallServiceProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceProviders = yield serviceProviderModel_1.default.find();
        return res.status(200).json({
            message: "service provider sigfned in",
            data: serviceProviders,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error that occured`,
        });
    }
});
exports.ReadallServiceProvider = ReadallServiceProvider;
