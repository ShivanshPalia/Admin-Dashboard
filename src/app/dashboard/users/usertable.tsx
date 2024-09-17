// "use client";
// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useSelectedLink } from '@/app/selectedlinkprovider';
// import { deleteUser } from '@/app/actions/action';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// type User = {
//   name: string | null;
//   email: string;
//   phone: number;
//   id: string;
//   createdAt:Date;
// };
// type Props = {
//   users: User[];
// };
// const UserTableClient: React.FC<Props> = ({ users }) => {
//   const router = useRouter();
//   const { setSelectedLink } = useSelectedLink();

//   const handleLinkClick = (linkName: string, href: string) => {
//     setSelectedLink(linkName);
//     router.push(href);
//   };
//   const handleDelete = (userId:string)=>{
//     const confirmed = confirm("Are you sure you want to delete this user?");
//     if (confirmed) {
//        deleteUser(userId);
//       router.refresh();  // Refresh the page or update the state to reflect the changes
//     }
//   }
//   return (
//     <div className="bg-[#4c4c4c] mr-2 rounded pt-4">
//       <Link onClick={() => { handleLinkClick("Add", "/dashboard/Add") }} href="/dashboard/Add">
//         <button className='ml-4 bg-[#2e374a] p-2 hover:cursor-pointer rounded'>Add new</button>
//       </Link>
//       <Table className="mt-6">
//         <TableHeader className="text-xl hover:bg-none">
//           <TableRow>
//             <TableHead className="">Name</TableHead>
//             <TableHead className="">Email</TableHead>
//             <TableHead className="">Created AT</TableHead>
//             <TableHead className="">Role</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead className="text-right">ACTION</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {users.map((user) => (
//             <TableRow key={user.id}>
//               <TableCell className="font-medium">{user.name}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
//               <TableCell>ADMIN</TableCell>
//               <TableCell>ACTIVE</TableCell>
//               <TableCell className="text-right">
//                 <Link href={`/dashboard/users/${user.id}/account`}>
//                   <button className='p-1 bg-gray-400 mr-1 text-sm'>VIEW</button>
//                 </Link>
                
//                 <button onClick={()=>handleDelete(user.id)} className='p-1 bg-red-400 text-sm '>DELETE</button>
                
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default UserTableClient;


'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelectedLink } from '@/app/selectedlinkprovider';
import { deleteUser } from '@/app/actions/action';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type User = {
  name: string | null;
  email: string;
  phone: number;
  id: string;
  createdAt: Date;
};

type Props = {
  users: User[];
};

const UserTableClient: React.FC<Props> = ({ users }) => {
  const router = useRouter();
  const { setSelectedLink } = useSelectedLink();

  const handleLinkClick = (linkName: string, href: string) => {
    setSelectedLink(linkName);
    router.push(href);
  };

  const handleDelete = (userId: string) => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      deleteUser(userId);
      router.refresh();  // Refresh the page or update the state to reflect the changes
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">User Management</h2>
        <Link href="/dashboard/Add">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            onClick={() => handleLinkClick("Add", "/dashboard/Add")}
          >
            Add New User
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full table-auto text-left bg-gray-700 text-gray-200 rounded-lg shadow-md">
          <TableHeader>
            <TableRow className="bg-gray-900 text-white">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created AT</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-gray-600 transition-colors duration-300"
              >
                <TableCell className="font-semibold text-white">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
                <TableCell>ADMIN</TableCell>
                <TableCell>ACTIVE</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/dashboard/users/${user.id}/account`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm transition duration-300 ease-in-out">
                        VIEW
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm transition duration-300 ease-in-out"
                    >
                      DELETE
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTableClient;
