import { useNavigate } from "react-router-dom";

const TaskForm = ({ task, onSubmit, onChange, isLoading }) => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded shadow-md space-y-6"
    >
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
          className="p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

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
          className="p-3 border bg-white border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

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
          className="p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
        >
          {isLoading ? "Saving..." : task._id ? "Update Task" : "Save Task"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          disabled={isLoading}
          className="w-full py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;