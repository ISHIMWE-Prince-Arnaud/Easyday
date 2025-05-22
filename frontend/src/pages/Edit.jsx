import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import api from "../utils/axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await api.get(`/${id}`);
        const formattedDate = new Date(res.data.dueDate).toISOString().split("T")[0];
        setTask({ ...res.data, dueDate: formattedDate });
      } catch (err) {
        console.error("Error fetching task:", err);
        toast.error("Failed to fetch task.");
      } finally {
        setIsFetching(false);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: Add validation here similar to Create.jsx
    setIsLoading(true);
    try {
      await api.put(`/${id}`, task);
      toast.success("Task updated successfully!");
      navigate("/");
    } catch (err) {
      console.error("Failed to update task:", err);
      toast.error("Failed to update task.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="text-center py-20">
        <span className="loader border-t-4 border-blue-600 border-solid h-8 w-8 rounded-full animate-spin mx-auto"></span>
        <p className="mt-2 text-gray-500">Loading task...</p>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Edit Task</h2>
      <TaskForm
        task={task}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default Edit;