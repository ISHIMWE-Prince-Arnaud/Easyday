import { useState } from "react";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import toast from "react-hot-toast";

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
    if (task.dueDate < new Date().toISOString().split("T")[0]) {
      toast.error("Due date cannot be in the past.");
      return;
    }
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
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Task</h2>
      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};

export default Create;