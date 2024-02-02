import { connect } from "mongoose";

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
