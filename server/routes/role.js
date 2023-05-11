import express from "express";
const router = express.Router();
import { roleCreate } from "../controller/role.js";

router.post("/register", roleCreate);

export default router;
