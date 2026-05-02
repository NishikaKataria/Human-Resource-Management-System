import { useState } from "react";
import { employees } from "../data/Employees";

function Employees() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredEmployees = employees.filter((emp) => {
    const matchName = emp.name.toLowerCase().includes(search.toLowerCase());
    const matchDepartment =
      department === "All" || emp.department === department;

    return matchName && matchDepartment;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employees</h1>

      <div className="flex gap-4 mb-5">
        <input
          type="text"
          placeholder="Search employee..."
          className="border p-2 rounded w-64"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>All</option>
          <option>IT</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Marketing</option>
        </select>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Department</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id} className="border-b text-center">
              <td className="p-3">{emp.id}</td>
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.email}</td>
              <td className="p-3">{emp.department}</td>
              <td className="p-3">{emp.role}</td>
              <td className="p-3">{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;