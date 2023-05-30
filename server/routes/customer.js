import express from "express";
const router = express.Router();
import { createCutomer } from "../controller/customer.js";
router.post("/", createCutomer);

export default router;
