"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serviceProviderModel = new mongoose_1.Schema({
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
    services: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "services",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("serviceProvider", serviceProviderModel);
