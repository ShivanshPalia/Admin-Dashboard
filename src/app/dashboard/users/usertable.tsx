"use client";
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
  createdAt:Date;
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
  const handleDelete = (userId:string)=>{
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
       deleteUser(userId);
      router.refresh();  // Refresh the page or update the state to reflect the changes
    }
  }
  return (
    <div className="bg-[#4c4c4c] mr-2 rounded pt-4">
      <Link onClick={() => { handleLinkClick("Add", "/dashboard/Add") }} href="/dashboard/Add">
        <button className='ml-4 bg-[#2e374a] p-2 hover:cursor-pointer rounded'>Add new</button>
      </Link>
      <Table className="mt-6">
        <TableHeader className="text-xl hover:bg-none">
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Created AT</TableHead>
            <TableHead className="">Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
              <TableCell>ADMIN</TableCell>
              <TableCell>ACTIVE</TableCell>
              <TableCell className="text-right">
                <Link href={`/dashboard/users/${user.id}/account`}>
                  <button className='p-1 bg-gray-400 mr-1 text-sm'>VIEW</button>
                </Link>
                
                <button onClick={()=>handleDelete(user.id)} className='p-1 bg-red-400 text-sm '>DELETE</button>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTableClient;
