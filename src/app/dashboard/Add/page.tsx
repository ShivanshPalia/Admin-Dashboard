
// // 'use client';
// // import React from 'react';
// // import { createUser } from '@/app/actions/action';

// // const AddUser = () => {
// //   return (
// //     <div className="min-h-screen bg-[#2c2c2c] flex items-center justify-center">
// //       <div className="bg-[#3b3b3b] p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-2xl font-bold text-center text-white mb-6">Add New User</h2>
// //         <form action={createUser} className='space-y-4'>
// //           <input 
// //             placeholder='Enter name' 
// //             name='name'  
// //             type='text' 
// //             className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
// //             required
// //           />
// //           <input 
// //             placeholder='Enter email' 
// //             type='email' 
// //             name='email'  
// //             className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
// //             required
// //           />
// //           <input 
// //             placeholder='Enter phone number' 
// //             type="text" 
// //             name='phone' 
// //             className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
// //             required
// //           />
// //           <input 
// //             placeholder='Enter address' 
// //             type="text" 
// //             name='address' 
// //             className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
// //             required
// //           />
// //           <input 
// //             placeholder='Enter role' 
// //             type="text" 
// //             name='role' 
// //             className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
// //           />
// //           <input 
// //             placeholder='Enter Date of Birth' 
// //             type="date" 
// //             name='dateOfBirth' 
// //             className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
// //           />
// //           <input 
// //             placeholder='Enter password' 
// //             type="password" 
// //             name='password' 
// //             className='w-full p-3 rounded bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none'
// //             required
// //           />
// //           <button 
// //             type='submit' 
// //             className='w-full bg-[#2e374a] text-white p-3 rounded hover:bg-[#9ae3b0] transition-colors'
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddUser;


// 'use server';
// import React from 'react';
// import { createUser } from '@/app/actions/action';

// const AddUser = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center px-4">
//       <div className="bg-gray-800 p-10 rounded-xl shadow-lg w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
//         <h2 className="text-3xl font-extrabold text-center text-white mb-8">Add New User</h2>
//         <form action={createUser} method='POST' className="space-y-6">
//           <input 
//             placeholder="Enter name" 
//             name="name"  
//             type="text" 
//             className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//           <input 
//             placeholder="Enter email" 
//             type="email" 
//             name="email"  
//             className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//           <input 
//             placeholder="Enter phone number" 
//             type="text" 
//             name="phone" 
//             className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//           <input 
//             placeholder="Enter address" 
//             type="text" 
//             name="address" 
//             className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//           <input 
//             placeholder="Enter role" 
//             type="text" 
//             name="role" 
//             className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//           <input 
//             placeholder="Enter Date of Birth" 
//             type="date" 
//             name="dateOfBirth" 
//             className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//           <input 
//             placeholder="Enter password" 
//             type="password" 
//             name="password" 
//             className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//           <button 
//             type="submit" 
//             className="w-full bg-green-500 text-white font-semibold p-4 rounded hover:bg-green-600 transition-colors duration-200 shadow-md"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddUser;
