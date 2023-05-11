import express from "express";
const router = express.Router();
import { getUeser } from "../controller/user.js";

router.get("/", getUeser);

export default router;
