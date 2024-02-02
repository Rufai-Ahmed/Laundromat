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
exports.customerEmail = exports.verifiedEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const Redirect_url = "https://developers.google.com/oauthplayground";
const clientID = "352317306312-8o19fhpo7ckccpn6i914f2vhprrp9oce.apps.googleusercontent.com";
const clientSecret = "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";
const refreshToken = "1//042JRgLkSgJZwCgYIARAAGAQSNgF-L9IrC8Tyqb-jHtJt9Q2THPO0wsPu7PbNqjzunaPTBTvKxkufyiqFxTysVCkm-OlubGvh4A";
const OAuth = new googleapis_1.google.auth.OAuth2(clientID, clientSecret, Redirect_url);
OAuth.setCredentials({ refresh_token: refreshToken });
const verifiedEmail = (serviceProvider) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = (yield OAuth.getAccessToken()).token;
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "zionakwubo@gmail.com",
                clientSecret: clientSecret,
                clientId: clientID,
                refreshToken: refreshToken,
                accessToken,
            },
        });
        const Mailer = {
            from: "School <zionakwubo@gmail.com>",
            to: serviceProvider.email,
            subject: "Account verification",
            html: " <p>welcome<p/>",
        };
        yield transporter
            .sendMail(Mailer)
            .then(() => console.log("sent"))
            .catch((error) => console.log(error));
    }
    catch (error) {
        console.error(error);
    }
});
exports.verifiedEmail = verifiedEmail;
const customerEmail = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = (yield OAuth.getAccessToken()).token;
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "zionakwubo@gmail.com",
                clientSecret: clientSecret,
                clientId: clientID,
                refreshToken: refreshToken,
                accessToken,
            },
        });
        const Mailer = {
            from: "School <zionakwubo@gmail.com>",
            to: customer.email,
            subject: "Account verification",
            html: " <p>welcome<p/>",
        };
        yield transporter
            .sendMail(Mailer)
            .then(() => console.log("sent"))
            .catch((error) => console.log(error));
    }
    catch (error) {
        console.error(error);
    }
});
exports.customerEmail = customerEmail;
