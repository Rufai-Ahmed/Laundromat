"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mainapp = void 0;
const customerRouter_1 = __importDefault(require("./router/customerRouter"));
const serviceProvider_1 = __importDefault(require("./router/serviceProvider"));
const Servicerouter_1 = __importDefault(require("./router/Servicerouter"));
const Orderrouter_1 = __importDefault(require("./router/Orderrouter"));
const Mainapp = (app) => {
    app.use("/api", serviceProvider_1.default);
    app.use("/api", customerRouter_1.default);
    app.use("/api", Servicerouter_1.default);
    app.use("/api", Orderrouter_1.default);
    app.get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "weloce to out api site",
            });
        }
        catch (error) {
            return error;
        }
    });
};
exports.Mainapp = Mainapp;
