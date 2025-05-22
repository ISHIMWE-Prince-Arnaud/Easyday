import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EditIcon, CheckCircle, Circle, EyeIcon } from "lucide-react";
import { motion } from "framer-motion";

const TaskCard = ({ task }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const due = new Date(task.dueDate);
      let diff = due - now;

      if (diff <= 0) {
        clearInterval(interval);
        setExpired(true);
        setTimeLeft("⏰ Time's up!");
        alert(`Time's up for "${task.title}"`);
      } else {
        // Total seconds
        let totalSeconds = Math.floor(diff / 1000);

        const months = Math.floor(totalSeconds / (60 * 60 * 24 * 30));
        totalSeconds %= (60 * 60 * 24 * 30);

        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        totalSeconds %= (60 * 60 * 24);

        const hours = Math.floor(totalSeconds / (60 * 60));

        const coloredParts = [];
        if (months > 0) {
          coloredParts.push(`<span class="text-red-600 font-bold">${months}m</span>`);
        }
        if (days > 0) {
          coloredParts.push(`<span class="text-green-600 font-bold">${days}d</span>`);
        }
        if (hours > 0) {
          coloredParts.push(`<span class="text-blue-600 font-bold">${hours}h</span>`);
        }

        setTimeLeft(`⏳ ${coloredParts.join(" ")}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [task.dueDate, task.title]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white p-4 rounded-2xl shadow-md mb-4 transition-all relative"
    >
      <Link to={`/tasks/${task._id}`} className="block">
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
          Due: {new Date(task.dueDate).toLocaleString()}
        </p>
        {!task.completed && (
          <p
            className={`text-md mt-1 ${expired ? "text-red-600 font-medium" : ""}`}
            dangerouslySetInnerHTML={{ __html: `Time Left: ${timeLeft}` }}
          />
        )}
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