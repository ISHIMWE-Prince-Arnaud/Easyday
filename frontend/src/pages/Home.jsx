import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3715/tasks");
      setTasks(res.data);
      console.log("Response from /tasks:", res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">All Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
       {tasks.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">No tasks found.</p>
        ) : (
        tasks.map((task) => <TaskCard key={task._id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default Home;