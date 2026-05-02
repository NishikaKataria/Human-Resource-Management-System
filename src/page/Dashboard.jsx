import { employees } from "../data/Employees";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const activeEmployees = employees.filter((emp) => emp.status === "Active").length;
  const pendingLeaves = employees.filter((emp) => emp.leaveStatus === "Pending").length;

  const departmentData = [
    {
      department: "IT",
      count: employees.filter((emp) => emp.department === "IT").length,
    },
    {
      department: "HR",
      count: employees.filter((emp) => emp.department === "HR").length,
    },
    {
      department: "Finance",
      count: employees.filter((emp) => emp.department === "Finance").length,
    },
    {
      department: "Marketing",
      count: employees.filter((emp) => emp.department === "Marketing").length,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded shadow">
          <h3>Total Employees</h3>
          <p className="text-3xl font-bold">{employees.length}</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Active Employees</h3>
          <p className="text-3xl font-bold">{activeEmployees}</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Departments</h3>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Pending Leaves</h3>
          <p className="text-3xl font-bold">{pendingLeaves}</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Department Wise Employees</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentData}>
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;