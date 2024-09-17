"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for the line chart
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const LineChartComponent: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#2d2d2d] to-[#3b3b3b] w-[90%] lg:w-[60%] mx-auto p-8 rounded-lg shadow-lg transition-all hover:scale-[1.02] duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">User Growth Over Time</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" strokeOpacity={0.2} />
          <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
          <YAxis tick={{ fill: "#ffffff" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f1f1f",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              padding: "10px",
            }}
            cursor={{ stroke: "rgba(255, 255, 255, 0.3)", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
            animationDuration={2000}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
