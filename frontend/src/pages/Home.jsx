import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TASKS_PER_PAGE = 4;

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async (currentPage) => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:3715/tasks?page=${currentPage}&limit=${TASKS_PER_PAGE}`);
      setTasks(res.data.tasks);
      setTotalPages(Math.ceil(res.data.total / TASKS_PER_PAGE));
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">All Tasks</h2>
      {tasks.length === 0 ? (
        <motion.div
          className="bg-white shadow-md hover:shadow-xl md:w-1/2 transition-all p-6 rounded-xl flex flex-col items-center justify-center mx-auto"
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Tasks Found</h3>
          <p className="text-gray-500 mb-4">Looks like you haven’t added any tasks yet.</p>
          <Link
            to="/tasks/create"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Create Your First Task
          </Link>
        </motion.div>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {tasks.map((task) => (
              <motion.div key={task._id} variants={cardVariants}>
                <TaskCard task={task} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 disabled:opacity-30"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;