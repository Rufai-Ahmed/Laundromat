import {Router} from "express"
import { CreateServiceprovider, LoginServiceProvider, VerifyServiceprovider } from "../controller/Servicepro";

const router:Router = Router()
router.route("/register-Serviceprovider").post(CreateServiceprovider );
router.route("/verify-Serviceprovider").patch(VerifyServiceprovider  );
router.route("/login-Serviceprovider").post(LoginServiceProvider  );

export default router;

