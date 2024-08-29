// 'use client';
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { FaUserAlt, FaDollarSign, FaChartLine, FaTasks } from 'react-icons/fa';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// type Activity = {
//   user: string;
//   action: string;
//   time: string;
// };

// type User = {
//     name: string | null;
//     email: string;
//     phone: number;
//     id: string;
//     createdAt:Date;
//     address:string;
//   };
  
//   type Props = {
//     data: User[];
//   };

// const DashboardClient: React.FC<Props> = ({ data }) => {
//   const chartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Revenue',
//         data: [12000, 15000, 18000, 22000, 25000, 30000],
//         backgroundColor: 'rgba(75, 192, 192, 0.3)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-[#2c2c2c] text-white min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
//     {data.map((item)=>(
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {[
//           { label: 'Total Users', value: item.address, icon: <FaUserAlt /> },
//           { label: 'Revenue', value: `$${data.revenue}`, icon: <FaDollarSign /> },
//           { label: 'New Signups', value: data.newSignups, icon: <FaChartLine /> },
//           { label: 'Tasks Completed', value: data.tasksCompleted, icon: <FaTasks /> },
//         ].map(({ label, value, icon }, index) => (
//           <div key={index} className="p-4 bg-[#3b3b3b] shadow-md rounded-lg flex items-center">
//             <div className="text-3xl mr-4 text-[#9ae3b0]">{icon}</div>
//             <div>
//               <h2 className="text-xl font-medium text-[#f1f1f1]">{label}</h2>
//               <p className="text-2xl font-semibold">{value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     ))}
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {[
//           { label: 'Total Users', value: data.totalUsers, icon: <FaUserAlt /> },
//           { label: 'Revenue', value: `$${data.revenue}`, icon: <FaDollarSign /> },
//           { label: 'New Signups', value: data.newSignups, icon: <FaChartLine /> },
//           { label: 'Tasks Completed', value: data.tasksCompleted, icon: <FaTasks /> },
//         ].map(({ label, value, icon }, index) => (
//           <div key={index} className="p-4 bg-[#3b3b3b] shadow-md rounded-lg flex items-center">
//             <div className="text-3xl mr-4 text-[#9ae3b0]">{icon}</div>
//             <div>
//               <h2 className="text-xl font-medium text-[#f1f1f1]">{label}</h2>
//               <p className="text-2xl font-semibold">{value}</p>
//             </div>
//           </div>
//         ))}
//       </div> */}

//       <div className="bg-[#3b3b3b] shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-medium mb-4">Revenue Overview</h2>
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             scales: {
//               x: { ticks: { color: '#f1f1f1' } },
//               y: { ticks: { color: '#f1f1f1' } },
//             },
//           }}
//         />
//       </div>

//       <div className="bg-[#3b3b3b] shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-medium mb-4">Recent Activities</h2>
//         <Table className="min-w-full text-white">
//           <TableHeader>
//             <TableRow>
//               <TableHead>User</TableHead>
//               <TableHead>Action</TableHead>
//               <TableHead>Time</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data.recentActivities.map((activity, index) => (
//               <TableRow key={index}>
//                 <TableCell className="font-medium">{activity.user}</TableCell>
//                 <TableCell>{activity.action}</TableCell>
//                 <TableCell>{activity.time}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default DashboardClient;


'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FaUserAlt, FaDollarSign, FaChartLine, FaTasks } from 'react-icons/fa';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Import and register Chart.js components
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Activity = {
  user: string | null;
  action: string;
  time: string;
};
type User = {
  name: string | null;
  email: string;
  phone: number;
  id: string;
  createdAt: Date;
  address: string | null ;
  dateOfBirth: Date | null;
};

type Props = {
  data: User[];
  recentActivities: Activity[]; // Include recent activities separately
};

const DashboardClient: React.FC<Props> = ({ data,recentActivities }) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 15000, 18000, 22000, 25000, 30000],
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=' '>
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
      {data.map((item) => (
        // dashboard overview
        <div key={item.id} className=" px-4 md:px-6 lg:px-8">
  <div className=" bg-[#3b3b3b] p-6 shadow-md rounded-lg flex items-center mb-6">
    <div className="text-3xl mr-4 text-[#9ae3b0]">
      <FaUserAlt />
    </div>
    <div>
      <h2 className="text-xl font-medium text-[#f1f1f1]">User Name</h2>
      <p className="text-2xl font-semibold">{item.name}</p>
      <p className="text-xl font-semibold">Email: {item.email}</p>
      <p className="text-xl font-semibold">Phone: {item.phone}</p>
      <p className="text-xl font-semibold">Address: {item.address}</p>
      <p className="text-xl font-semibold">Date of Birth: {item.dateOfBirth?.toLocaleDateString()}</p>
    </div>
  </div>
</div>
      ))}
      {/* revenue overview */}
      <div className="  bg-[#3b3b3b] shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-medium mb-4">Revenue Overview</h2>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              x: { ticks: { color: '#f1f1f1' } },
              y: { ticks: { color: '#f1f1f1' } },
            },
          }}
        />
      </div>
          {/* recent activities */}
      <div className="bg-[#3b3b3b] shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-medium mb-4">Recent Activities</h2>
        <Table className="min-w-full text-white">
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentActivities.map((activity, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DashboardClient;

