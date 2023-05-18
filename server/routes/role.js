import express from "express";
const router = express.Router();
import { roleCreate, getRoles } from "../controller/role.js";

router.post("/register", roleCreate);

router.get("/", getRoles);

export default router;
