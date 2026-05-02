import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaCalendarAlt, FaChartBar } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-60 min-h-screen bg-gray-800 text-white p-5">
      <h1 className="text-xl font-bold mb-8"> Dashboard</h1>

      <div className="space-y-12 mt-12">
        <Link to="/" className="block p-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-700 hover:pl-6 hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/employees" className="block p-4 rounded hover:bg-gray-700 text-lg font-semibold">
          Employees
        </Link>

        <Link to="/leave" className="block p-4 rounded hover:bg-gray-700 text-lg font-semibold">
          Leave Requests
        </Link>

        <Link to="/performance" className="block p-4 rounded hover:bg-gray-700 text-lg font-semibold">
          Performance
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;