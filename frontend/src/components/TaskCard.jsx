import { Link } from "react-router-dom";
import { EditIcon, ViewIcon } from "lucide-react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h1 className="text-xl font-semibold">{task.title}</h1>
      <p className="text-lg text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <div className="mt-2 flex gap-2">
        <Link
          to={`/tasks/${task._id}`}
          className="text-primary"
        >
          <ViewIcon className="rotate-90" />
        </Link>
        <Link
          to={`/tasks/${task._id}/edit`}
          className="text-success"
        >
          <EditIcon />
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;