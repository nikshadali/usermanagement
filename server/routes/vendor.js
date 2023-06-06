import express from "express";
const router = express.Router();
import { createVendor, getVendors } from "../controller/vendor.js";

router.post("/register", createVendor);
router.get("/", getVendors);
export default router;
