import { Router } from "express";
import { CreateOrder } from "../controller/orderController";

const router: Router = Router();
router.route("/create-order/:customerID").post(CreateOrder);

export default router;
