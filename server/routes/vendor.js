import express from "express";
const router = express.Router();
import { createVendor } from "../controller/vendor.js";

router.post("/register", createVendor);

export default router;
