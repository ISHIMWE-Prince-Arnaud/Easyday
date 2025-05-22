import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../utils/axios";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/LoadingSpinner";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await api.get(`/${id}`);
        setTask(res.data);
      } catch (err) {
        console.error("Error fetching task:", err);
        toast.error("Failed to load task details.");
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await api.delete(`/${id}`);
      toast.success("Task deleted successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error deleting task:", err);
      toast.error("Failed to delete task.");
    }
  };

  const handleToggleComplete = async () => {
    try {
      const updatedStatus = !task.completed;
      const res = await api.put(`/${id}/completed`, { completed: updatedStatus });
      setTask(res.data);
      toast.success(`Marked as ${updatedStatus ? "completed" : "incomplete"}`);
    } catch (err) {
      console.error("Error toggling completion:", err);
      toast.error("Failed to update task status.");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <LoadingSpinner /> 
      </div>
    );
  }

  if (!task) {
    return <p className="text-center text-red-500 mt-10">Task not found.</p>;
  }

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow max-w-xl mx-auto mt-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="text-blue-600 hover:underline font-medium mb-4"
      >
        ← Back to Tasks
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-2">{task.title}</h2>
      <p className="text-gray-700 mb-3">{task.description}</p>
      <p className="text-sm text-gray-500 mb-1">
        Due:{" "}
        {task.dueDate && !isNaN(new Date(task.dueDate))
          ? new Date(task.dueDate).toLocaleDateString()
          : "N/A"}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        Status:{" "}
        <span className={task.completed ? "text-green-600" : "text-yellow-500"}>
          {task.completed ? "✅ Completed" : "⏳ Pending"}
        </span>
      </p>

      <div className="flex gap-3">
        <motion.button
          onClick={handleToggleComplete}
          whileTap={{ scale: 0.95 }}
          className={`flex-1 px-4 py-2 rounded-lg text-white transition ${
            task.completed
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
        </motion.button>
        <motion.button
          onClick={handleDelete}
          whileTap={{ scale: 0.95 }}
          className="flex-1 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Details;