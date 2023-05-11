import express from "express";
const router = express.Router();
import { users, login } from "../controller/auth.js";

router.post("/register", users);

router.post("/login", login);

export default router;
