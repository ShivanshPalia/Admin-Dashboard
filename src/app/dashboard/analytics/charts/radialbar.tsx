// components/RadialBarChartComponent.tsx

import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

type DataItem = {
  name: string;
  uv: number;
  fill: string;
};

const data: DataItem[] = [
  { name: '18-24', uv: 31.47, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, fill: '#82ca9d' },
  { name: '40-49', uv: 8.63, fill: '#a4de6c' },
  { name: '50+', uv: 2.63, fill: '#d0ed57' },
  { name: 'unknown', uv: 6.67, fill: '#ffc658' },
];

const RadialBarChartComponent: React.FC = () => {
  return (
    <div className="bg-[#3b3b3b] w-[60%] p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-bold mb-4">Radial Bar Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar
            dataKey="uv"
            cornerRadius={8}
            background={{ fill: '#eee' }}
            label={{ fill: '#fff', position: 'insideStart' }}
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBarChartComponent;
