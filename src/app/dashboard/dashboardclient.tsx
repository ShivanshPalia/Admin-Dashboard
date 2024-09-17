// 'use client';
// import React, { useState,useEffect } from 'react';
// import "@/app/dashboard/dashboardcard.css"
// import { Avatar } from '@mui/material';
// import PieChartWithNeedle from './dashboardchart/needlepie';
// import FeedbackForm from './dashboardchart/feedbackForm';
// import SearchUserForm from './dashboardchart/searchUser';
// import FeedbackList from './dashboardchart/feedback';
// import { FaPhone } from 'react-icons/fa';
// import { FaMailchimp } from 'react-icons/fa';
// import UserCard from './userCard';
// type User = {
//     name: string | null;
//     email: string;
//     phone: number;
//     id: string;
//     createdAt: Date;
//     address: string | null ;
//     dateOfBirth: Date | null;
//   };

// type Props = {
//   data: User[];
// };

// const DashboardClient: React.FC<Props> = ({
//   data = [],
// }) => {
//   const dataneedle = [
//     { name: 'Group A', value: 80, color: '#ff0000' },
//     { name: 'Group B', value: 45, color: '#00ff00' },
//     { name: 'Group C', value: 25, color: '#0000ff' },
    
//   ];

//   const rankingsData = [
//     { id: 1, name: "John Doe", avatar: "/john-avatar.png", staticRank: "Gold" },
//     { id: 2, name: "Jane Smith", avatar: "/jane-avatar.png", staticRank: "Silver" },
//     {id:3, name: "Jack Powel" , avatar : "/jane-avatar.png", staticRank:"Platinum"}
//     // Add more users here
//   ];
//   const [contact,setContact] = useState(false)
//   const [users,setUsers] = useState(false)
//   const toggleUsers = ()=>{
//     setUsers((users)=>!users)
//   }
// const toggleContact =()=>{
//   setContact((contact)=>!contact)
// }

//   return (
//     <div className='px-4 md:px-6 lg:px-8'>
//       <h1 className="text-3xl font-semibold mb-6 text-white">Dashboard Overview</h1>
//       {/* KPI Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         <div className="bg-white shadow rounded-lg p-6 text-center text-violet-600 relative">
//           <h2 className="text-xl text-violet-600 font-semibold">Total Users</h2>
//           <p className="text-4xl font-bold">{data.length}</p>
//           <button onClick={toggleUsers} className='bg-blue-600 text-sm text-white rounded-lg px-2 py-1 absolute bottom-2 right-2'>
//             {users ? "hide users" : "show users"}
//           </button>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 text-center text-violet-600">
//           <h2 className="text-xl font-semibold">Monthly Revenue</h2>
//           <p className="text-4xl font-bold">$56,789</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 text-center text-violet-600">
//           <h2 className="text-xl font-semibold">Active Users</h2>
//           <p className="text-4xl font-bold">456</p>
//         </div>
//       </div>
//       <div className='flex gap-4'>
//       <div className='w-[60%]'>
//       {/* User Cards Section */}
//       <div className='flex gap-4 mb-8 flex-wrap'>
//       {users &&
//       data.map((item) => (
//               <UserCard key={item.id} user={item}/>
//        ))}
//       </div>
//      {/* Static Feedback Section */}
     
//      <FeedbackList/>


//       {/* Dynamic Charts Section */}
//       <section className="flex gap-3 h-64 items-stretch items-center mb-8 ">
       
//        {/* chart section */}
//         <section className="bg-white w-full  h-full shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Activities</h2>
//         <ul className="text-gray-700">
//           <li className="border-b py-2 flex  items-center gap-3">
//             <div>
//               <Avatar/>
//             </div>
//             <div>
//             <span className="font-semibold">John Doe</span> commented on <span className="font-semibold">"New Features"</span> at 10:30 AM
//             </div>
//           </li>
//           <li className="border-b py-2 flex items-center gap-3">
//             <div>
//             <Avatar/>
//             </div>
//             <div>
//             <span className="font-semibold">Jane Smith</span> completed <span className="font-semibold">"Profile Update"</span> at 11:15 AM
//             </div>
//           </li>
//           <li className="border-b py-2 flex items-center gap-3">
//             <div>
//             <Avatar/>
//             </div>
//             <div>
//             <span className="font-semibold">Alice Johnson</span> liked <span className="font-semibold">"UI Improvements"</span> at 12:45 PM
//             </div>
//           </li>
//         </ul>
//       </section>
//       </section>

