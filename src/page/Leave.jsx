import { employees } from "../data/Employees";

function Leave() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Leave Requests</h1>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3">Employee Name</th>
            <th className="p-3">Department</th>
            <th className="p-3">Leave Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-b text-center">
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.department}</td>
              <td className="p-3">{emp.leaveStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leave;