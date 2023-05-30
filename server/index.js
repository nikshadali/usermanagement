import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import roleRouer from "./routes/role.js";
import userRouter from "./routes/user.js";
import customerRouter from "./routes/customer.js";
import productRouter from "./routes/product.js";
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
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/role", roleRouer);
app.use("/api/user", userRouter);
app.use("/api/customer", customerRouter);
app.use("/api/product", productRouter);

//Handle Error
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "something going worg";
  return res.status(errStatus).json({
    success: false,
    errorStatus: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});
app.listen(8800, () => {
  console.log(process.env.MONGO);
  connect();
  console.log(`this port runing on 3000...`);
});
