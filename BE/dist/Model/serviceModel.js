"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serviceModel = new mongoose_1.Schema({
    service: {
        type: String,
    },
    price: {
        type: Number,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("services", serviceModel);
