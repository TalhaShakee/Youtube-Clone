import connectDB from "./db/index.js";
import dotenv from "dotenv";
import expres from "express";
const app = express();
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    const PORT = process.env.PORT;
    app.listen(`${PORT || 3000}`, () => {
      console.log(`App is listening at port: ${PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed: ", err);
  });
