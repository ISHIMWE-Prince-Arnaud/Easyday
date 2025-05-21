import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Easyday
        </Link>
        <Link
          to="/tasks/create"
          className="btn btn-primary text-white"
        >
          + New Task
        </Link>
      </nav>
    </header>
  );
};

export default Header;