"use client";
import React, { useEffect, useState } from "react";
import LineChartComponent from "./charts/line";
import PieChartWithCustomizedLabel from "./charts/pie";
import BarChartComponent from "./charts/bar";
import RadialBarChartComponent from "./charts/radialbar";
import NewsSection from "./NewSection";
import ComposedChartWithAxisLabels from "./charts/conposedchart";
import { fetchNews } from "@/lib/fetchnews";
import SocialMediaContainer from "./charts/media";
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
export default function AnalyticsClientPage({
  totalUsers,
  newUsers,
  totalRevenue,
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
      <div className="flex gap-4 mb-8">
          <BarChartComponent />
          <RadialBarChartComponent/>
      </div>
      <div className="flex gap-4">
        <div className="w-[60%] ">
        <NewsSection/>
        </div>
        <div className="w-[40%] flex flex-col h-[30%] gap-4 ">
        <ComposedChartWithAxisLabels/>
        <SocialMediaContainer/>
        </div>
      </div>
      </div>
     
  
  );
}




