import express from "express";
import auth from "../middleware/auth.js";
import {
  createReminder,
  fetchReminders,
  deleteReminder,
  updateReminder,
} from "../controller/reminderMethods.js";

const router = express.Router();

router.post("/", auth, createReminder);
router.get("/", auth, fetchReminders);
router.patch("/:id", auth, updateReminder);
router.delete("/:id", auth, deleteReminder);

export default router;
