"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const customerModel = new mongoose_1.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
    },
    order: [{
            type: mongoose_1.Types.ObjectId,
            ref: "order"
        }],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("customers", customerModel);
