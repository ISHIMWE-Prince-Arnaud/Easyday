import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      className="text-center py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-3 text-sm text-gray-600">Loading...</p>
    </motion.div>
  );
};

export default LoadingSpinner;