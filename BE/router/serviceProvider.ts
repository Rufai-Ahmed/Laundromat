import { Router } from "express";
import {
  CreateServiceprovider,
  LoginServiceProvider,
  ReadallServiceProvider,
  ReadoneServiceProvider,
  VerifyServiceprovider,
} from "../controller/Serviceprocontroller";

const router: Router = Router();
router.route("/register-Serviceprovider").post(CreateServiceprovider);
router.route("/verify-Serviceprovider").post(VerifyServiceprovider);
router.route("/login-Serviceprovider").post(LoginServiceProvider);
router
  .route("/view-one-Serviceprovider/:ServProID")
  .get(ReadoneServiceProvider);
router.route("/view-all-Serviceprovider").get(ReadallServiceProvider);

export default router;
