// // pages/dashboard/analytics/AnalyticsServerPage.tsx
// import { Metadata } from 'next';
// import { db } from '@/db';
// import AnalyticsClientPage from './analyticsClient';

// export const metadata: Metadata = {
//   title: 'Analytics',
//   description: 'Analytics and insights for the admin dashboard',
// };
// export default async function AnalyticsServerPage() {
//   const totalUsers = await db.user.count();
//   console.log(totalUsers );
  
//   const newUsers = await db.user.count({
//     where: {
//       createdAt: {
//         gte: new Date(new Date().setDate(new Date().getDate() - 7)),
//       },
//     },
//   });
//   const totalRevenue = await db.revenue.aggregate({
//     _sum: {
//       amount: true,
//     },
//   });
//   const userGrowthData = await db.user.groupBy({
//     by: ['createdAt'],
//     _count: {
//       _all: true,
//     },
//   });
//   const salesData = await db.transaction.groupBy({
//     by: ['date'],
//     _sum: {
//       amount: true ,
//     },
//   });
//   return (
//     <AnalyticsClientPage
//       totalUsers={totalUsers}
//       newUsers={newUsers}
//       totalRevenue={totalRevenue._sum.amount || 0}
//       userGrowthData={userGrowthData}
//       salesData={salesData}
//     />
//   );
// }

