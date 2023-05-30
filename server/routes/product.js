import express from "express";
const router = express.Router();
import { createProduct } from "../controller/product.js";
router.post("/", createProduct);

export default router;
