import {Router} from "express"
import { CreateServiceprovider, LoginServiceProvider, ReadallServiceProvider, ReadoneServiceProvider, UpdateserviceProvidername, VerifyServiceprovider } from "../controller/Serviceprocontroller";

const router:Router = Router()
router.route("/register-Serviceprovider").post(CreateServiceprovider );
router.route("/verify-Serviceprovider").patch(VerifyServiceprovider  );
router.route("/login-Serviceprovider").post(LoginServiceProvider  );
router.route("/view-one-Serviceprovider/:ServProID").get(ReadoneServiceProvider);
router.route("/view-all-Serviceprovider").get(ReadallServiceProvider);
router.route("/update-Serviceprovider").get(UpdateserviceProvidername);

export default router;

