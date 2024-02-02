import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL: string = process.env.DATABASE_URL!;

export const dbConfig = () => {
  try {
    return connect(URL)
      .then(() => {
        console.log("Database Connected👌👌👌");
      })
      .catch(() => console.error());
  } catch (error) {
    return error;
  }
};
