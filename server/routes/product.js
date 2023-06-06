import express from "express";
const router = express.Router();
import { createProduct, getProducts } from "../controller/product.js";
router.post("/register", createProduct);
router.get("/", getProducts);

export default router;
