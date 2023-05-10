import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (err) {
    throw err;
  }
};
mongoose.connection.on("disconnect", () => {
  console.log("database disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("database connected");
});

// Middle ware
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log(process.env.MONGO);
  connect();
  console.log(`this port runing on 3000...`);
});
