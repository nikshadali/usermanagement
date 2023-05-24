import express from "express";
const router = express.Router();
import { getUeser, deleteUser, updateUser } from "../controller/user.js";

router.get("/", getUeser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
export default router;
