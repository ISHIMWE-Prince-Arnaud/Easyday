import express from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  markTaskAsCompleted,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);

router.post("/", createTask);
router.delete("/:id", deleteTask);

router.put("/:id", updateTask);
router.put("/:id/completed", markTaskAsCompleted);

export default router;