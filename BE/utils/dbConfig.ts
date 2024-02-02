import { connect } from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/spinConnectDB";

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
