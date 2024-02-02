import { Application, Request, Response } from "express";
import customer from "./router/customerRouter";
import servicepro from "./router/serviceProvider";
import service from "./router/Servicerouter";

export const Mainapp = (app: Application) => {
  app.use("/api", servicepro);
  app.use("/api", customer);
  app.use("/api", service);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "weloce to out api site",
      });
    } catch (error) {
      return error;
    }
  });
};
