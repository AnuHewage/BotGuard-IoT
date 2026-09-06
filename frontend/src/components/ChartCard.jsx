import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ChartCard = ({ title, data }) => {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-6
        w-full
      "
    >
      {/* Single Title */}
      <h2
        className="
          text-lg
          font-semibold
          text-white
          mb-5
        "
      >
        {title}
      </h2>

      {/* Full Width Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="normal"
              stroke="#22d3ee"
              strokeWidth={3}
              name="Normal Traffic"
            />

            <Line
              type="monotone"
              dataKey="botnet"
              stroke="#ef4444"
              strokeWidth={3}
              name="Botnet Traffic"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
