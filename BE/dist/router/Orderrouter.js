"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controller/orderController");
const router = (0, express_1.Router)();
router.route("/create-order/:customerID").post(orderController_1.CreateOrder);
exports.default = router;
