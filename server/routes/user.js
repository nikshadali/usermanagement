import express from "express";
const router = express.Router();
import { users } from "../controller/user.js";
router.post("/", users);

export default router;
