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
exports.ReadOrder = exports.CreateOrder = void 0;
const orderModel_1 = __importDefault(require("../Model/orderModel"));
const customerModel_1 = __importDefault(require("../Model/customerModel"));
const mongoose_1 = require("mongoose");
const CreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customerID } = req.params;
        const { service, phone, address } = req.body;
        const customer = yield customerModel_1.default.findById(customerID);
        const Order = yield orderModel_1.default.create({
            service,
            phone,
            address,
        });
        customer === null || customer === void 0 ? void 0 : customer.order.push(new mongoose_1.Types.ObjectId(Order._id));
        customer === null || customer === void 0 ? void 0 : customer.save();
        return res.status(200).json({
            message: "order created",
            data: Order,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error`,
        });
    }
});
exports.CreateOrder = CreateOrder;
const ReadOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customerID } = req.params;
        const order = yield customerModel_1.default.findById(customerID).populate({
            path: "order",
        });
        return res.status(200).json({
            message: "order created",
            data: order,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `${error.message} is the error`,
        });
    }
});
exports.ReadOrder = ReadOrder;
