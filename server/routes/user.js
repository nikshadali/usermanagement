import express from "express";
const router = express.Router();
import { getUeser, deleteUser } from "../controller/user.js";

router.get("/", getUeser);
router.delete("/:id", deleteUser);
export default router;
