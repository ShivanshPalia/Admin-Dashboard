"use client"
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useState,useEffect } from 'react';
const RADIAN = Math.PI / 180;

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface PieChartWithNeedleProps {
  data: DataItem[];
  needleValue: number;
}

const PieChartWithNeedle: React.FC<PieChartWithNeedleProps> = ({ data, needleValue }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true); // This ensures the component re-renders once it mounts on the client
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server side or during the first render
  }
  const cx = 250;
  const cy = 300;
  const iR = 100;
  const oR =230;

  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
  const needleAngle = 90.0 * (1 - needleValue / totalValue);

  const needlePath = (cx: number, cy: number, iR: number, oR: number, needleAngle: number) => {
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * needleAngle);
    const cos = Math.cos(-RADIAN * needleAngle);
    const r = 10;
    const x0 = cx;
    const y0 = cy;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return (
      <>
        <circle cx={x0} cy={y0} r={r} fill="#d0d000" stroke="none" />
        <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} fill="#d0d000" />
      </>
    );
  };

  return (
    <div className="flex justify-center items-center overflow-visible m-0 w-[100%] h-full">
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needlePath(cx, cy, iR, oR, needleAngle)}
      </PieChart>
    </div>
  );
};

export default PieChartWithNeedle;
