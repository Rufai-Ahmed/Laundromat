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
exports.readoneServices = exports.createServices = void 0;
const serviceModel_1 = __importDefault(require("../Model/serviceModel"));
const serviceProviderModel_1 = __importDefault(require("../Model/serviceProviderModel"));
const mongoose_1 = require("mongoose");
const createServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serviceproviderID } = req.params;
        const { service, price } = req.body;
        const find = yield serviceProviderModel_1.default.findById(serviceproviderID);
        const servic = yield serviceModel_1.default.create({
            service,
            price,
        });
        find === null || find === void 0 ? void 0 : find.services.push(new mongoose_1.Types.ObjectId(service._id));
        find === null || find === void 0 ? void 0 : find.save();
        return res.status(200).json({
            message: "services created",
            data: servic,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "service created",
        });
    }
});
exports.createServices = createServices;
const readoneServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { servicerID } = req.params;
        const service = yield serviceProviderModel_1.default
            .findOne({ servicerID })
            .populate({
            path: "services",
        });
        return res.status(200).json({
            message: "one services found",
            data: service,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error`,
        });
    }
});
exports.readoneServices = readoneServices;
