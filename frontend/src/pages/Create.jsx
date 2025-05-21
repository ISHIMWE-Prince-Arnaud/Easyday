import { useState } from "react";
import TaskForm from "../components/TaskForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/tasks", task);
      navigate("/");
    } catch (err) {
      console.error("Failed to create task:", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default Create;