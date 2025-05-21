import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Details = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`/tasks/${id}`);
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
    try {
      await axios.delete(`/tasks/${id}`);
      toast.success("Task deleted successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error deleting task:", err);
      toast.error("Failed to delete task.");
    }
  };

  const handleComplete = async () => {
    try {
      await axios.put(`/tasks/${id}/completed`, { completed: true });
      toast.success("Task marked as completed!");
      navigate("/");
    } catch (err) {
      console.error("Error completing task:", err);
      toast.error("Failed to mark task as completed.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
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
        {!task.completed && (
          <button
            onClick={handleComplete}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Mark as Completed
          </button>
        )}
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