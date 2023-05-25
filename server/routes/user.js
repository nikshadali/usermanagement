import express from "express";
const router = express.Router();
import {
  getUeser,
  deleteUser,
  updateUser,
  getUser,
} from "../controller/user.js";

router.get("/", getUeser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
export default router;
