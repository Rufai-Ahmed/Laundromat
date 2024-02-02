import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConfig } from "./utils/dbConfig";
dotenv.config();
import { Mainapp } from "./Mainapp";

const app: Application = express();
const port: number = 7776;

app.use(cors({ origin: process.env.APP_URL }));
app.use(express.json());

Mainapp(app);
const server = app.listen(port, () => {
  console.log("server is actice");
  dbConfig();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
