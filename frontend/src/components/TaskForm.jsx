import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TaskForm = ({ task, onSubmit, onChange, isLoading }) => {
  const navigate = useNavigate();

  return (
    <motion.form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Title */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={onChange}
          disabled={isLoading}
          placeholder="Enter task title"
          className="p-3 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={onChange}
          disabled={isLoading}
          placeholder="Enter task description"
          rows="4"
          className="p-3 border bg-white border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Due Date */}
      <div className="flex flex-col">
        <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={task.dueDate}
          onChange={onChange}
          disabled={isLoading}
          className="p-3 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 disabled:opacity-50"
        >
          {isLoading ? "Saving..." : task._id ? "Update Task" : "Save Task"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          disabled={isLoading}
          className="w-full py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </motion.form>
  );
};

export default TaskForm;