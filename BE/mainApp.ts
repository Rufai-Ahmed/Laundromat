import { Application, Request, Response } from "express";
// import customer from "./router/customerRouter";
import service from "./router/serviceProvider";
import customer from "./router/customerRouter";

export const Mainapp = (app: Application) => {
  app.use("/api", service);
  app.use("/api", customer);

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
