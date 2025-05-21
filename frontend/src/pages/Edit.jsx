import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import api from "../utils/axios";
import toast from "react-hot-toast";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await api.get(`/${id}`);
        const formattedDate = new Date(res.data.dueDate).toISOString().split("T")[0];
        setTask({ ...res.data, dueDate: formattedDate });
      } catch (err) {
        console.error("Error fetching task:", err);
        toast.error("Failed to fetch task.");
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};

export default Edit;