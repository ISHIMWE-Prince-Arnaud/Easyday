import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Header />
        <div className="p-4 mx-auto max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks/create" element={<Create />} />
            <Route path="/tasks/:id/edit" element={<Edit />} />
            <Route path="/tasks/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;