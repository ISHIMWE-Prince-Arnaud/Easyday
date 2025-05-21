import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`/tasks/${id}`);
        const formattedDate = new Date(res.data.dueDate).toISOString().split("T")[0];
        setTask({ ...res.data, dueDate: formattedDate });
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/tasks/${id}`, task);
      navigate("/");
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default Edit;