//       {/* Static Recent Activities Section */}
//       <div className="bg-white rounded flex gap-2 h-64">
//   <div className="w-[40%]">
//     <PieChartWithNeedle data={dataneedle} needleValue={90} />
//   </div>
//   <div className="text-black w-[60%] flex items-center justify-center mr-3">
//     <div className="bg-gray-100 shadow-md rounded-lg w-full p-4">
//       <h3 className="text-xl font-bold mb-4">Rankings</h3>
//       {rankingsData.map((user, index) => (
//         <div key={user.id} className="flex items-center mb-3">
//           <span className="text-lg font-semibold text-blue-500 mr-3">{index + 1}.</span>
//           <img
//             src={user.avatar || "/default-avatar.png"} // use a default avatar if none exists
//             alt={user.name}
//             className="w-8 h-8 rounded-full mr-3"
//           />
//           <span className="text-base">{user.name}</span>
//           <span className="ml-auto text-blue-500 font-semibold">{user.staticRank}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//      </div>
//      {/* right side bar */}
//      <div className="w-[40%] flex flex-col gap-8 bg-white h-auto text-blue-500 p-4 shadow-lg rounded-lg ">
//   {/* Subscription Section */}
//  <FeedbackForm/>

//   {/* Social Accounts Section */}
//     <SearchUserForm/>
//   {/* New Feature: Contact Us Section */}
//   <div className="bg-blue-400 w-full p-4 rounded-lg flex flex-col ">
//     <h1 className="text-white text-lg font-semibold mb-4">Contact Us</h1>
//     <p className="text-white text-sm mb-2 ">Have questions? Reach out to us!</p>
//     <button onClick={toggleContact} className="bg-white w-1/2 text-blue-400 rounded-xl px-4 py-2 font-semibold hover:bg-blue-100 transition duration-300">
//       Contact Support
//     </button>
//       {contact &&
//       <div className='mt-3'>
//             <span className='cursor-pointer text-white flex gap-2 items-center'><FaPhone/> 123456789</span>
//             <div className='text-white cursor-pointer flex items-center gap-2'><FaMailchimp/> arayn@gmail.com</div>
//       </div>
//       }
//   </div>

//   {/* New Feature: Recent Updates Section */}
//   <div className="bg-blue-400 w-full p-4 rounded-lg flex flex-col items-center">
//     <h1 className="text-white text-lg font-semibold mb-4">Recent Updates</h1>
//     <ul className="text-white text-sm list-disc list-inside">
//       <li>New feature added to the dashboard.</li>
//       <li>Performance improvements.</li>
//       <li>Bug fixes and optimizations.</li>
//     </ul>
//   </div>
// </div>

//      </div>
//     </div>
//   );
// };

// export default DashboardClient;



'use client';
import React, { useState } from 'react';
import "@/app/dashboard/dashboardcard.css"
import { Avatar } from '@mui/material';
import PieChartWithNeedle from './dashboardchart/needlepie';
import FeedbackForm from './dashboardchart/feedbackForm';
import SearchUserForm from './dashboardchart/searchUser';
import FeedbackList from './dashboardchart/feedback';
import { FaPhone, FaMailchimp } from 'react-icons/fa';
import UserCard from './userCard';

type User = {
  name: string | null;
  email: string;
  phone: number;
  id: string;
  createdAt: Date;
  address: string | null;
  dateOfBirth: Date | null;
};

type Props = {
  data: User[];
};

