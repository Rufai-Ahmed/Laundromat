import { Router } from "express";
import {
  Createcustomer,
  Verifycustomer,
  Logincustomer,
  Readonecustomer,
} from "../controller/Customercontroller";

const router: Router = Router();
router.route("/register-customer").post(Createcustomer);
router.route("/verify-customer").post(Verifycustomer);
router.route("/login-customer").post(Logincustomer);
router.route("/read-one-customer/:ctmID").get(Readonecustomer);

export default router;
