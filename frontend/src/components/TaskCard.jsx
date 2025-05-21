import { Link } from "react-router-dom";
import { EditIcon, CheckCircle, Circle, EyeIcon } from "lucide-react";

const TaskCard = ({ task }) => {
  return (
    <Link to={`/tasks/${task._id}`}>
      <div className="bg-white p-4 rounded shadow mb-4 relative">
        {/* Task Status Icon with Tooltip */}
        <div className="absolute top-2 right-2">
          {task.completed ? (
            <CheckCircle
              className="text-green-600"
              title="Completed"
            />
          ) : (
            <Circle
              className="text-gray-400"
              title="Pending"
            />
          )}
        </div>
        <h1 className="text-xl font-semibold">{task.title}</h1>
        <p className="text-lg text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
        <div className="mt-2 flex gap-2">
          <Link to={`/tasks/${task._id}`} className="text-primary" title="View Task">
            <EyeIcon />
          </Link>
          <Link to={`/tasks/${task._id}/edit`} className="text-success" title="Edit Task">
            <EditIcon />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;