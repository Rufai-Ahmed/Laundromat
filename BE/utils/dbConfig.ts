import { connect } from "mongoose";

const URL: string =
  "mongodb+srv://chidubem123:chidubem123@cluster0.cnqrjok.mongodb.net/spinCONNECTDB?retryWrites=true&w=majority";

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
