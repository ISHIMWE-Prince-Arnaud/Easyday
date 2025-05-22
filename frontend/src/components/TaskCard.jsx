import { Link } from "react-router-dom";
import { EditIcon, CheckCircle, Circle, EyeIcon } from "lucide-react";
import { motion } from "framer-motion";

const TaskCard = ({ task }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white p-4 rounded-2xl shadow-md mb-4 transition-all"
    >
      <Link to={`/tasks/${task._id}`} className="block relative">
        {/* Status Icon */}
        <div className="absolute top-3 right-3">
          {task.completed ? (
            <CheckCircle className="text-green-600" title="Completed" />
          ) : (
            <Circle className="text-gray-400" title="Pending" />
          )}
        </div>
        <h1 className="text-xl font-semibold mb-1">{task.title}</h1>
        <p className="text-gray-600 mb-2">{task.description}</p>
        <p className="text-sm text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      </Link>

      <div className="mt-3 flex gap-3">
        <Link to={`/tasks/${task._id}`} className="text-blue-600 hover:underline" title="View Task">
          <EyeIcon />
        </Link>
        <Link to={`/tasks/${task._id}/edit`} className="text-green-600 hover:underline" title="Edit Task">
          <EditIcon />
        </Link>
      </div>
    </motion.div>
  );
};

export default TaskCard;