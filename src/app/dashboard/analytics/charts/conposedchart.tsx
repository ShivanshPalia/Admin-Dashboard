

import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const ComposedChartWithAxisLabels: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-gradient-to-br from-[#232323] to-[#3b3b3b] p-6 rounded-lg shadow-lg transition-all transform hover:scale-[1.02] duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Composed Chart Distribution
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis
            dataKey="name"
            label={{
              value: "Month",
              position: "insideBottomRight",
              offset: -10,
              fill: "#fff",
            }}
          />
          <YAxis
            label={{
              value: "Values",
              angle: -90,
              position: "insideLeft",
              fill: "#fff",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f1f1f",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
          />
          <Legend
            wrapperStyle={{ color: "#fff" }}
            iconSize={20}
            align="center"
            verticalAlign="top"
          />
          <Bar
            dataKey="pv"
            barSize={20}
            fill="#413ea0"
            animationDuration={1000}
            animationBegin={0}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#ff7300"
            strokeWidth={3}
            dot={{ stroke: "#ff7300", strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 8 }}
            animationDuration={1500}
            animationBegin={500}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedChartWithAxisLabels;
