"use client";
import React, { useEffect, useState } from "react";
import LineChartComponent from "./charts/line";
import PieChartWithCustomizedLabel from "./charts/pie";
import BarChartComponent from "./charts/bar";
import RadialBarChartComponent from "./charts/radialbar";
import { fetchNews } from "@/lib/fetchnews";
interface AnalyticsClientPageProps {
  totalUsers: number;
  newUsers: number;
  totalRevenue: number;
  userGrowthData: Array<{ createdAt: Date; _count: { _all: number } }>;
  salesData: Array<{ date: Date; _sum: { amount: number | null } }>;
}
interface NewsArticle {
  title: string;
  description: string;
  url: string;
  source: {
    name: string;
  };
}

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   value,
//   name,
// }: any) => {
//   const RADIAN = Math.PI / 180;
//   const x = cx + (outerRadius - 10) * Math.cos(-midAngle * RADIAN);
//   const y = cy + (outerRadius - 10) * Math.sin(-midAngle * RADIAN);
//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${name}: ${value}`}
//     </text>
//   );
// };

export default function AnalyticsClientPage({
  totalUsers,
  newUsers,
  totalRevenue,
  userGrowthData,
  salesData,
}: AnalyticsClientPageProps) {
  const [Articles,setArticles] = useState<NewsArticle[]>([]);

  useEffect(()=>{
    async function getNews(){
      const news = await fetchNews("technology")
      setArticles(news);
      console.log(Articles);
      
    }
    getNews()
    console.log(Articles);
    
  },[])
  const averageOrderValue = totalUsers > 0 ? (totalRevenue / totalUsers).toFixed(2) : "0.00";

  // const salesDataPieChart = salesData.map((data) => ({
  //   name: new Date(data.date).toLocaleDateString(),
  //   value: data._sum.amount !== null ? data._sum.amount : 0,
  // }));

  return (
    <div className="min-h-screen p-8 bg-[#2c2c2c] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#3b3b3b] p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p className="text-2xl">{totalUsers}</p>
        </div>
        <div className="bg-[#3b3b3b] p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">New Users (Last 7 Days)</h2>
          <p className="text-2xl">{newUsers}</p>
        </div>
        <div className="bg-[#3b3b3b] p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Revenue</h2>
          <p className="text-2xl">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-[#3b3b3b] p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Average Order Value</h2>
          <p className="text-2xl">${averageOrderValue}</p>
        </div>
      </div>
      <div className="flex gap-4 mb-8">
          <LineChartComponent/>
        <div className="bg-[#3b3b3b] w-[50%] p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Sales Data Distribution</h2>
          <PieChartWithCustomizedLabel/>
        </div>
      </div>
      <div className="flex gap-4">
        <div >
          <BarChartComponent />
        </div>
          <RadialBarChartComponent/>
      </div>
      <div className="flex gap-4">
      <div className="w-[60%] bg-[#3b3b3b] rounded-lg p-4 shadow-md mt-8">
        <h2 className="text-lg font-bold mb-4">Latest Analytics News</h2>
        <div className="space-y-4">
          {Articles.length > 0 ? (
            Articles.map((article, index) => (
              <div key={index} className="bg-[#3b3b3b] p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p>No news articles available.</p>
          )}
        </div>
      </div>
      <div className="w-[40%] bg-[#3b3b3b] rounded-lg p-4 shadow-md mt-8"></div>
      </div>
     
    </div>
  );
}




