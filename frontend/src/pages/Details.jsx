import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../utils/axios";

const Details = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  if (loading) return <p>Loading...</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-ghost btn-primary mb-2"
      >
        ← Back to Tasks
      </button>

      <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
      <p className="text-gray-700">{task.description}</p>
      <p className="text-gray-500 mt-1">
        Due: {task.dueDate && !isNaN(new Date(task.dueDate))
          ? new Date(task.dueDate).toLocaleDateString()
          : "N/A"}
      </p>
      <p className="mt-1">
        Status: {task.completed ? "✅ Completed" : "⏳ Pending"}
      </p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleToggleComplete}
          className={`${
            task.completed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"
          } text-white px-4 py-2 rounded`}
        >
          {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Details;