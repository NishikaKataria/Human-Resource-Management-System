import { employees } from "../data/Employees";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Performance() {
  const data = employees.map((emp) => ({
    name: emp.name.split(" ")[0],
    performance: emp.performance,
  }));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employee Performance</h1>

      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Performance Rating</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="performance" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Performance;