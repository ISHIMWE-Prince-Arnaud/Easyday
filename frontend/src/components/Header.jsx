import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-white shadow-md py-4 px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Easyday
        </Link>
        <Link
          to="/tasks/create"
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-full shadow-sm transition-all duration-200"
        >
          + New Task
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;