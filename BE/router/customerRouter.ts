import {Router} from "express";
import {Createcustomer, Verifycustomer, Logincustomer, Readonecustomer, } from "../controller/Customercontroller"

const router:Router = Router();
;
router.route("/register-customer").post(Createcustomer)
router.route("/verify-customer").patch(Createcustomer);
router.route("/login-customer").post(Createcustomer);
router.route("/read-one-customer").get(Createcustomer);

export default router;                                                                                                                          