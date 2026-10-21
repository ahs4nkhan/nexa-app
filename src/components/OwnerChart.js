import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function OwnerChart({ data }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5">
      <h3 className="text-base font-semibold mb-4">Tasks per person</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.3} />
            <XAxis dataKey="name" tick={{ fill: "currentColor", fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fill: "currentColor", fontSize: 12 }} />
            <Tooltip cursor={{ fill: "rgba(148, 163, 184, 0.15)" }} />
            <Bar dataKey="tasks" fill="#1f7a5c" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default OwnerChart;
