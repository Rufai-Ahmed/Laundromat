import { Router } from "express";
import {
  createServices,
  readoneServices,
} from "../controller/servicescontroller";

const router: Router = Router();

router.route("/create-service/:serviceproviderID").post(createServices);
router.route("/read-service/:serviceproviderID").get(readoneServices);

export default router;
