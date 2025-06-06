import { useState } from "react";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Create = () => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Parse dueDate as local date
    const [year, month, day] = task.dueDate.split("-");
    const dueDate = new Date(year, month - 1, day); // month is 0-indexed

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of today

    if (dueDate < today) {
      toast.error("Due date must be today or in the future.");
      return;
    }

    // Validate title length
    if (task.title.length < 3) {
      toast.error("Title must be at least 3 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/", task);
      toast.success("Task created successfully!");
      navigate("/");
    } catch (err) {
      console.error("Failed to create task:", err);
      toast.error("Failed to create task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Task</h2>
      <TaskForm
        task={task}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default Create;