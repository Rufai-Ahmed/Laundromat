"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Serviceprocontroller_1 = require("../controller/Serviceprocontroller");
const router = (0, express_1.Router)();
router.route("/register-Serviceprovider").post(Serviceprocontroller_1.CreateServiceprovider);
router.route("/verify-Serviceprovider").post(Serviceprocontroller_1.VerifyServiceprovider);
router.route("/login-Serviceprovider").post(Serviceprocontroller_1.LoginServiceProvider);
router
    .route("/view-one-Serviceprovider/:ServProID")
    .get(Serviceprocontroller_1.ReadoneServiceProvider);
router.route("/view-all-Serviceprovider").get(Serviceprocontroller_1.ReadallServiceProvider);
exports.default = router;
