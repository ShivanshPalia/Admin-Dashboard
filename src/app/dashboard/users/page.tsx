
// "use client"
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useRouter } from 'next/navigation';
// import { useSelectedLink } from '@/app/selectedlinkprovider';
// import { db } from '@/db';
// type users = {
//   name: string | null;
//   email: string;
//   phone: number;
//   id: string;
// };

// const userTable: React.FC = () => {
//   const [users, setUsers] = useState<users[]>([]);
//   const router = useRouter();
//   const { setSelectedLink } = useSelectedLink();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usersData = await db.user.findMany();
//         setUsers(usersData);
//         console.log(usersData);
        
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchData();
//   }, []);
  
//   const handleLinkClick = (linkName: string, href: string) => {
//     setSelectedLink(linkName);
//     router.push(href);
//   };
//       console.log(users);
      
      
//   return (
//     <div className="bg-[#4c4c4c] mr-2 rounded pt-4">
//       <Link onClick={() => { handleLinkClick("Add", "/dashboard/Add") }} href="/dashboard/Add">
//         <button className='ml-4 bg-[#2e374a] p-2 hover:cursor-pointer rounded'>Add new</button>
//       </Link>
//       <Table className="mt-6">
//       <TableHeader className="text-xl hover:bg-none">
//           <TableRow>
//             <TableHead className="">Name</TableHead>
//             <TableHead className="">Email</TableHead>
//             <TableHead className="">Created AT</TableHead>
//             <TableHead className="">Role</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead className="text-right">ACTION</TableHead>
//           </TableRow>
//           </TableHeader>
//         <TableBody>
//           {users.map((user) => (
//             <TableRow key={user.id}>
//               <TableCell className="font-medium">{user.name}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>14.02.2024</TableCell>
//               <TableCell>ADMIN</TableCell>
//               <TableCell>ACTIVE</TableCell>
//               <TableCell className="text-right">
//                 <Link href={`/dashboard/users/${user.id}/account`}>
//                   <button className='p-1 bg-gray-400 mr-1 text-sm'>VIEW</button>
//                 </Link>
//                 <button className='p-1 bg-red-400 text-sm '>DELETE</button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default userTable;



import React from 'react';
import { fetchUsers } from '@/lib/fetchData';
import UserTableClient from './usertable';

export const metadata = {
  title: 'User Table',
};
const UserTablePage: React.FC = async () => {
  const users = await fetchUsers();
  return <UserTableClient users={users} />;
};
export default UserTablePage;
