"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderModel = new mongoose_1.Schema({
    service: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    delivered: { type: Boolean, default: false },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("order", orderModel);
