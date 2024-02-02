"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicescontroller_1 = require("../controller/servicescontroller");
const router = (0, express_1.Router)();
router.route("/create-service/:serviceproviderID").post(servicescontroller_1.createServices);
router.route("/read-service/:serviceproviderID").get(servicescontroller_1.readoneServices);
exports.default = router;