const DashboardClient: React.FC<Props> = ({ data = [] }) => {
  const dataneedle = [
    { name: 'Group A', value: 80, color: '#ff0000' },
    { name: 'Group B', value: 45, color: '#00ff00' },
    { name: 'Group C', value: 25, color: '#0000ff' },
  ];

  const rankingsData = [
    { id: 1, name: "John Doe", avatar: "/john-avatar.png", staticRank: "Gold" },
    { id: 2, name: "Jane Smith", avatar: "/jane-avatar.png", staticRank: "Silver" },
    { id: 3, name: "Jack Powel", avatar: "/jane-avatar.png", staticRank: "Platinum" },
  ];

  const [contact, setContact] = useState(false);
  const [users, setUsers] = useState(false);

  const toggleUsers = () => setUsers(!users);
  const toggleContact = () => setContact(!contact);

  return (
    <div className='px-4 md:px-6 lg:px-8'>
      <h1 className="text-3xl font-semibold mb-6 text-white">Dashboard Overview</h1>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-6 text-center text-violet-600 relative">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-4xl font-bold">{data.length}</p>
          <button onClick={toggleUsers} className='bg-blue-600 text-sm text-white rounded-lg px-2 py-1 absolute bottom-2 right-2'>
            {users ? "Hide Users" : "Show Users"}
          </button>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center text-violet-600">
          <h2 className="text-xl font-semibold">Monthly Revenue</h2>
          <p className="text-4xl font-bold">$56,789</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center text-violet-600">
          <h2 className="text-xl font-semibold">Active Users</h2>
          <p className="text-4xl font-bold">456</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-4'>
        {/* Main Content Section */}
        <div className='w-full lg:w-3/5'>
          {/* User Cards Section */}
          {users && (
            <div className='flex flex-wrap gap-4 mb-8'>
              {data.map((item) => (
                <UserCard key={item.id} user={item} />
              ))}
            </div>
          )}

          {/* Feedback List */}
          <FeedbackList />

          {/* Recent Activities & Chart Section */}
          <section className="flex flex-col gap-4 lg:flex-row lg:h-[40%] h-[30%] items-stretch mb-8">
            <section className="bg-white w-full lg:w-1/2 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Activities</h2>
              <ul className="text-gray-700">
                {[
                  { name: 'John Doe', activity: 'commented on "New Features"', time: '10:30 AM' },
                  { name: 'Jane Smith', activity: 'completed "Profile Update"', time: '11:15 AM' },
                  { name: 'Alice Johnson', activity: 'liked "UI Improvements"', time: '12:45 PM' }
                ].map((activity, index) => (
                  <li key={index} className="border-b py-2 flex items-center gap-3">
                    <Avatar />
                    <span>
                      <span className="font-semibold">{activity.name}</span> {activity.activity} at {activity.time}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white w-full lg:w-1/2 shadow rounded-lg p-6 flex items-center">
              <PieChartWithNeedle data={dataneedle} needleValue={90} />
            </section>
          </section>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          <FeedbackForm />
          <SearchUserForm />

          {/* Contact Us Section */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <h1 className="text-white text-lg font-semibold mb-4">Contact Us</h1>
            <p className="text-white text-sm mb-2">Have questions? Reach out to us!</p>
            <button onClick={toggleContact} className="bg-white text-blue-400 rounded-lg px-4 py-2 hover:bg-blue-100 transition duration-300">
              Contact Support
            </button>
            {contact && (
              <div className='mt-3'>
                <span className='flex items-center gap-2 text-white'>
                  <FaPhone /> 123456789
                </span>
                <div className='flex items-center gap-2 text-white'>
                  <FaMailchimp /> arayn@gmail.com
                </div>
              </div>
            )}
          </div>

          {/* Recent Updates Section */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <h1 className="text-white text-lg font-semibold mb-4">Recent Updates</h1>
            <ul className="text-white text-sm">
              <li>New feature added to the dashboard.</li>
              <li>Performance improvements.</li>
              <li>Bug fixes and optimizations.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
