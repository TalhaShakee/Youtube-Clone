import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongodb connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;

/* ************** Another method ***************************
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(`${process.env.PORT}`, () => {
      console.log(`App is listening at port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
